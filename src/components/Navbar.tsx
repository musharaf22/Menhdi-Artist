const Navbar = () => {
  return (
    <nav className="fixed w-full z-40 backdrop-blur-sm bg-white/30 border-b border-white/50">
      <div className="w-[90%] mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-amber-300 flex items-center justify-center shadow-lg">
            <span className="font-bold text-white">SA</span>
          </div>
          <div>
            <div className="text-sm font-semibold">Shiva Mehndi Arts</div>
            <div className="text-xs text-slate-700">
              Bridal | Events | Custom | Best mehandi works in gaya bihar.
            </div>
          </div>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="aboutus" className="hover:underline">
            About
          </a>
          <a href="#portfolio" className="hover:underline">
            Portfolio
          </a>
          <a href="#booking" className="hover:underline">
            Booking
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-rose-500 text-white shadow hover:scale-105 transform transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
