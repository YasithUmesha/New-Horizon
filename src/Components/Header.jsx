import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact_us' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img className="h-12 w-auto rounded-xl ring-2 ring-white/20" src="/assets/new-horizon-logo.svg" alt="New Horizon Education Consultants" />
        </Link>

        <button
          type="button"
          className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="text-2xl">{isOpen ? '×' : '☰'}</span>
        </button>

        <nav className={`${isOpen ? 'block' : 'hidden'} absolute left-0 top-full w-full border-t border-white/10 bg-navy px-5 py-4 lg:static lg:block lg:w-auto lg:border-0 lg:bg-transparent lg:p-0`}>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-white text-navy' : 'text-slate-200 hover:bg-white/10 hover:text-white'}`}
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact_us" onClick={closeMenu} className="mt-2 rounded-full bg-coral px-5 py-2 text-center text-sm font-bold text-white transition hover:bg-orange-500 lg:ml-3 lg:mt-0">
              Book a free call
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
