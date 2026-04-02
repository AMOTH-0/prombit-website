import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card py-16">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="group mb-4 flex items-center gap-2.5 transition-opacity hover:opacity-90 w-fit">
            <img 
              src="/logo.png" 
              alt="Prombit Logo" 
              className="h-8 w-8 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <h3 className="text-lg font-bold tracking-tight text-gradient">Prombit</h3>
          </Link>
          <p className="text-sm text-muted-foreground">
            Transform vague ideas into powerful AI prompts. Works with ChatGPT, Claude, Midjourney, and more.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Product</h4>
          <div className="flex flex-col gap-2">
            <Link to="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Platforms</h4>
          <div className="flex flex-col gap-2">
            <Link to="/chrome-extension" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Chrome Extension</Link>
            <Link to="/desktop-app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Desktop App</Link>
            <Link to="/mobile-app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mobile App</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Join Waitlist</Link>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Prombit. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
