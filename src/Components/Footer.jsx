import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <img className="h-12 w-auto rounded-xl" src="/assets/new-horizon-logo.svg" alt="New Horizon Education Consultants" />
          </Link>
          <p className="mt-5 max-w-md leading-7 text-slate-300">
            Your trusted partner for turning international study ambitions into a clear, confident plan.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-white">Explore</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <Link className="hover:text-cyan-200" to="/about">About us</Link>
            <Link className="hover:text-cyan-200" to="/services">Our services</Link>
            <Link className="hover:text-cyan-200" to="/contact_us">Contact us</Link>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-white">Get in touch</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>hello@newhorizon.edu</p>
            <p>+94 77 123 4567</p>
            <p>Colombo, Sri Lanka</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-400">
        © 2024 New Horizon Education Consultants. Your next chapter starts here.
      </div>
    </footer>
  );
}

export default Footer;
