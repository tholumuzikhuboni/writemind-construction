
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white/50 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-auto" />
            <span className="text-sm text-gray-500">© {new Date().getFullYear()} Write Mind. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/privacy-policy" 
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
