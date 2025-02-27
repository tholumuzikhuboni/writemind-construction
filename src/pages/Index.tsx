
import React, { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Code, Edit, FileText, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      featureRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return observer;
    };

    const observer = observeElements();

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: <Edit className="h-8 w-8 text-primary" />,
      title: "Intuitive Editing",
      description:
        "Focus on your content with our clean, distraction-free markdown editor."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Real-time Preview",
      description:
        "See your formatted text instantly as you type with side-by-side preview."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Syntax Highlighting",
      description:
        "Improve readability with beautiful syntax highlighting for code blocks."
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Seamless Organization",
      description:
        "Keep your thoughts organized with powerful document management."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section */}
      <header className="relative w-full py-6 border-b border-gray-100">
        <div className="container-custom flex justify-between items-center">
          <Logo className="blur-in" />
          <div className="opacity-0">Placeholder</div>
        </div>
      </header>

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative w-full pt-12 pb-24 md:pt-24 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-accent/30 opacity-80"></div>
            <div className="absolute left-0 right-0 top-1/4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
            <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm px-4 py-1 border-primary/20 text-primary slide-in-left">
                Coming Soon
              </Badge>
              
              <h1 className="hero-text slide-in-left" style={{ animationDelay: "0.1s" }}>
                Where <span className="text-primary">Ideas</span> Take Shape
              </h1>
              
              <p className="subtitle slide-in-left" style={{ animationDelay: "0.2s" }}>
                Write Mind is a markdown editor that combines simplicity with power, 
                helping you capture and organize your thoughts effortlessly.
              </p>
              
              <div className="slide-in-left" style={{ animationDelay: "0.3s" }}>
                <EmailForm />
              </div>
            </div>
            
            <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto">
              <div className="glass-card p-4 overflow-hidden blur-in" style={{ animationDelay: "0.4s" }}>
                <div className="aspect-video relative overflow-hidden rounded-lg bg-gray-50 border border-gray-200">
                  <div className="absolute inset-0 flex flex-col">
                    {/* Mock Editor UI */}
                    <div className="h-10 bg-white border-b border-gray-200 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="ml-4 px-2 py-1 rounded bg-gray-100 text-xs text-gray-500">Untitled.md</div>
                    </div>
                    <div className="flex-1 flex">
                      <div className="w-1/2 p-4 bg-white overflow-hidden">
                        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse-subtle mb-3"></div>
                        <div className="h-4 w-full bg-gray-200 rounded animate-pulse-subtle mb-2"></div>
                        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse-subtle mb-2"></div>
                        <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse-subtle mb-4"></div>
                        
                        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse-subtle mb-3"></div>
                        <div className="h-4 w-full bg-gray-200 rounded animate-pulse-subtle mb-2"></div>
                        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse-subtle mb-4"></div>
                        
                        <div className="h-24 w-full bg-gray-200 rounded animate-pulse-subtle mb-3"></div>
                      </div>
                      <div className="w-1/2 p-4 bg-gray-50 border-l border-gray-200">
                        <div className="h-7 w-40 bg-gray-300 rounded mb-3"></div>
                        <div className="h-5 w-full bg-gray-300 rounded mb-2"></div>
                        <div className="h-5 w-5/6 bg-gray-300 rounded mb-2"></div>
                        <div className="h-5 w-4/6 bg-gray-300 rounded mb-4"></div>
                        
                        <div className="h-7 w-32 bg-gray-300 rounded mb-3"></div>
                        <div className="h-5 w-full bg-gray-300 rounded mb-2"></div>
                        <div className="h-5 w-3/4 bg-gray-300 rounded mb-4"></div>
                        
                        <div className="h-28 w-full border border-gray-300 rounded mb-3 flex items-center justify-center">
                          <div className="text-sm text-gray-400">Code block preview</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -left-6 h-24 w-24 rounded-full bg-primary/10 blur-xl float"></div>
              <div className="absolute -z-10 -bottom-10 -right-10 h-32 w-32 rounded-full bg-purple-300/20 blur-xl float" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Designed for <span className="text-primary">Productivity</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Write Mind combines powerful features with an intuitive interface to help you focus on what matters most - your ideas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => (featureRefs.current[index] = el)}
                  className="glass-card p-6 opacity-0"
                >
                  <div className="bg-accent rounded-full h-12 w-12 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="relative py-20 bg-gradient-to-b from-white to-accent/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                Coming Soon
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Be the First to Experience Write Mind
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sign up to get notified when we launch and receive early access to our beta.
              </p>
              <EmailForm />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/3 left-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 right-10 h-60 w-60 rounded-full bg-purple-300/10 blur-3xl -z-10"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
