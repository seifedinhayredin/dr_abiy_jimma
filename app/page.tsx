import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";

export const metadata = {
  title: "Dr. Abiy — Experienced Physician",
  description:
    "Official portfolio website of Dr. Abiy — experienced physician providing patient-centered care and evidence-based medicine.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      {/* Hero Section */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Compassionate, evidence-based care you can trust.
            </h1>
            <p className="mt-4 text-slate-600 md:text-lg">
              With years of clinical experience, Dr. Abiy provides personalized
              diagnosis, treatment, and preventive care focused on long-term
              health.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-emerald-600 px-5 py-3 text-center text-white font-medium hover:bg-emerald-700"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="rounded-xl border px-5 py-3 text-center font-medium hover:bg-slate-50"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 md:h-[420px]">
            <Image
              src="/OIP.jfif"
              alt="Dr. Abiy in clinic"
              fill
              priority
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Clinical Services
          </h2>
          <p className="mt-2 text-slate-600">
            Comprehensive care tailored to every patient’s needs.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "General Consultation",
                desc: "Thorough assessments, diagnosis, and treatment plans.",
              },
              {
                title: "Preventive Care",
                desc: "Health screenings, lifestyle guidance, and early detection.",
              },
              {
                title: "Chronic Disease Management",
                desc: "Ongoing care for conditions like diabetes and hypertension.",
              },
              {
                title: "Telemedicine",
                desc: "Secure online consultations for non-urgent care.",
              },
              {
                title: "Diagnostics & Referrals",
                desc: "Lab requests, imaging coordination, and referrals.",
              },
              {
                title: "Patient Education",
                desc: "Clear guidance to support informed decisions.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border p-6 bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
<section id="testimonials" className="border-t bg-white">
  <div className="mx-auto max-w-6xl px-4 py-16">
    <h2 className="text-2xl md:text-3xl font-semibold text-center">
      What Patients Say
    </h2>
    <p className="mt-2 text-slate-600 text-center">
      Hear from patients who have experienced Dr. Abiy’s care firsthand.
    </p>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Sara T.",
          image: "/testimonial1.jpg",
          feedback:
            "Dr. Abiy is very attentive and explained everything clearly. Highly recommended!",
        },
        {
          name: "Michael G.",
          image: "/testimonial2.jpg",
          feedback:
            "Excellent experience! I felt heard and cared for during my consultation.",
        },
        {
          name: "Alem K.",
          image: "/testimonial3.jpg",
          feedback:
            "Professional, compassionate, and knowledgeable. The best physician I’ve seen.",
        },
      ].map((testimonial) => (
        <div
          key={testimonial.name}
          className="rounded-2xl border p-6 bg-slate-50 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
        >
          <div className="relative h-20 w-20">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <p className="mt-4 text-slate-700">{testimonial.feedback}</p>
          <h4 className="mt-3 font-semibold">{testimonial.name}</h4>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* About */}
      <section id="about" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">About Dr. Abiy</h2>
            <p className="mt-3 text-slate-600">
              Dr. Abiy is an experienced physician committed to delivering safe,
              compassionate, and evidence-based medicine. He partners with
              patients to create care plans that fit their lives.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• 20+ years of clinical experience</li>
              <li>• Strong focus on prevention and education</li>
              <li>• Member of recognized medical associations</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-6 bg-slate-50">
            <h3 className="font-semibold">Quick Facts</h3>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-slate-500">Location</dt>
                <dd>Addis Ababa, Ethiopia</dd>
              </div>
              <div>
                <dt className="text-slate-500">Languages</dt>
                <dd>English, Amharic</dd>
              </div>
              <div>
                <dt className="text-slate-500">Consultation</dt>
                <dd>In-person & Online</dd>
              </div>
              <div>
                <dt className="text-slate-500">New Patients</dt>
                <dd>Welcome</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
            <p className="mt-2 text-slate-600">
              For appointments and inquiries, please use the form or contact
              details below. For emergencies, call your local services.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <p>
                <strong>Phone:</strong>{" "}
                <a className="hover:underline" href="tel:+251000000000">
                  +251 000 000 000
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a className="hover:underline" href="mailto:clinic@example.com">
                  clinic@example.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> Clinic Road, Addis Ababa
              </p>
            </div>
          </div>

          {/* Contact Form (Client Component) */}
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Dr. Abiy — All rights reserved.
          <br />
          <span className="text-xs">
            Disclaimer: This website does not replace medical advice. For
            emergencies, call your local emergency number.
          </span>
        </div>
      </footer>
    </main>
  );
}
