import { useState } from 'react';
import { 
  Menu, 
  X, 
  Code2, 
  Database, 
  Layout, 
  Cloud,
  Smartphone, // Changed from Mobile to Smartphone
  Settings,
  Users,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function ServicesPage() {
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
              Our Development
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text"> Services</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access top-tier Mexican development talent across a wide range of technologies and specializations.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-16 h-16 text-red-500" />,
                title: "Full Stack Development",
                description: "Expert developers proficient in both frontend and backend technologies",
                skills: ["React", "Node.js", "Python"]
              },
              {
                icon: <Database className="w-16 h-16 text-red-500" />,
                title: "Backend Development",
                description: "Robust and scalable backend solutions",
                skills: ["Java", "Python", "Node.js"]
              },
              {
                icon: <Layout className="w-16 h-16 text-red-500" />,
                title: "Frontend Development",
                description: "Creating engaging user interfaces and experiences",
                skills: ["React", "Vue.js", "Angular"]
              },
              {
                icon: <Cloud className="w-16 h-16 text-red-500" />,
                title: "Cloud Solutions",
                description: "Cloud architecture and DevOps expertise",
                skills: ["AWS", "Azure", "GCP"]
              },
              {
                icon: <Smartphone className="w-16 h-16 text-red-500" />, // Changed from Mobile to Smartphone
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications",
                skills: ["React Native", "iOS", "Android"]
              },
              {
                icon: <Settings className="w-16 h-16 text-red-500" />,
                title: "Maintenance & Support",
                description: "Ongoing maintenance and technical support",
                skills: ["Legacy Systems", "Performance", "Security"]
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rest of the code remains the same... */}
      {/* Engagement Models */}
      <div className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Flexible Engagement Models
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-red-500" />,
                title: "Dedicated Teams",
                description: "Full-time dedicated development teams that seamlessly integrate with your existing workforce."
              },
              {
                icon: <Clock className="w-12 h-12 text-red-500" />,
                title: "Time & Material",
                description: "Flexible engagement model perfect for projects with evolving requirements and scope."
              },
              {
                icon: <Shield className="w-12 h-12 text-red-500" />,
                title: "Project-Based",
                description: "Fixed-scope projects with defined deliverables and timelines."
              }
            ].map((model, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-6">{model.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{model.title}</h3>
                <p className="text-gray-300 leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            The Agile Chimp Advantage
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Rigorous technical screening process",
              "Senior-level developers only",
              "Direct communication with developers",
              "No recruitment or hidden fees",
              "2-week trial period",
              "Immediate replacement if needed"
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 bg-gray-50 p-6 rounded-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Ready to Build Your Team?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Get started with top Mexican development talent today.
          </p>
          <a href="https://calendly.com/agilechimp/30min" className="group bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:shadow-red-500/25 hover:scale-105">
            Schedule a Consultation
            <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
          <a href ="https://medium.com/@agilechimp" className="text-gray-400">Follow us in Medium.</a>
          <p className="text-gray-400">© 2024 Agile Chimp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}