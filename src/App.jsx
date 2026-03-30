import { Phone, Wrench, Car, Thermometer, MapPin, Clock, ChevronRight, Star, Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Car Electrical Repair",
    desc: "ECU diagnostics, wiring harness repair, sensor calibration, battery drain analysis and full electrical system diagnostics.",
    icon: Wrench,
  },
  {
    title: "Engine & Transmission",
    desc: "Complete engine repair, overhaul, timing belt replacement, and automatic/manual gearbox services.",
    icon: Car,
  },
  {
    title: "AC & Cooling System",
    desc: "Car AC repair, compressor replacement, gas refill, radiator flush and cooling system services.",
    icon: Thermometer,
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Cars Serviced" },
  { value: "4.9", label: "Google Rating" },
  { value: "100%", label: "Satisfaction" },
];

const PHONE = "+971 58 620 6376";
const WHATSAPP_LINK = `https://wa.me/971586206376`;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 bg-white">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Stats />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

/* ─── NavBar ─── */
function NavBar({ menuOpen, setMenuOpen }) {
  const links = ["Home", "About", "Services", "Booking", "Contact"];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img src="/logo.jpeg" alt="EF Garage" className="h-10 w-auto rounded" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-dark border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white text-center font-semibold px-5 py-2.5 rounded-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-dark overflow-hidden pt-20"
    >
      {/* Background gradient accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/logo.jpeg"
            alt="EF Garage"
            className="w-40 md:w-52 mb-6 rounded-xl shadow-lg shadow-primary/20"
          />
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Dubai's #1 Auto Repair Shop
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Expert Car Repair &{" "}
            <span className="text-primary">Electrical Specialists</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-lg">
            Fast, reliable, and affordable car repair services in Dubai. From
            electrical diagnostics to engine overhauls — we've got you covered.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              Book a Service <ChevronRight size={18} />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 transition-all"
            >
              <Phone size={18} /> WhatsApp Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl" />
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
              alt="Car repair at EF Garage"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Stats Strip ─── */
function Stats() {
  return (
    <section className="bg-dark-light border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-extrabold text-white">
              {s.value}
            </div>
            <div className="text-sm text-gray-400 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── About ─── */
function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80"
            alt="EF Garage workshop"
            className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            10+ Years of Trusted Auto Care in Dubai
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            EF Garage has been proudly serving Dubai with professional car
            repair, electrical diagnostics, and maintenance services. Our
            experienced technicians ensure your vehicle is in top condition using
            modern tools and genuine quality parts.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Certified & experienced technicians",
              "Latest diagnostic equipment",
              "Genuine OEM & quality parts",
              "Transparent pricing — no hidden costs",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ChevronRight size={14} className="text-primary" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-dark hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <s.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-400 leading-relaxed transition-colors">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Us ─── */
function WhyUsSection() {
  const reasons = [
    {
      icon: Clock,
      title: "Fast Turnaround",
      desc: "Most repairs completed same-day so you're back on the road quickly.",
    },
    {
      icon: Shield,
      title: "Warranty on Repairs",
      desc: "All our repair work comes with a service warranty for your peace of mind.",
    },
    {
      icon: Star,
      title: "5-Star Rated",
      desc: "Trusted by thousands of car owners in Dubai with top Google reviews.",
    },
    {
      icon: MapPin,
      title: "Convenient Location",
      desc: "Easily accessible workshop in Dubai with ample parking space.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
            The EF Garage Difference
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <r.icon className="text-primary" size={30} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Booking ─── */
function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const date = formData.get("date");
    const msg = `Hi EF Garage, I'd like to book a service.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}`;
    window.open(
      `${WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="booking" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Book Your Car Service
          </h2>
          <p className="text-gray-500 mt-3">
            Fill in the form below and we'll confirm your booking via WhatsApp.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                name="name"
                required
                placeholder="e.g. Ahmed Khan"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                name="phone"
                required
                placeholder="+971 xxx xxx xxx"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Required
            </label>
            <select
              name="service"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
            >
              <option value="">Select a service...</option>
              {services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date
            </label>
            <input
              name="date"
              type="date"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 text-lg"
          >
            {submitted ? "Redirecting to WhatsApp..." : "Book Now via WhatsApp"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-dark">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white mb-6">
          Contact Us
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Call or WhatsApp us now to schedule your repair or maintenance. We're
          available 7 days a week.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Phone,
              title: "Call Us",
              detail: PHONE,
              href: `tel:${PHONE.replace(/\s/g, "")}`,
            },
            {
              icon: MapPin,
              title: "Visit Us",
              detail: "Dubai, UAE",
              href: null,
            },
            {
              icon: Clock,
              title: "Working Hours",
              detail: "Sat–Thu: 8AM–8PM",
              href: null,
            },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-dark-light border border-white/10 rounded-2xl p-8"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <c.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-1">{c.title}</h3>
              {c.href ? (
                <a
                  href={c.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {c.detail}
                </a>
              ) : (
                <p className="text-gray-400">{c.detail}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-primary/25"
          >
            <Phone size={18} /> Call Now
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 transition-all"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <img src="/logo.jpeg" alt="EF Garage" className="h-10 w-auto rounded" />
        </div>
        <div className="flex gap-8">
          {["Home", "About", "Services", "Booking", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} EF Garage &bull; efgarage.me
        </p>
      </div>
    </footer>
  );
}
