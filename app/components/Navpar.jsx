'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'AGENDA', href: '#agenda' },
    { name: 'TICKETS', href: '#TICKETS' },
    { name: 'FAQ', href: '#faq' },
    { name: 'IEEE SIGHT', href: 'https://sight.ieee.org/about-ieee-sight/', external: true },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xs shadow-2xl rounded-b-3xl  py-3 mx-0.5">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-around h-16 px-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-w.webp"
            alt="MEDROOTS Logo"
            width={100}
            height={40}
            className="object-contain"
            data-aos="zoom-in"
          />
        </Link>
         <Link href="/">
          <Image
            src="/SIGHT_LOGO.svg"
            alt="IEEE SIGHT Logo"
            width={100}
            height={40}
            className="object-contain rounded-full"
            data-aos="zoom-in"
          />
        </Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white text-sm font-semibold tracking-wide">
          {navLinks.map((link) =>
            link.external ? (
              <li key={link.name} data-aos="zoom-in
">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition"
                >
                  {link.name}
                </a>
              </li>
            ) : (
              <li key={link.name} data-aos="zoom-in
">
                <Link href={link.href} className="hover:text-gray-300 transition">
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
          type="button"
          data-aos="zoom-in"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center md:hidden z-40 text-white text-2xl font-semibold space-y-8 px-6 min-h-screen" data-aos="fade-down
">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-300 transition"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-300 transition"
              >
                {link.name}
              </Link>
            )
          )}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-8 px-8 py-3 border border-white rounded hover:bg-white cursor-pointer hover:text-[#200406] transition"
          >
            Close Menu
          </button>
        </div>
      )}
    </header>
  );
}
