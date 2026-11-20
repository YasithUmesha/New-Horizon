import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const services = [
  { title: 'College & university pathway', description: 'Make an informed choice about your course, university, budget, and destination.', href: '/collegevisa', accent: 'bg-cyan-100', tag: 'For higher education' },
  { title: 'Schooling abroad', description: 'Find the right school environment and prepare your family for a confident transition.', href: '/schoolingvisa', accent: 'bg-orange-100', tag: 'For school students' },
  { title: 'Visa application support', description: 'Get careful guidance on documents, timelines, and the details that matter.', href: '/contact_us', accent: 'bg-violet-100', tag: 'For every journey' },
  { title: 'English test guidance', description: 'Understand the right IELTS or PTE route and prepare with reliable official resources.', href: '/english-tests', accent: 'bg-emerald-100', tag: 'For your application' },
];

const Services = () => (
  <>
    <Header />
    <main>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><p className="eyebrow text-cyan-200">What we do</p><h1 className="font-display text-5xl font-bold text-white sm:text-6xl">The right support at every step.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Choose the service that fits your next move, or speak with us and we&apos;ll shape a plan around you.</p></div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <Link key={service.title} to={service.href} className={`${service.accent} group rounded-[2rem] p-8 transition hover:-translate-y-1 hover:shadow-xl`}><p className="text-xs font-bold uppercase tracking-widest text-navy/60">{service.tag}</p><h2 className="mt-16 font-display text-2xl font-bold text-navy">{service.title}</h2><p className="mt-4 leading-7 text-slate-700">{service.description}</p><span className="mt-7 inline-block font-bold text-navy group-hover:translate-x-1">Discover more →</span></Link>)}</div></section>
      <section className="bg-white px-5 pb-20 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-10"><p className="eyebrow">Explore destinations</p><h2 className="section-title">Start with trusted information.</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">These official portals are the best place to confirm current requirements, costs, and application steps before making a decision.</p></div><div className="grid gap-5 md:grid-cols-3">{[{ name: 'Australia', detail: 'Compare courses, plan your budget, and follow the official five-step study journey.', href: 'https://www.studyaustralia.gov.au/en' }, { name: 'Canada', detail: 'Check study permit requirements, designated learning institutions, and current fees.', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html' }, { name: 'Japan', detail: 'Explore school types, exams, scholarships, costs, and immigration procedures.', href: 'https://www.studyinjapan.go.jp/en/planning/' }].map((destination) => <a key={destination.name} href={destination.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 p-6 transition hover:border-cyan-300 hover:shadow-lg"><h3 className="font-display text-xl font-bold text-navy">{destination.name} ↗</h3><p className="mt-3 text-sm leading-6 text-slate-600">{destination.detail}</p><p className="mt-4 text-xs font-bold uppercase tracking-widest text-coral">Official source</p></a>)}</div></div></section>
      <section className="bg-navy px-5 py-20 text-white lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow text-cyan-200">Included in every plan</p><h2 className="font-display text-4xl font-bold">Support that keeps you moving.</h2></div><div className="grid gap-6 sm:grid-cols-2">{['Personal consultation', 'Course and institution matching', 'Application checklist', 'Pre-departure guidance'].map((item) => <div className="border-t border-white/20 pt-4" key={item}><span className="text-cyan-200">✓</span><p className="mt-2 font-semibold">{item}</p></div>)}</div></div></div></section>
    </main>
    <Footer />
  </>
);

export default Services;
