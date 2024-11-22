
import { useState } from "react";
import { Menu, X, Users, Globe2, Rocket, CheckCircle2, ArrowRight } from "lucide-react";


export default function AgileChimp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter']">
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dsgq9ubvg/image/upload/v1732251937/g1_b0w4rs.jpg" 
              alt="Agile Chimp Logo" 
              className="h-12 w-12 rounded-full hover:scale-105 transition-transform"
            />
            <span className="text-white font-bold ml-3 text-xl tracking-tight">Agile Chimp</span>
          </div>
          
          <div className="hidden md:flex space-x-12">
            {['Services', 'Why Us', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-300 hover:text-white transition-colors relative group text-sm font-medium"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-sm border-b border-gray-800">
            <div className="px-6 py-4 space-y-4">
              {['Services', 'Why Us', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-black min-h-screen flex items-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Unlock Global Talent with
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text"> Agile Chimp</span>
            </h1>
            <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Connect with exceptional remote developers and IT professionals working on site from Mexico. 
              Hire remote employees with the advantages of on-site work.
            </p>
            <button className="group bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:shadow-red-500/25 hover:scale-105">
              Get Started
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-red-500 mb-6" />,
                title: "Expert Talent Pool",
                description: "Access to pre-vetted senior developers and IT professionals from top Latin American tech hubs."
              },
              {
                icon: <Globe2 className="w-12 h-12 text-red-500 mb-6" />,
                title: "Time Zone Alignment",
                description: "Work with professionals in your time zone for better collaboration and real-time communication."
              },
              {
                icon: <Rocket className="w-12 h-12 text-red-500 mb-6" />,
                title: "Fast Integration",
                description: "Quick onboarding process and seamless integration with your existing team and workflows."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-gray-900 to-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Agile Chimp</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Rigorous technical assessment process",
              "Cost-effective solutions without compromising quality",
              "English-proficient professionals",
              "Agile methodology experts",
              "Flexible engagement models",
              "Dedicated account management"
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 px-6" id="contact">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <form className="space-y-6">
              {[
                { label: "Name", type: "text", placeholder: "Your name" },
                { label: "Email", type: "email", placeholder: "your@email.com" }
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-gray-700 mb-2 font-medium">{field.label}</label>
                  <input 
                    type={field.type} 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all h-32"
                  placeholder="Tell us about your needs"
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-red-500/25 font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-6">
            <img 
              src="https://res.cloudinary.com/dsgq9ubvg/image/upload/v1732251937/g1_b0w4rs.jpg" 
              alt="Agile Chimp Logo" 
              className="h-12 w-12 rounded-full hover:scale-105 transition-transform"
            />
            <span className="ml-3 font-bold text-xl">Agile Chimp</span>
          </div>
          <p className="text-gray-400">© 2024 Agile Chimp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}