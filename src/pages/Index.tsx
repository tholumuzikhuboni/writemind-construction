vimport React from "react";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Hammer, Construction } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-6 border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Logo className="blur-in" />
        </div>
      </header>

      <main className="flex-1 w-full flex items-center justify-center">
        <div className="relative w-full">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-accent/30"></div>
            <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="flex justify-center mb-8">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Construction className="h-10 w-10 text-yellow-600 animate-pulse" />
                </div>
              </div>

              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm px-4 py-1 border-primary/20 text-primary">
                Coming Soon
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Website Under <span style={{ color: "#206BC4" }}>Construction</span>
              </h1>
              
              <div className="h-px w-24 bg-primary/30 mx-auto my-6"></div>
              
              <p className="text-xl text-muted-foreground">
                We're working hard to bring you Write Mind - a markdown editor that combines simplicity with power.
              </p>
              
              <div className="pt-6">
                <EmailForm />
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-8">
                <Hammer className="h-4 w-4" />
                <span>Stay tuned for updates</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
