import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 bg-zenfra-darker border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/zenfra_logo_60x60_purple.png" alt="Zenfra Logo" className="w-8 h-8 rounded-md mr-3" />
              <h3 className="text-xl font-bold text-white">Zenfra</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Secure, self-service infrastructure automation for platform teams.
              Bringing zen to your infrastructure workflows.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X (formerly Twitter)" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {/* {["Features", "Security", "Pricing", "Roadmap", "Changelog"].map((item, i) => ( */}
              {["Features", "Security"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {/* {["Documentation", "API Reference", "Community", "Blog", "Support"].map((item, i) => ( */}
              {["Documentation", "API Reference", "Support"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {/* {["About", "Careers", "Contact", "Privacy", "Terms"].map((item, i) => ( */}
              {[
                { name: "About", href: "#" },
                { name: "Contact", href: "#" },
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Zenfra. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
