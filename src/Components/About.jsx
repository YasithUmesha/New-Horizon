import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const About = () => (
  <>
    <Header />
    <main>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="eyebrow text-cyan-200">About New Horizon</p>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight text-white sm:text-6xl">Guidance with a human touch.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">We believe studying abroad should feel exciting, not overwhelming. Our job is to make the path clear and keep you moving forward.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-[2rem]"><img src="/assets/Graduation.jpg" alt="Graduates celebrating together" className="h-full min-h-[420px] w-full object-cover" /></div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow">Why we exist</p>
          <h2 className="section-title">Big dreams deserve a thoughtful plan.</h2>
          <p className="mt-5 leading-8 text-slate-600">New Horizon was created for students and families who want honest advice, practical support, and a team that truly knows their story. We pair local understanding with international education expertise.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-cyan-50 p-5"><p className="font-bold text-navy">Our vision</p><p className="mt-2 text-sm leading-6 text-slate-600">A world where every student can access the right global opportunity.</p></div>
            <div className="rounded-2xl bg-orange-50 p-5"><p className="font-bold text-navy">Our promise</p><p className="mt-2 text-sm leading-6 text-slate-600">Clear advice, careful preparation, and support beyond the paperwork.</p></div>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center"><p className="eyebrow">Our values</p><h2 className="section-title">The way we work matters.</h2>
          <div className="mt-12 grid gap-5 text-left md:grid-cols-3">
            {[
              ['Listen deeply', 'Your goals, strengths, and circumstances come first in every recommendation.'],
              ['Be transparent', 'We explain the process, options, and next steps in plain language.'],
              ['Stay beside you', 'Our relationship does not end when your application is submitted.'],
            ].map(([title, text]) => <div key={title} className="rounded-3xl bg-white p-7 shadow-sm"><h3 className="font-display text-xl font-bold text-navy">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}
          </div>
        </div>
      </section>
      <section className="px-5 py-20 text-center lg:px-8"><h2 className="section-title">Let&apos;s plan your next move.</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">A friendly conversation is all it takes to get started.</p><Link to="/contact_us" className="mt-8 inline-block rounded-full bg-coral px-7 py-4 font-bold text-white hover:bg-orange-500">Book a consultation →</Link></section>
    </main>
    <Footer />
  </>
);

export default About;
