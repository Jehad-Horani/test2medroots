import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0f172a] text-white py-10 mt-32 relative z-10 border-t border-[#196B40]/30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* شعار MedRoots */}
        <div>
          <h1 className="text-3xl font-bold text-[#BE1E2D] tracking-wide">
            <span className="text-[#196B40]">Med</span>Roots<sub>25</sub>
          </h1>
          <p className="text-gray-400 mt-4 text-sm">
            Igniting innovation in technology, healthcare, and sustainability.
          </p>
        </div>

        {/* روابط الأقسام */}
        <div className="flex flex-col space-y-3 md:items-center">
          <h2 className="text-lg font-semibold text-[#00ffcc] mb-2">Explore</h2>
          <a href="#story" className="text-gray-300 hover:text-white transition">About</a>
          <a href="#agenda" className="text-gray-300 hover:text-white transition">Schedule</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Tickets</a>
          <a href="#faq" className="text-gray-300 hover:text-white transition">FAQ</a>

        </div>

        {/* سوشال ميديا */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <h2 className="text-lg font-semibold text-[#00ffcc]">Follow Us</h2>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/medroots25?igsh=YmtwZWZhc3c0bjQ=" target="_blank" className="hover:text-[#BE1E2D] transition">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/medroots-summit-2025/" target="_blank" className="hover:text-[#196B40] transition">
              <Linkedin size={20} />
            </a>
            <a href="https://web.facebook.com/people/MedRoots-Summit-2025/61572288527534/?mibextid=wwXIfr&rdid=CBMJu7QqZa2NyEvm&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F15JdjNpTb8%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr" target="_blank" className="hover:text-blue-500 transition">
              <Facebook size={20} />
            </a>
            <a href="mailto:medroots25@gmail.com" className="hover:text-[#00ffcc] transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* الخط السفلي */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-[#196B40]/20 pt-5">
        © 2025 MedRoots Summit. All rights reserved.
      </div>
    </footer>
  );
}
