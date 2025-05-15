
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ChartBar, MessageSquare, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Autowebsite Logo" 
              className="h-8 w-8 mr-2 rounded-md"
            />
            <span className="text-xl font-bold">Autowebsite</span>
          </Link>
        </div>
        
        <nav className="flex items-center space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/website-builder">Website Builder</NavLink>
          <NavLink to="/image-generator">Image Generator</NavLink>
        </nav>
        
        <div className="flex items-center space-x-2">
          <IconButton icon={<Twitter className="h-5 w-5" />} label="Twitter" />
          <IconButton icon={<MessageSquare className="h-5 w-5" />} label="Messages" />
          <IconButton icon={<ChartBar className="h-5 w-5" />} label="Analytics" />
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

const IconButton = ({ icon, label }) => (
  <motion.div
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.2 }}
  >
    <Button variant="ghost" size="icon" aria-label={label}>
      {icon}
      <span className="sr-only">{label}</span>
    </Button>
  </motion.div>
);

export default Navbar;
