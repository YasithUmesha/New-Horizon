import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const services = [
  { number: '01', title: 'University admissions', text: 'Find the right course and institution with guidance that fits your goals and budget.', link: '/collegevisa' },
  { number: '02', title: 'Student visa support', text: 'Prepare a strong, accurate application with an experienced team beside you.', link: '/collegevisa' },
  { number: '03', title: 'School placements', text: 'Explore supportive school environments and make a confident start abroad.', link: '/schoolingvisa' },
];

const Home = () => (
  <>
    <Header />
    <main>
      <section className="hero-pattern relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="relative z-10">
            <p className="mb-5 inline-flex rounded-full border border-cyan-200/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">Your future, our guidance</p>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">Study abroad.<br /><span className="text-cyan-200">Live your horizon.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200">We make international education feel possible. From choosing your course to arriving on campus, our team brings clarity to every step.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact_us" className="rounded-full bg-coral px-7 py-4 text-center font-bold text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-orange-500">Start your journey <span aria-hidden="true">→</span></Link>
              <Link to="/services" className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10">Explore services</Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-300">
              <span><strong className="mr-2 text-2xl text-white">8+</strong> years of care</span>
              <span><strong className="mr-2 text-2xl text-white">500+</strong> students guided</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -right-4 -top-5 h-24 w-24 rounded-full bg-coral/80 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white/10 shadow-2xl">
              <img src="/assets/Graduation.jpg" alt="Students celebrating graduation" className="h-[460px] w-full object-cover" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white p-5 shadow-xl">
                <p className="text-xs font-bold uppercase tracking-widest text-coral">The New Horizon promise</p>
                <p className="mt-2 font-display text-xl font-bold text-navy">Personal advice. Real progress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="eyebrow">How we help</p>
            <h2 className="section-title">More than an application service.</h2>
            <p className="mt-5 leading-7 text-slate-600">Big decisions are easier when you have someone in your corner. Our end-to-end support is built around your ambitions, not a one-size-fits-all checklist.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <Link key={service.number} to={service.link} className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-xl">
                <span className="text-sm font-bold text-coral">{service.number}</span>
                <h3 className="mt-10 font-display text-2xl font-bold text-navy">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                <span className="mt-6 inline-block font-bold text-navy transition group-hover:translate-x-1">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">A clear path forward</p>
            <h2 className="section-title">From first idea to first day.</h2>
            <div className="mt-9 space-y-6">
              {['Discover your direction', 'Build a strong application', 'Arrive ready for what is next'].map((step, index) => (
                <div className="flex gap-4" key={step}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-bold text-white">{index + 1}</span>
                  <div><h3 className="font-bold text-navy">{step}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{['We listen first, then match your strengths with the right opportunities.', 'Our counsellors help you prepare every document with confidence.', 'Get practical pre-departure guidance so you can focus on your new adventure.'][index]}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-navy p-8 text-white shadow-xl lg:p-12">
            <p className="text-5xl text-cyan-200">“</p>
            <p className="mt-3 font-display text-2xl leading-9">They made every confusing step simple. I felt supported from my first consultation to my first week at university.</p>
            <div className="mt-8 border-t border-white/20 pt-5"><p className="font-bold">Sahan Perera</p><p className="text-sm text-slate-300">Master of Business, Melbourne</p></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[2rem] bg-cyan-100 px-8 py-10 md:flex-row md:items-center lg:px-14">
          <div><p className="eyebrow">Ready when you are</p><h2 className="font-display text-3xl font-bold text-navy">Your next chapter is closer than you think.</h2></div>
          <Link to="/contact_us" className="shrink-0 rounded-full bg-navy px-7 py-4 font-bold text-white transition hover:bg-slate-700">Talk to an expert →</Link>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
