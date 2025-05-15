
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PartnersCarousel from "@/components/home/PartnersCarousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-6 md:px-12 lg:px-24">
        <FadeInSection>
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">
              The best automatic website builder, completely free from day 1
            </h1>
            <p className="text-lg md:text-xl text-autowebsite-text-secondary mb-8 max-w-3xl mx-auto">
              Create beautiful, responsive websites in minutes with our AI-powered tools. 
              No coding required. Plus, generate custom images to make your site truly unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-autowebsite-accent button-hover">
                <Link to="/website-builder">Start Building Your Website</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-autowebsite-accent text-autowebsite-accent button-hover">
                <Link to="/image-generator">Generate Images</Link>
              </Button>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Autowebsite.org?</h2>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Website Builder",
                description: "Just describe what you want, and our AI creates a complete website tailored to your needs.",
                icon: "💬",
              },
              {
                title: "Custom Image Generation",
                description: "Create unique images for your website with our integrated AI image generator.",
                icon: "🎨",
              },
              {
                title: "100% Free",
                description: "All features are available for free, no hidden costs or premium tiers.",
                icon: "🎁",
              },
            ].map((feature, index) => (
              <FadeInSection delay={index * 0.2} key={index}>
                <div className="glass-card p-6 rounded-xl transition-transform duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-autowebsite-text-secondary">{feature.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <FadeInSection>
        <PartnersCarousel />
      </FadeInSection>

      {/* How It Works Section */}
      <section className="bg-background py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Describe Your Website",
                description: "Tell our AI what kind of website you need, including style, purpose, and content.",
              },
              {
                title: "2. Generate & Customize",
                description: "Review the generated website and make adjustments or generate images as needed.",
              },
              {
                title: "3. Publish Instantly",
                description: "Launch your new website with one click - no technical knowledge required.",
              },
            ].map((step, index) => (
              <FadeInSection delay={index * 0.2} key={index}>
                <div className="bg-card p-6 rounded-xl shadow-sm transition-all duration-300 hover:translate-y-[-5px]">
                  <h3 className="text-xl font-semibold mb-2 text-autowebsite-accent">{step.title}</h3>
                  <p className="text-autowebsite-text-secondary">{step.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 text-center">
        <FadeInSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create your website?</h2>
            <p className="text-lg text-autowebsite-text-secondary mb-8">
              Join thousands of users who have already built beautiful websites with Autowebsite.org. 
              No credit card required, no strings attached.
            </p>
            <Button asChild size="lg" className="bg-autowebsite-accent button-hover">
              <Link to="/website-builder">Get Started Now</Link>
            </Button>
          </div>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8 px-6 md:px-12 lg:px-24 mt-auto">
        <div className="max-w-7xl mx-auto text-center text-autowebsite-text-secondary">
          <p>&copy; {new Date().getFullYear()} Autowebsite.org. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
