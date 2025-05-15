import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ChartBar, MessageSquare, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center h-full">
          <Link to="/" className="flex items-center h-full">
            <img 
              src="/wa-logo.png"
              alt="WA Logo"
              className="h-full w-auto object-contain"
            />
          </Link>
        </div>
        
        <nav className="flex items-center space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/website-builder">Website Builder</NavLink>
          <NavLink to="/image-generator">Image Generator</NavLink>
        </nav>
        
        <div className="flex items-center space-x-2">
          <IconButton icon={<Twitter className="h-5 w-5" />} label="Twitter" href="https://x.com/autowebsitetop" />
          <IconButton icon={<MessageSquare className="h-5 w-5" />} label="Telegram" href="https://t.me/autowebsite" />
          <IconButton icon={<ChartBar className="h-5 w-5" />} label="Pump.fun" href="https://pump.fun" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link 
      to={to} 
      className="text-sm font-medium transition-colors hover:text-autowebsite-accent relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-autowebsite-accent after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
    >
      {children}
    </Link>
  </motion.div>
);

const IconButton = ({ icon, label, href }) => (
  <motion.div
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.2 }}
  >
    <Button asChild variant="ghost" size="icon" aria-label={label}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
        <span className="sr-only">{label}</span>
      </a>
    </Button>
  </motion.div>
);

export default Navbar;
