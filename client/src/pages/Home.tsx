import { AnimatedSection } from "@/components/ui/animated-section";
import { PremiumButton } from "@/components/ui/premium-button";
import { TiltCard } from "@/components/ui/tilt-card";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, Lock, Play, Rocket, Star, Zap } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/50 border-b border-white/5">
        <div className="flex items-center gap-2">
          <img src="/images/variations/logo_icon_premium.png" alt="Logo" className="w-8 h-8" />
          <span className="font-display font-bold text-lg tracking-wider">FIRST PRINCIPLES VAULT</span>
        </div>
        <PremiumButton variant="outline" size="sm" className="hidden md:flex">
          Member Login
        </PremiumButton>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ opacity, scale, y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-background z-10" />
          <img 
            src="/images/hero/hero_text_overlay.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="container relative z-20 flex flex-col items-center text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-primary font-mono text-xs tracking-widest uppercase backdrop-blur-sm">
              Limited Access: Batch #042 Closing Soon
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-black text-5xl md:text-7xl lg:text-9xl tracking-tighter text-white mb-8 drop-shadow-2xl"
          >
            THINK LIKE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-gradient-x">
              ELON MUSK
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            Deconstruct reality. Rebuild the future. Master the mental models behind Tesla and SpaceX in this premium masterclass.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 w-full max-w-md md:max-w-none justify-center"
          >
            <PremiumButton size="xl" className="w-full md:w-auto group">
              Get Instant Access <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>
            <PremiumButton variant="outline" size="xl" className="w-full md:w-auto">
              <Play className="mr-2 w-5 h-5 fill-current" /> Watch Trailer
            </PremiumButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll to Unlock</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Social Proof Strip */}
      <div className="relative z-20 bg-black border-y border-white/10 py-8 overflow-hidden">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-gray-500 font-mono uppercase tracking-widest">Trusted by leaders at:</p>
          <div className="flex items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos would go here, using text for now */}
            <span className="font-display font-bold text-xl">SPACEX</span>
            <span className="font-display font-bold text-xl">TESLA</span>
            <span className="font-display font-bold text-xl">NEURALINK</span>
            <span className="font-display font-bold text-xl">OPENAI</span>
          </div>
        </div>
      </div>

      {/* What Is Section */}
      <AnimatedSection className="bg-black">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50" />
            <TiltCard className="aspect-square relative z-10">
              <img 
                src="/images/sections/what_is_section.png" 
                alt="First Principles Thinking" 
                className="w-full h-full object-cover rounded-xl"
              />
            </TiltCard>
          </div>
          <div>
            <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-4">The Methodology</h2>
            <h3 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">
              Reason from <br />
              <span className="text-white">First Principles</span>
            </h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Most people reason by analogy. They do what others do, with slight variations. First principles thinking boils things down to their fundamental truths and reasons up from there.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Deconstruct complex problems into basic elements",
                "Challenge assumptions and invisible constraints",
                "Innovate without copying existing solutions",
                "Accelerate learning speed by 10x"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <PremiumButton variant="secondary">Learn the Method</PremiumButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Modules Grid */}
      <AnimatedSection className="bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Inside The Vault</h2>
            <p className="text-gray-400 text-lg">
              A comprehensive curriculum designed to rewire your brain for breakthrough innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mental Deconstruction",
                desc: "Learn to break down any problem into its atomic truths.",
                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                image: "/images/thumbnails/ad_thumbnail_square_1.png"
              },
              {
                title: "The Physics of Business",
                desc: "Apply laws of thermodynamics to market economics.",
                icon: <Rocket className="w-8 h-8 text-primary" />,
                image: "/images/thumbnails/ad_thumbnail_square_3.png"
              },
              {
                title: "10X Iteration Cycles",
                desc: "Speed up your feedback loops to outpace competition.",
                icon: <Star className="w-8 h-8 text-purple-400" />,
                image: "/images/thumbnails/ad_thumbnail_square_4.png"
              }
            ].map((module, i) => (
              <TiltCard key={i} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={module.image} 
                    alt={module.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit backdrop-blur-sm border border-white/10">
                    {module.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">{module.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{module.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Product Showcase */}
      <AnimatedSection className="bg-black py-32">
        <div className="container relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="order-2 lg:order-1">
              <h2 className="font-display font-bold text-4xl md:text-6xl mb-8">
                Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Masterpiece</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Beautifully crafted PDFs, video masterclasses, and interactive mental models. Available on all your devices.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">40+</div>
                  <div className="text-sm text-gray-400">Video Lessons</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">200+</div>
                  <div className="text-sm text-gray-400">Pages of Content</div>
                </div>
              </div>
              <PremiumButton size="lg" glow>Get Instant Access</PremiumButton>
            </div>
            <div className="order-1 lg:order-2">
              <motion.img 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src="/images/3d_cover/product_cover_3d.png" 
                alt="Product Bundle" 
                className="w-full drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing / CTA */}
      <AnimatedSection className="bg-background py-32">
        <div className="container max-w-4xl mx-auto">
          <TiltCard className="p-12 md:p-20 text-center border-primary/30 bg-gradient-to-b from-gray-900 to-black">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 mb-8 animate-pulse">
              <Lock className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Price Increases in 24h</span>
            </div>
            
            <h2 className="font-display font-black text-5xl md:text-7xl mb-6 text-white">
              $97 <span className="text-2xl text-gray-500 line-through font-normal">$497</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-xl mx-auto">
              Join 10,000+ entrepreneurs mastering the art of first principles thinking. One-time payment. Lifetime access.
            </p>

            <PremiumButton size="xl" className="w-full md:w-auto min-w-[300px] mb-6" glow>
              Secure Your Spot Now
            </PremiumButton>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-500 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Instant Digital Delivery</span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-gray-700" />
              <div className="flex items-center gap-2">
                <img src="/images/variations/logo_icon_premium.png" className="w-4 h-4 grayscale opacity-50" alt="Secure" />
                <span>Secure SSL Payment</span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-gray-700" />
              <div>30-Day Money Back Guarantee</div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">Join leaders from</p>
              <div className="flex justify-center gap-8 opacity-30 grayscale">
                {/* Placeholder logos using text for now, but styled to look like logos */}
                <span className="font-display font-bold">GOOGLE</span>
                <span className="font-display font-bold">AMAZON</span>
                <span className="font-display font-bold">MICROSOFT</span>
                <span className="font-display font-bold">NASA</span>
              </div>
            </div>
          </TiltCard>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
            <img src="/images/variations/logo_icon_premium.png" alt="Logo" className="w-6 h-6 grayscale" />
            <span className="font-display font-bold tracking-wider">FIRST PRINCIPLES VAULT</span>
          </div>
          <div className="text-gray-600 text-sm">
            © 2025 First Principles Vault. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
