
import React from "react";
import { motion } from "framer-motion";
import { Bot, Zap, Shield, MessageCircle, CreditCard, Skull } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="feature-card"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <Icon className="w-12 h-12 mb-4 text-primary" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const PriceCard = ({ title, price, features, buttonText }) => {
  const { toast } = useToast();

  const handlePurchase = () => {
    toast({
      title: "Coming Soon!",
      description: "Payment integration will be available soon.",
    });
  };

  return (
    <motion.div
      className="p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-bold mb-6">
        ${price}
        <span className="text-lg text-gray-400">/month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full bg-primary hover:bg-primary/90" onClick={handlePurchase}>
        {buttonText}
      </Button>
    </motion.div>
  );
};

export default function App() {
  const handleAddToDiscord = () => {
    window.location.href = "https://discord.com/oauth2/authorize?client_id=1359483119186612435";
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed text-foreground relative"
      style={{
        backgroundImage: "url('https://storage.googleapis.com/hostinger-horizons-assets-prod/51450d3c-9cb7-473e-9cec-87b473f598b7/b6629c8eb49efe0cddf3d6adcfc0960f.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="relative">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Meet
              <br />
              <span className="gradient-text">Worthy Bot</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Enhance your Discord server with powerful moderation, engaging features,
              and seamless automation.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 bg-primary hover:bg-primary/90" 
              onClick={handleAddToDiscord}
            >
              Add to Discord
            </Button>
          </motion.div>
        </header>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Shield}
              title="Advanced Moderation"
              description="Keep your server safe with powerful moderation tools and auto-moderation features."
            />
            <FeatureCard
              icon={MessageCircle}
              title="Custom Commands"
              description="Create and customize commands to fit your server's unique needs."
            />
            <FeatureCard
              icon={Bot}
              title="24/7 Uptime"
              description="Our bot stays online around the clock, ensuring continuous service."
            />
            <FeatureCard
              icon={Skull}
              title="Auto-Skull"
              description="Secret feature most known in com servers, join /mock to experience the skull aura."
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PriceCard
              title="Basic"
              price={0}
              features={[
                "Basic moderation commands",
                "Custom prefix",
                "24/7 uptime",
              ]}
              buttonText="Get Started"
            />
            <PriceCard
              title="Pro"
              price={9.99}
              features={[
                "Advanced moderation",
                "Custom commands",
                "Auto-moderation",
                "Priority support",
              ]}
              buttonText="Subscribe"
            />
            <PriceCard
              title="Enterprise"
              price={29.99}
              features={[
                "All Pro features",
                "Dedicated support",
                "Custom development",
                "Unlimited everything",
              ]}
              buttonText="Contact Us"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2025 Worthy Bot. All rights reserved.</p>
        </footer>

        <Toaster />
      </div>
    </div>
  );
}
