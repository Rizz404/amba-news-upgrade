import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const navItems = ["Home", "About", "Gallery", "Downloads"];
  const footerLinks = {
    Navigate: ["Home", "About", "Gallery", "Contact Us"],
    Events: ["Wedding", "Corporate", "Concerts"],
    "Follow Us": ["Instagram", "Facebook", "Twitter"],
  };

  return (
    <div className="bg-[#FBF6EE] text-[#3A3A3A] font-sans">
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('https://ebilahall.fts.biz.id/storage/photos/1/image_hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <header className="relative z-10 p-6 md:p-8">
          <nav className="container mx-auto flex justify-between items-center text-white">
            <h1 className="text-2xl font-serif font-bold">Ebila Hall</h1>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => navigate("/prank")}
                  className="hover:text-[#D4A373] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => navigate("/prank")}
                className="hover:text-[#D4A373] transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/prank")}
                className="bg-[#D4A373] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all"
              >
                Register
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => navigate("/prank")}>Menu</button>
            </div>
          </nav>
        </header>
        <div className="relative z-10 flex-grow flex items-center justify-center text-center text-white px-4">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold drop-shadow-lg">
              Your Event, Our Space.
            </h2>
            <p className="mt-4 max-w-xl mx-auto drop-shadow-md">
              Welcome to Ebila Hall, a versatile event hall in West Jakarta. Designed with warm accents and timeless elegance.
            </p>
            <div className="mt-8 flex justify-center items-center gap-8">
              <button
                onClick={() => navigate("/prank")}
                className="bg-[#D4A373] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-lg"
              >
                Reserve Now <ArrowRight size={20} />
              </button>
              <p className="hidden md:block">Perfect for weddings, events, meetings, and photo pre-weddings</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-serif text-[#3A3A3A] mb-6">
              About Ebila Hall
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              We offer a blend of vintage and classic styles to create a unique and memorable event. With versatile spaces, elegant lighting, and a great atmosphere, it's the perfect space for concerts, weddings, corporate, and private functions.
            </p>
            <button
              onClick={() => navigate("/prank")}
              className="border border-[#D4A373] text-[#D4A373] px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#D4A373] hover:text-white transition-all mx-auto md:mx-0"
            >
              Learn More <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-96">
            <img
              src="https://ebilahall.fts.biz.id/storage/photos/1/image_about_1.jpg"
              alt="Event Setup"
              className="absolute top-0 left-0 w-2/3 h-auto rounded-lg shadow-xl"
            />
            <img
              src="https://ebilahall.fts.biz.id/storage/photos/1/image_about_2.jpg"
              alt="Catering Detail"
              className="absolute bottom-0 right-0 w-1/2 h-auto rounded-lg shadow-xl z-10"
            />
             <img
              src="https://ebilahall.fts.biz.id/storage/photos/1/image_about_3.jpg"
              alt="Couple"
              className="absolute top-1/4 right-1/4 w-1/3 h-auto rounded-lg shadow-xl transform -translate-y-1/2"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-[#F6E9D8]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-serif text-[#3A3A3A] mb-4">
            Ebila Hall Gallery
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Take a glimpse into the elegance of Ebila Hall. From stunning archways to modern interiors, to unforgettable moments, see the beauty that makes every event here extraordinary.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <img src="https://ebilahall.fts.biz.id/storage/photos/1/gl1.jpg" alt="Gallery 1" className="rounded-lg shadow-lg w-full h-full object-cover" />
            <img src="https://ebilahall.fts.biz.id/storage/photos/1/gl2.jpg" alt="Gallery 2" className="rounded-lg shadow-lg w-full h-full object-cover" />
            <img src="https://ebilahall.fts.biz.id/storage/photos/1/gl3.jpg" alt="Gallery 3" className="rounded-lg shadow-lg w-full h-full object-cover" />
          </div>
          <button
            onClick={() => navigate("/prank")}
            className="border border-[#D4A373] text-[#D4A373] px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#D4A373] hover:text-white transition-all mx-auto"
          >
            View Gallery <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-[#3A3A3A] mb-6">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to help.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" placeholder="Your Full Name" className="w-full p-3 rounded-md border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D4A373]" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input type="email" id="email" placeholder="Your Email Address" className="w-full p-3 rounded-md border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D4A373]" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" rows="5" placeholder="Your Message" className="w-full p-3 rounded-md border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D4A373]"></textarea>
              </div>
              <button
                type="button"
                onClick={() => navigate("/prank")}
                className="bg-[#D4A373] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-lg"
              >
                Send Message <ArrowRight size={20} />
              </button>
            </form>
          </div>
          <div className="hidden md:flex justify-center items-center">
             <h4 className="text-8xl font-serif text-[#D4A373]/50">Ebila Hall</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A3A3A] text-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h5 className="text-xl font-bold font-serif mb-4">Ebila Hall</h5>
            <p className="text-gray-400 mb-4">A versatile event hall in West Jakarta, perfect for any occasion.</p>
            <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2"><MapPin size={16} /> Jl. Daan Mogot, Jakarta Barat</p>
                <p className="flex items-center gap-2"><Phone size={16} /> (021) 1234-5678</p>
                <p className="flex items-center gap-2"><Mail size={16} /> contact@ebilahall.com</p>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h6 className="font-bold mb-4">{title}</h6>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <button onClick={() => navigate("/prank")} className="text-gray-400 hover:text-white transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="container mx-auto px-6 mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ebila Hall. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;