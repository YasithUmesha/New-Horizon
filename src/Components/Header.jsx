import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
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
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="glass-nav sticky top-0 z-50 text-navy">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <motion.img whileHover={{ scale: 1.04 }} className="h-12 w-auto rounded-xl ring-2 ring-white/20" src="/assets/new-horizon-logo.svg" alt="New Horizon Education Consultants" />
        </Link>
        <button type="button" className="rounded-lg p-2 text-navy hover:bg-navy/5 lg:hidden" onClick={() => setIsOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={isOpen}>
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
        <AnimatePresence>
          {(isOpen || typeof window === 'undefined' || window.innerWidth >= 1024) && (
            <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className={`${isOpen ? 'block' : 'hidden'} absolute left-0 top-full w-full border-t border-slate-200 bg-white px-5 py-4 lg:static lg:block lg:w-auto lg:border-0 lg:bg-transparent lg:p-0`}>
              <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-1">
                {links.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={closeMenu} className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-navy text-white' : 'text-slate-600 hover:bg-navy/5 hover:text-navy'}`}>{link.label}</NavLink>)}
                <Link to="/contact_us" onClick={closeMenu} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-2 text-center text-sm font-bold text-white transition hover:bg-orange-500 lg:ml-3 lg:mt-0">Book a free call <ArrowRight size={15} /></Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
