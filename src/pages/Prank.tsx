import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import scare1 from "@/assets/scare-1.jpeg";
import scare2 from "@/assets/scare-2.jpeg";
import scare3 from "@/assets/scare-3.jpeg";
import scare4 from "@/assets/scare-4.jpeg";
import audioScream from "@/assets/scream.mp3";
import audioCreepyLaugh from "@/assets/creepy-laugh.mp3";
import audioScaryMusicBox from "@/assets/scary-music-box.mp3";
import audioScaryTransition from "@/assets/scary-transition.mp3";

const scareImages = [scare1, scare2, scare3, scare4];
const scaryTexts = ["I SEE YOU", "YOU CAN'T ESCAPE", "BEHIND YOU", "DON'T LOOK BACK", "IT'S TOO LATE", "RUN", "HELP ME", "YOU'RE NEXT"];

const Prank = () => {
	const navigate = useNavigate();
	const [currentImage, setCurrentImage] = useState(0);
	const [flash, setFlash] = useState(false);
	const [shake, setShake] = useState(false);
	const [glitch, setGlitch] = useState(false);
	const [showText, setShowText] = useState(false);
	const [currentText, setCurrentText] = useState("");
	const [deletingFiles, setDeletingFiles] = useState(false);
	const [fileProgress, setFileProgress] = useState(0);
	const [imageSpeed, setImageSpeed] = useState(1000);

	const audios = useMemo(
		() => ({
			scream: new Audio(audioScream),
			laugh: new Audio(audioCreepyLaugh),
			musicBox: new Audio(audioScaryMusicBox),
			transition: new Audio(audioScaryTransition),
		}),
		[]
	);

	useEffect(() => {
		const allAudioElements = Object.values(audios);

		const preventBack = (e: PopStateEvent) => {
			window.history.pushState(null, "", window.location.href);
			e.preventDefault();
		};

		const goFullscreen = () => {
			document.documentElement.requestFullscreen().catch((err) => console.log("Fullscreen failed:", err));
		};

		goFullscreen();
		window.history.pushState(null, "", window.location.href);
		window.addEventListener("popstate", preventBack);

		audios.scream.volume = 1.0;
		audios.scream.play().catch((err) => console.log("Scream audio failed:", err));

		audios.musicBox.volume = 0.4;
		audios.musicBox.loop = true;
		setTimeout(() => {
			audios.musicBox.play().catch((err) => console.log("Music box audio failed:", err));
		}, 1500);

		const randomSoundInterval = setInterval(() => {
			const soundToPlay = Math.random() > 0.4 ? audios.laugh : audios.transition;
			soundToPlay.volume = Math.random() * 0.5 + 0.2;
			soundToPlay.currentTime = 0;
			soundToPlay.play().catch((err) => console.log("Random sound failed:", err));
		}, Math.random() * 4000 + 2000);

		const deletingFilesTimeout = setTimeout(() => {
			setDeletingFiles(true);
			let progress = 0;
			const progressInterval = setInterval(() => {
				progress += Math.random() * 15;
				if (progress >= 100) {
					progress = 100;
					clearInterval(progressInterval);
				}
				setFileProgress(Math.floor(progress));
			}, 200);
			return () => clearInterval(progressInterval);
		}, 1000);

		const flashInterval = setInterval(() => {
			setFlash(true);
			setTimeout(() => setFlash(false), 100);
		}, Math.random() * 1000 + 500);

		const shakeInterval = setInterval(() => {
			setShake(true);
			setTimeout(() => setShake(false), 200);
		}, Math.random() * 800 + 400);

		const glitchInterval = setInterval(() => {
			setGlitch(true);
			setTimeout(() => setGlitch(false), 150);
		}, Math.random() * 600 + 300);

		const textInterval = setInterval(() => {
			setCurrentText(scaryTexts[Math.floor(Math.random() * scaryTexts.length)]);
			setShowText(true);
			setTimeout(() => setShowText(false), 800);
		}, Math.random() * 1500 + 1000);

		const speedUpInterval = setInterval(() => {
			setImageSpeed((prevSpeed) => Math.max(50, prevSpeed - 100));
		}, 1000);

		const navigateTimeout = setTimeout(() => {
			if (document.fullscreenElement) {
				document.exitFullscreen();
			}
			navigate("/");
		}, 15000);

		return () => {
			allAudioElements.forEach((audio) => {
				audio.pause();
				audio.currentTime = 0;
			});
			window.removeEventListener("popstate", preventBack);
			clearTimeout(deletingFilesTimeout);
			clearTimeout(navigateTimeout);
			clearInterval(flashInterval);
			clearInterval(shakeInterval);
			clearInterval(glitchInterval);
			clearInterval(textInterval);
			clearInterval(speedUpInterval);
			clearInterval(randomSoundInterval);
		};
	}, [navigate, audios]);

	useEffect(() => {
		const imageInterval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % scareImages.length);
		}, imageSpeed);

		return () => {
			clearInterval(imageInterval);
		};
	}, [imageSpeed]);

	return (
		<div
			className={`fixed inset-0 w-full h-full bg-black overflow-hidden ${shake ? "animate-shake" : ""}`}
			style={{
				cursor: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'%3E%3Ctext y=\'24\' font-size=\'24\'%3E💀%3C/text%3E%3C/svg%3E"), auto',
			}}
			onClick={() => {
				if (document.fullscreenElement) {
					document.exitFullscreen();
				}
				navigate("/");
			}}
		>
			{flash && (
				<div
					className="absolute inset-0 z-50 pointer-events-none"
					style={{
						background: Math.random() > 0.5 ? "#ff0000" : "#ffffff",
						opacity: 0.8,
					}}
				/>
			)}

			{scareImages.map((image, index) => (
				<img
					key={index}
					src={image}
					alt="Scare"
					className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
						index === currentImage ? "opacity-100" : "opacity-0"
					} ${glitch ? "animate-glitch" : ""}`}
					style={{
						filter: glitch ? `hue-rotate(${Math.random() * 360}deg) saturate(${Math.random() * 5})` : "none",
						transform: glitch ? `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)` : "none",
					}}
				/>
			))}

			{showText && (
				<div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
					<h1
						className="text-6xl md:text-9xl font-bold text-red-600 animate-pulse"
						style={{
							textShadow: "0 0 20px #ff0000, 0 0 40px #ff0000",
							transform: `rotate(${Math.random() * 20 - 10}deg)`,
						}}
					>
						{currentText}
					</h1>
				</div>
			)}

			{deletingFiles && (
				<div className="absolute top-10 left-10 z-40 bg-black/90 border-2 border-red-600 p-6 rounded font-mono text-red-500">
					<div className="flex items-center gap-3 mb-3">
						<div className="animate-spin">⚠️</div>
						<span className="text-xl font-bold">CRITICAL ERROR</span>
					</div>
					<p className="mb-2">Deleting system files...</p>
					<div className="w-64 h-6 bg-gray-800 rounded overflow-hidden mb-2">
						<div className="h-full bg-red-600 transition-all duration-200" style={{ width: `${fileProgress}%` }} />
					</div>
					<p className="text-sm">{fileProgress}% Complete</p>
					<p className="text-xs mt-2 text-red-400 animate-pulse">DO NOT TURN OFF YOUR COMPUTER</p>
				</div>
			)}

			<style>{`
        @keyframes shake {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          10% { transform: translate(-10px, -10px) rotate(-2deg); }
          20% { transform: translate(10px, 10px) rotate(2deg); }
          30% { transform: translate(-10px, 10px) rotate(-2deg); }
          40% { transform: translate(10px, -10px) rotate(2deg); }
          50% { transform: translate(-10px, -10px) rotate(-2deg); }
          60% { transform: translate(10px, 10px) rotate(2deg); }
          70% { transform: translate(-10px, 10px) rotate(-2deg); }
          80% { transform: translate(10px, -10px) rotate(2deg); }
          90% { transform: translate(-10px, -10px) rotate(-2deg); }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0); }
        }
        .animate-shake {
          animation: shake 0.2s infinite;
        }
        .animate-glitch {
          animation: glitch 0.1s infinite;
        }
      `}</style>
		</div>
	);
};

export default Prank;