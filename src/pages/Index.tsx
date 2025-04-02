
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Dashboard from "@/components/landing/Dashboard";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-zenfra-darkest">
      <Header />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <Dashboard />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
