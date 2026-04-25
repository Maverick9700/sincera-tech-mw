import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Shield, Zap, Globe, Cpu, Smartphone, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Digital Systems & SaaS',
    icon: Cpu,
    desc: 'Custom software solutions to automate your business workflows.',
    color: 'bg-teal-50 text-primary'
  },
  {
    title: 'Networking & Infrastructure',
    icon: Globe,
    desc: 'Reliable high-speed connectivity for your entire office.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Security & CCTV Systems',
    icon: Shield,
    desc: 'Advanced surveillance and access control for peace of mind.',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Telecommunications',
    icon: Smartphone,
    desc: 'Unified communication systems for modern teams.',
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    title: 'Branding & Digital Growth',
    icon: Monitor,
    desc: 'Elevate your online presence with professional design.',
    color: 'bg-slate-50 text-slate-600'
  }
];

const packages = [
  {
    name: 'Starter',
    price: 'Custom',
    features: ['Basic System', 'WiFi Setup', 'Branding Starter', '1-2 CCTV Cameras'],
    highlight: false
  },
  {
    name: 'Growth',
    price: 'Best Value',
    features: ['Full System Integration', 'Advanced Networking', '4-8 CCTV Cameras', 'Web + Full Branding'],
    highlight: true
  },
  {
    name: 'Smart Ops',
    price: 'Enterprise',
    features: ['Custom Dev', 'Infrastructure', 'Automation', 'Advanced Dashboards'],
    highlight: false
  }
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Sincera Tech Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-secondary/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-xs font-bold mb-6 tracking-wide uppercase border border-primary/30">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-white">Technology Solutions for Malawi</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-white">
                Smart Technology.<br />
                <span className="text-primary text-teal-400">Real Business Growth.</span>
              </h1>
              <p className="text-slate-300 text-lg lg:text-xl mb-10 leading-relaxed max-w-xl">
                We help businesses connect, automate, secure, and grow with intelligent digital solutions tailored for local expertise and global standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="teal-gradient hover:bg-opacity-95 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
                  Get a Quote <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                  View Services
                </Link>
              </div>

              {/* Added Trust Label */}
              <div className="mt-12 flex items-center gap-4 text-white/60 text-sm">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-secondary bg-slate-400 overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                    </div>
                  ))}
                </div>
                <p>Trusted by <span className="text-primary font-bold">150+</span> local businesses in Malawi</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '150+', label: 'Businesses Supported' },
              { val: '24/7', label: 'Support Available' },
              { val: '100%', label: 'Local Expertise' },
              { val: 'Scale', label: 'Ready Solutions' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">{item.val}</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Providing end-to-end technology services to help your business thrive in the digital age.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-soft border border-gray-50 group hover:border-primary/20 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-primary font-bold text-sm inline-flex items-center gap-1 group/btn">
                  Learn More <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-secondary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 hex-pattern" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Process</h2>
            <p className="text-slate-400">Simple steps to transform your business infrastructure.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your unique business needs.' },
              { step: '02', title: 'Design', desc: 'Custom architectural planning for performance.' },
              { step: '03', title: 'Implementation', desc: 'Professional setup with zero downtime.' },
              { step: '04', title: 'Support', desc: 'Continuous 24/7 monitoring and care.' }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-bold text-primary/20 mb-4 group-hover:text-primary transition-colors">{step.step}</div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-slate-400 text-sm">{step.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-4 w-12 h-[1px] bg-slate-700" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Flexible Packages</h2>
            <p className="text-slate-600">Choose the right fit for your business stage.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <div 
                key={i} 
                className={`p-8 rounded-3xl border ${pkg.highlight ? 'bg-white border-primary shadow-2xl relative scale-105 z-10' : 'bg-slate-50 border-slate-200'}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-primary font-bold text-3xl mb-6">{pkg.price}</div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-primary" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link to="/packages" className={`w-full py-3 rounded-xl font-bold text-center block transition-all ${pkg.highlight ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-secondary text-white'}`}>
                  Select Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to Upgrade Your Business?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Join hundreds of Malawian businesses growing through our smart technology solutions.</p>
          <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-transform inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
