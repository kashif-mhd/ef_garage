import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Wrench, Car, Clock, MapPin, Info, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function EFGarageWebsite() {
  const [page, setPage] = useState('home');

  return (
    <div className="font-sans text-gray-800">
      <NavBar setPage={setPage} />

      {page === 'home' && <Home />}
      {page === 'about' && <About />}
      {page === 'services' && <Services />}
      {page === 'booking' && <Booking />}
      {page === 'contact' && <Contact />}

      <Footer />
    </div>
  );
}

function NavBar({ setPage }) {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <div className="font-bold text-xl">EF Garage</div>
      <div className="flex gap-6">
        {['home', 'about', 'services', 'booking', 'contact'].map(p => (
          <button key={p} className="hover:text-gray-300" onClick={() => setPage(p)}>
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Dubai's Trusted Car Repair & Electrical Specialists
          </h1>
          <p className="mb-6 text-lg text-gray-300">
            Fast • Reliable • Affordable car repair services in Dubai.
          </p>
          <div className="flex gap-4">
            <Button className="text-lg px-6 py-6" onClick={() => alert('Book Service')}>Book Service</Button>
            <Button variant="outline" className="text-lg px-6 py-6">WhatsApp Us</Button>
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e"
          className="rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About EF Garage</h2>
        <p className="text-gray-600 text-lg">
          EF Garage has been serving Dubai with professional car repair, electrical diagnostics, and maintenance services for over 10 years. Our experienced technicians ensure your vehicle is in top condition using modern tools and quality parts.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <s.icon className="mb-4" size={36} />
                <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Book Your Car Service</h2>
        <form className="flex flex-col gap-4 text-left">
          <label>Name<input className="w-full p-2 border rounded" placeholder="Your Name" /></label>
          <label>Phone<input className="w-full p-2 border rounded" placeholder="+971 xxx xxx xxx" /></label>
          <label>Service<select className="w-full p-2 border rounded">
            {services.map(s => <option key={s.title}>{s.title}</option>)}
          </select></label>
          <label>Date<input type="date" className="w-full p-2 border rounded" /></label>
          <Button type="submit" className="mt-4">Submit Booking</Button>
        </form>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-6 text-gray-300">Call or WhatsApp now to schedule your repair or maintenance.</p>
        <div className="text-xl font-semibold mb-6">📞 +971 58 620 6376</div>
        <Button className="text-lg px-8 py-6">Contact Now</Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 text-center">
      © {new Date().getFullYear()} EF Garage • efgarage.me
    </footer>
  );
}

const services = [
  { title: "Car Electrical Repair", desc: "ECU, wiring, sensors, battery drain and full diagnostics.", icon: Wrench },
  { title: "Engine & Transmission", desc: "Complete engine repair, overhaul and gearbox services.", icon: Car },
  { title: "AC & Cooling System", desc: "Car AC repair, gas refill and radiator services.", icon: Clock },
];
