import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-zenfra-darkest relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-zenfra-200/10 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-zenfra-200/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full bg-zenfra-200/10 border border-zenfra-200/20">
          <p className="text-sm font-medium text-zenfra-100">
            Ready to transform your infrastructure?
          </p>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
          Experience the Zen of Infrastructure
        </h2>
        
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          Join teams that have simplified infrastructure management with secure,
          self-service automation that developers and platform engineers love.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-zenfra-300 hover:bg-zenfra-200 text-white px-8 py-6 text-lg h-auto"
          >
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          {/* <Button
            variant="outline"
            className="border-zenfra-200/30 hover:border-zenfra-200/60 text-white px-8 py-6 text-lg h-auto"
          >
            Schedule a Demo
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
