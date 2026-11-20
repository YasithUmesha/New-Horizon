import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const renderServiceDetail = (school) => {
  const title = school ? 'Schooling abroad' : 'College & university pathway';
  const intro = school
    ? 'A supportive school experience can shape a lifetime of confidence. We help families find the right fit and prepare for the move.'
    : 'Choose a course and destination that open doors. We bring the research, applications, and visa preparation into one clear plan.';
  const steps = school
    ? ['Understand your family goals and preferred school environment', 'Shortlist schools, programs, and accommodation options', 'Prepare applications and visa documents carefully', 'Get ready for the academic and cultural transition']
    : ['Explore courses, destinations, and career outcomes', 'Compare institutions and build your application shortlist', 'Submit a polished application and prepare your visa', 'Plan your arrival, accommodation, and first semester'];

  return (
    <>
      <Header />
      <main>
        <section className="page-hero"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><Link to="/services" className="text-sm font-bold text-cyan-200 hover:text-white">← All services</Link><p className="eyebrow mt-10 text-cyan-200">{school ? 'School student support' : 'Higher education support'}</p><h1 className="max-w-3xl font-display text-5xl font-bold text-white sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{intro}</p></div></section>
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div><p className="eyebrow">What you can expect</p><h2 className="section-title">A plan built around your future.</h2><p className="mt-5 leading-8 text-slate-600">There is no single definition of success. We take time to understand yours, then turn the big picture into practical next steps with honest advice at every stage.</p><div className="mt-10 space-y-5">{steps.map((step, index) => <div className="flex items-start gap-4" key={step}><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-navy">{index + 1}</span><p className="pt-1 font-semibold text-navy">{step}</p></div>)}</div></div>
          <div className="rounded-[2rem] bg-orange-50 p-8 sm:p-10"><p className="text-5xl">✦</p><h2 className="mt-8 font-display text-3xl font-bold text-navy">Not sure where to start?</h2><p className="mt-4 leading-7 text-slate-600">That&apos;s exactly what the first conversation is for. Bring your questions and leave with a clearer direction.</p><Link to="/contact_us" className="mt-8 inline-block rounded-full bg-navy px-6 py-3 font-bold text-white hover:bg-slate-700">Book a free consultation</Link></div>
        </section>
        <section className="bg-slate-100 px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl text-center"><p className="eyebrow">Your next step</p><h2 className="section-title">Ready to explore what&apos;s possible?</h2><Link to="/contact_us" className="mt-8 inline-block rounded-full bg-coral px-7 py-4 font-bold text-white hover:bg-orange-500">Talk to an expert →</Link></div></section>
      </main>
      <Footer />
    </>
  );
};

export const CollegeVisa = () => renderServiceDetail(false);
export const SchoolingVisa = () => renderServiceDetail(true);
