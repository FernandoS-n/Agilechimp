import { useState } from "react";
import { Menu, X, Users, Globe2, Rocket, CheckCircle2 } from "lucide-react";

export default function AgileChimp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-black p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://placehold.co/50x50"
              alt="Agile Chimp Logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="text-white font-bold ml-3 text-xl">
              Agile Chimp
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-white hover:text-red-500 transition"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-white hover:text-red-500 transition"
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-white hover:text-red-500 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#services" className="block text-white hover:text-red-500">
              Services
            </a>
            <a href="#why-us" className="block text-white hover:text-red-500">
              Why Us
            </a>
            <a href="#contact" className="block text-white hover:text-red-500">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Unlock Global Talent with
              <span className="text-red-500"> Agile Chimp</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Connect with exceptional remote developers and IT professionals
              from Latin America. Get the perfect blend of technical excellence
              and cultural alignment.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <Users className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Expert Talent Pool</h3>
              <p className="text-gray-600">
                Access to pre-vetted senior developers and IT professionals from
                top Latin American tech hubs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <Globe2 className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Time Zone Alignment</h3>
              <p className="text-gray-600">
                Work with professionals in your time zone for better
                collaboration and real-time communication.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <Rocket className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Fast Integration</h3>
              <p className="text-gray-600">
                Quick onboarding process and seamless integration with your
                existing team and workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Agile Chimp
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Rigorous technical assessment process",
              "Cost-effective solutions without compromising quality",
              "English-proficient professionals",
              "Agile methodology experts",
              "Flexible engagement models",
              "Dedicated account management",
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 px-4" id="contact">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500 h-32"
                  placeholder="Tell us about your needs"
                ></textarea>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <img
              src="https://placehold.co/50x50"
              alt="Agile Chimp Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="ml-2 font-bold">Agile Chimp</span>
          </div>
          <p className="text-gray-400">
            © 2024 Agile Chimp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
