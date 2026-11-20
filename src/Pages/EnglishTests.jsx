import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const EnglishTests = () => (
  <>
    <Header />
    <main>
      <section className="page-hero"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><Link to="/services" className="text-sm font-bold text-cyan-200 hover:text-white">← All services</Link><p className="eyebrow mt-10 text-cyan-200">English test guidance</p><h1 className="max-w-3xl font-display text-5xl font-bold text-white sm:text-6xl">Choose the test that fits your plan.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Requirements can vary by institution, course, and visa. We help you identify the right test and prepare with official resources.</p></div></section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-6 md:grid-cols-2"><a href="https://ielts.org/take-a-test" target="_blank" rel="noreferrer" className="rounded-[2rem] border border-slate-200 p-8 transition hover:border-cyan-300 hover:shadow-xl"><p className="eyebrow">Official source ↗</p><h2 className="mt-5 font-display text-3xl font-bold text-navy">IELTS</h2><p className="mt-4 leading-7 text-slate-600">IELTS describes its tests as trusted worldwide for education, work, and migration. Explore test types and official preparation guidance before booking.</p><span className="mt-7 inline-block font-bold text-navy">Visit IELTS.org →</span></a><a href="https://www.pearsonpte.com/" target="_blank" rel="noreferrer" className="rounded-[2rem] border border-slate-200 p-8 transition hover:border-cyan-300 hover:shadow-xl"><p className="eyebrow">Official source ↗</p><h2 className="mt-5 font-display text-3xl font-bold text-navy">PTE</h2><p className="mt-4 leading-7 text-slate-600">Pearson publishes separate PTE Academic and PTE Core routes, with test acceptance depending on your study or immigration goal.</p><span className="mt-7 inline-block font-bold text-navy">Visit Pearson PTE →</span></a></div><div className="mt-12 rounded-[2rem] bg-cyan-50 p-8 lg:p-12"><h2 className="font-display text-3xl font-bold text-navy">Our guidance checklist</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{['Confirm your institution’s accepted tests', 'Check the required score for your course', 'Book only through the official provider'].map((item, index) => <div key={item}><span className="font-bold text-coral">0{index + 1}</span><p className="mt-2 font-semibold text-navy">{item}</p></div>)}</div></div></section>
    </main>
    <Footer />
  </>
);

export default EnglishTests;
