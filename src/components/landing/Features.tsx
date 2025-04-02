
import { Check, Shield, Lock, Users, Database, GitBranch, ServerCrash, AlertTriangle } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 bg-zenfra-darker relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-zenfra-darkest to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-zenfra-darkest to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Infrastructure Management, Simplified
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Zenfra brings security, visibility, and control to your infrastructure-as-code workflows
          </p>
        </div>
        
        <div className="feature-grid mb-16">
          <div className="neo-card p-6 h-full">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-zenfra-200/10 rounded-lg mr-4">
                <Shield className="h-6 w-6 text-zenfra-100" />
              </div>
              <h3 className="text-xl font-semibold">OpenTofu & Pulumi Self-Service</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Give your teams the power of infrastructure-as-code with secure guardrails and policy controls.
            </p>
            <ul className="space-y-2">
              {["Automated workflows", "Customizable approval processes", "Versioned infrastructure"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-zenfra-200 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="neo-card p-6 h-full">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-zenfra-200/10 rounded-lg mr-4">
                <Users className="h-6 w-6 text-zenfra-100" />
              </div>
              <h3 className="text-xl font-semibold">Team & Project Isolation</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Complete isolation between teams and projects ensures secure multi-tenancy.
            </p>
            <ul className="space-y-2">
              {["Role-based access control", "Isolated execution environments", "Project-specific policies"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-zenfra-200 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="neo-card p-6 h-full">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-zenfra-200/10 rounded-lg mr-4">
                <Lock className="h-6 w-6 text-zenfra-100" />
              </div>
              <h3 className="text-xl font-semibold">Security Integrations</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Built-in integration with OPA and Checkov for policy enforcement and security scanning.
            </p>
            <ul className="space-y-2">
              {["Policy-as-code with OPA", "Security scanning with Checkov", "Custom policy enforcement"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-zenfra-200 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="neo-card p-6 h-full">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-zenfra-200/10 rounded-lg mr-4">
                <Database className="h-6 w-6 text-zenfra-100" />
              </div>
              <h3 className="text-xl font-semibold">Secure State Storage</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your infrastructure state is always encrypted, whether stored in Zenfra or your own bucket.
            </p>
            <ul className="space-y-2">
              {["End-to-end encryption", "State versioning", "Remote backends"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-zenfra-200 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="neo-card p-6 h-full">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-zenfra-200/10 rounded-lg mr-4">
                <GitBranch className="h-6 w-6 text-zenfra-100" />
              </div>
              <h3 className="text-xl font-semibold">Visibility & Reporting</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Gain actionable insights into your infrastructure across all environments.
            </p>
            <ul className="space-y-2">
              {["Resource tracking", "Cost monitoring", "Audit trail"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-zenfra-200 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="neo-card p-6 h-full">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-zenfra-200/10 rounded-lg mr-4">
                <AlertTriangle className="h-6 w-6 text-zenfra-100" />
              </div>
              <h3 className="text-xl font-semibold">Drift Detection & Dashboards</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Monitor and detect infrastructure drift with operational dashboards.
            </p>
            <ul className="space-y-2">
              {["Real-time drift detection", "Automated remediation", "Operational dashboards"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-zenfra-200 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
