import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  explore: [
    { href: "/", label: "Home" },
    { href: "/products", label: "What We Build" },
    { href: "/lab", label: "Lab" },
    { href: "/contact", label: "Contact" },
  ],
  connect: [
    { href: "https://github.com", label: "GitHub", icon: Github },
    { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
    { href: "https://x.com", label: "X (Twitter)", icon: Twitter },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface-overlay">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <div className="w-3 h-3 rounded-sm bg-primary" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                GlitchLabz
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Building the AI infrastructure of tomorrow. We create intelligent systems that power the next generation of technology.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {footerLinks.connect.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GlitchLabz. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with purpose. Powered by intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
