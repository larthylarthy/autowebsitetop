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
              Build websites - Generate images - Free forever...
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
                description: "Just drag and drop to build your perfect website, our builder will take your designs and turn them into responsive HTML & CSS code to be exported and used however you see fit",
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
                title: "1. Build your website",
                description: "Drag, drop and draw whatever you want on our blank canvas, our builder will convert your designs into functional web code.",
              },
              {
                title: "2. Generate & Customize",
                description: "Review the generated website and make adjustments or generate images as needed.",
              },
              {
                title: "3. Export Easily",
                description: "Our code viewer and exporter allows you to easily export your code for use anywhere you see fit!",
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

      {/* $AUTO Token Section (moved and enlarged) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-autowebsite-accent/10 to-white dark:from-autowebsite-accent/20 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center bg-card rounded-3xl shadow-2xl p-16 flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-autowebsite-accent">$AUTO</h2>
          <p className="text-2xl font-semibold mb-4">Our own cryptocurrency token</p>
          <p className="text-lg md:text-xl text-autowebsite-text-secondary mb-10 max-w-2xl">
            As AutoWebsite is completely free, we have decided to release our own token on Pumpfun to support our project and allow us to continue development, check us out here!
          </p>
          <Button asChild className="bg-autowebsite-accent text-2xl px-12 py-6 rounded-full button-hover shadow-lg">
            <a href="#" target="_blank" rel="noopener noreferrer">Buy $AUTO</a>
          </Button>
        </div>
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
