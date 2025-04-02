
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Database, Fingerprint } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-zenfra-200/20 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zenfra-200/20 rounded-full filter blur-3xl opacity-10 animate-pulse-slow delay-1000"></div>
      </div>
      
      {/* Floating grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(#8B5CF6 0.5px, transparent 0.5px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full bg-zenfra-200/10 border border-zenfra-200/20">
          <p className="text-sm font-medium text-zenfra-100">
            Simplify Infrastructure Management
          </p>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
          Zen for Your Infrastructure
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Secure, self-service infrastructure automation for DevOps, SRE, and platform engineering teams
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            className="bg-zenfra-200 hover:bg-zenfra-300 text-white px-8 py-6 text-lg h-auto"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="border-zenfra-200/30 hover:border-zenfra-200/60 text-white px-8 py-6 text-lg h-auto"
          >
            Book a Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="glass-morphism p-6 rounded-xl">
            <Shield className="h-10 w-10 text-zenfra-100 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Secure by Design</h3>
            <p className="text-gray-400">OpenTofu & Pulumi self-service with built-in security controls and encrypted state</p>
          </div>
          
          <div className="glass-morphism p-6 rounded-xl">
            <Fingerprint className="h-10 w-10 text-zenfra-100 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Team Isolation</h3>
            <p className="text-gray-400">Complete isolation for teams and projects with fine-grained access controls</p>
          </div>
          
          <div className="glass-morphism p-6 rounded-xl">
            <Database className="h-10 w-10 text-zenfra-100 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Encrypted State</h3>
            <p className="text-gray-400">State is always encrypted, whether stored in Zenfra or in your own bucket</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
