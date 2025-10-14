import { HeroCarousel } from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <HeroCarousel />
      
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <h1 className="mb-4 text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
            Amba News
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Portal berita terpercaya untuk informasi terkini dari seluruh dunia
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/prank")}
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
