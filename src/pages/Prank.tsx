import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import scare1 from "@/assets/scare-1.jpeg";
import scare2 from "@/assets/scare-2.jpeg";
import scare3 from "@/assets/scare-3.jpeg";
import scare4 from "@/assets/scare-4.jpeg";
import audioScream from "@assets/scream.mp3";

const scareImages = [scare1, scare2, scare3, scare4];

const Prank = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Play scary sound - Ganti URL ini dengan audio kamu sendiri
    const audio = new Audio(audioScream);
    audio.volume = 1.0;
    audio.play().catch(err => console.log("Audio play failed:", err));

    // Ganti gambar seram setiap 0.5 detik untuk efek lebih menakutkan
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % scareImages.length);
    }, 500);

    // Kembali ke home setelah 5 detik
    const timeout = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      audio.pause();
    };
  }, [navigate]);

  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden cursor-pointer" onClick={() => navigate("/")}>
      {scareImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Scare"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Prank;
