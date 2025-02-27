
import { useEffect } from 'react';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Redirect to the external terms page
    window.location.href = 'https://terms.tholumuzi.co.za';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="container-custom flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>
      
      <main className="flex-1 container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <div className="animate-pulse bg-gray-200 h-6 w-3/4 rounded mb-4"></div>
          <div className="animate-pulse bg-gray-200 h-6 w-full rounded mb-4"></div>
          <div className="animate-pulse bg-gray-200 h-6 w-5/6 rounded mb-4"></div>
          <div className="text-center mt-12">
            <p>Redirecting to our terms of service page...</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
