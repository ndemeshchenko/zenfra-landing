import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="fixed w-full z-50 bg-zenfra-darkest/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <img src="/zenfra_logo_60x60_purple.png" alt="Zenfra Logo" className="w-[45px] h-[45px] rounded-md mr-3" />
              <span className="text-[33px] text-white font-mono font-medium">zenfra</span>
            </a>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <Button 
              variant="ghost" 
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#features" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            {/* <a href="#" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
              Pricing
            </a> */}
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
              Documentation
            </a>
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white transition-colors">
              Company
            </a>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="https://cp.zenfra.cloud" className="whitespace-nowrap text-base font-medium text-gray-300 hover:text-white transition-colors mr-8">
              Sign in
            </a>
            <Button className="bg-zenfra-200 hover:bg-zenfra-300 text-white">
              Request Early Access
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isOpen ? 'fixed inset-0 overflow-hidden' : 'hidden'} md:hidden`}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" onClick={() => setIsOpen(false)}></div>
        
        <div className="fixed inset-y-0 right-0 max-w-full flex">
          <div className="w-screen max-w-md bg-zenfra-dark p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <img src="/zenfra_logo_60x60_purple.png" alt="Zenfra Logo" className="w-[60px] h-[60px] rounded-md mr-3" />
                <span className="text-[33px] text-white font-mono font-medium">zenfra</span>
              </div>
              <Button 
                variant="ghost" 
                className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-200"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            
            <div className="mt-6 flex flex-col space-y-8">
              <div className="space-y-6">
                <a href="#features" className="text-xl font-medium text-gray-300 hover:text-white block transition-colors" onClick={() => setIsOpen(false)}>
                  Features
                </a>
                <a href="#" className="text-xl font-medium text-gray-300 hover:text-white block transition-colors" onClick={() => setIsOpen(false)}>
                  Pricing
                </a>
                <a href="#" className="text-xl font-medium text-gray-300 hover:text-white block transition-colors" onClick={() => setIsOpen(false)}>
                  Documentation
                </a>
                <a href="#" className="text-xl font-medium text-gray-300 hover:text-white block transition-colors" onClick={() => setIsOpen(false)}>
                  Company
                </a>
              </div>
              
              <div className="pt-6 border-t border-white/5">
                <a href="https://cp.zenfra.cloud" className="block w-full text-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-200 bg-zenfra-dark hover:bg-white/5 mb-4" onClick={() => setIsOpen(false)}>
                  Sign in
                </a>
                <Button className="w-full bg-zenfra-200 hover:bg-zenfra-300 text-white py-6 h-auto" onClick={() => setIsOpen(false)}>
                  Start Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
