import { useState } from 'react';
import { Menu, X, Clock, Users, MapPin, Code2, Building2, GraduationCap, DollarSign, Languages, Handshake, Trophy } from 'lucide-react';

export default function WhyAgileChimp() {
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
            {['Home', 'Services', 'Why Us', 'Contact'].map((item) => (
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
              {['Home', 'Services', 'Why Us', 'Contact'].map((item) => (
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
      <div className="bg-black pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Why Choose
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text"> Mexican Talent?</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover why leading companies are choosing Mexican developers for their technical excellence, 
              cultural alignment, and strategic advantages.
            </p>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12 text-red-500" />,
                title: "Time Zone Alignment",
                description: "Same time zone as US major tech hubs ensures real-time collaboration and immediate communication."
              },
              {
                icon: <MapPin className="w-12 h-12 text-red-500" />,
                title: "Geographic Proximity",
                description: "Quick travel times and easy access for on-site visits when needed, with flights under 4 hours from most US cities."
              },
              {
                icon: <Code2 className="w-12 h-12 text-red-500" />,
                title: "Technical Excellence",
                description: "Access to a growing pool of highly skilled developers with modern tech stack expertise."
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Benefits Section */}
      <div className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            The Mexican Tech Advantage
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Building2 className="w-8 h-8 text-red-500" />,
                title: "Strong Tech Infrastructure",
                description: "Mexico's growing tech hubs provide reliable infrastructure and modern workspaces."
              },
              {
                icon: <GraduationCap className="w-8 h-8 text-red-500" />,
                title: "Quality Education",
                description: "Top-tier universities producing over 130,000 engineering graduates annually."
              },
              {
                icon: <DollarSign className="w-8 h-8 text-red-500" />,
                title: "Cost Effectiveness",
                description: "Competitive rates without compromising on quality or expertise."
              },
              {
                icon: <Languages className="w-8 h-8 text-red-500" />,
                title: "Cultural Compatibility",
                description: "Strong English proficiency and cultural alignment with US business practices."
              },
              {
                icon: <Handshake className="w-8 h-8 text-red-500" />,
                title: "USMCA Agreement",
                description: "Protected intellectual property rights and simplified business operations."
              },
              {
                icon: <Trophy className="w-8 h-8 text-red-500" />,
                title: "Proven Track Record",
                description: "Successfully delivering projects for Fortune 500 companies and startups alike."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Build Your Team?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join the growing number of companies leveraging Mexican tech talent for their development needs.
          </p>
          <a href="https://calendly.com/agilechimp/30min" className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:shadow-red-500/25 hover:scale-105">
            Schedule a Consultation
          </a>
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