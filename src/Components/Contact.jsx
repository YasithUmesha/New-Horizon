import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { createConsultationRequest, isSupabaseConfigured } from '../lib/supabase';

function Contact() {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    const formData = new FormData(event.currentTarget);

    try {
      await createConsultationRequest({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        interest: formData.get('interest'),
        destination: formData.get('destination'),
        message: formData.get('message'),
      });
      setStatus('submitted');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="page-hero"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><p className="eyebrow text-cyan-200">Start a conversation</p><h1 className="font-display text-5xl font-bold text-white sm:text-6xl">Let&apos;s make a plan.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Tell us a little about where you want to go. One of our counsellors will get back to you with a useful first step.</p></div></section>
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div><p className="eyebrow">We&apos;re here to help</p><h2 className="section-title">Good questions lead to great journeys.</h2><div className="mt-8 space-y-5 text-slate-600"><p><strong className="block text-navy">Email</strong>hello@newhorizon.edu</p><p><strong className="block text-navy">Phone</strong>+94 77 123 4567</p><p><strong className="block text-navy">Office</strong>Colombo, Sri Lanka</p></div></div>
          <div className="rounded-[2rem] bg-slate-100 p-6 sm:p-10">{status === 'submitted' ? <div className="flex min-h-[380px] flex-col items-center justify-center text-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700">✓</div><h2 className="mt-6 font-display text-3xl font-bold text-navy">Thanks for reaching out!</h2><p className="mt-3 max-w-sm leading-7 text-slate-600">We&apos;ve received your enquiry and will be in touch soon.</p><button className="mt-7 font-bold text-navy underline" onClick={() => setStatus('idle')}>Send another message</button></div> : <form onSubmit={handleSubmit} className="space-y-5"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold text-navy">Your name<input name="name" required className="form-input" placeholder="Jane Smith" /></label><label className="text-sm font-bold text-navy">Email address<input name="email" required type="email" className="form-input" placeholder="jane@email.com" /></label></div><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold text-navy">Phone number<input name="phone" className="form-input" placeholder="+94 77 123 4567" /></label><label className="text-sm font-bold text-navy">Preferred destination<select name="destination" className="form-input"><option>Australia</option><option>Canada</option><option>Japan</option><option>Not sure yet</option></select></label></div><label className="block text-sm font-bold text-navy">I&apos;m interested in<select name="interest" className="form-input"><option>University admissions</option><option>English test guidance</option><option>Visa guidance</option><option>Not sure yet</option></select></label><label className="block text-sm font-bold text-navy">How can we help?<textarea name="message" required className="form-input min-h-32" placeholder="Tell us about your goals..." /></label>{status === 'error' && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{errorMessage}</p>}{!isSupabaseConfigured && <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-800">The enquiry form is in setup mode. Connect Supabase environment variables before accepting submissions.</p>}<button disabled={status === 'submitting'} className="w-full rounded-full bg-coral px-6 py-4 font-bold text-white transition hover:bg-orange-500 disabled:cursor-wait disabled:opacity-60">{status === 'submitting' ? 'Sending...' : 'Send enquiry →'}</button></form>}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
