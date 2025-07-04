import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Github, Palette, Star, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">
            <Github className="w-4 h-4 mr-2" />
            Open Source
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            shadcn/ui Components
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A curated collection of beautiful, accessible, and reusable components built with React, TypeScript, and Tailwind CSS. Ready to copy, paste, and customize.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href="/components">
                <Code className="w-4 h-4 mr-2" />
                Browse Components
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/yourusername/shadcn-devsaround" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Components?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with modern technologies and best practices to help you create amazing user interfaces faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Beautiful Design</CardTitle>
              <CardDescription>
                Carefully crafted components with attention to detail and modern aesthetics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Performance First</CardTitle>
              <CardDescription>
                Optimized for speed and efficiency with minimal bundle size impact
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Developer Experience</CardTitle>
              <CardDescription>
                TypeScript support, comprehensive documentation, and easy customization
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Component Preview Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Components</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our most popular components that developers love
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Interactive Cards", description: "Hover effects, animations, and beautiful layouts" },
            { name: "Data Tables", description: "Sortable, filterable, and paginated tables" },
            { name: "Form Components", description: "Validation, accessibility, and modern styling" },
            { name: "Navigation", description: "Responsive menus, breadcrumbs, and tabs" },
            { name: "Feedback", description: "Toasts, alerts, and loading states" },
            { name: "Charts", description: "Beautiful data visualizations and graphs" }
          ].map((component, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{component.name}</CardTitle>
                <CardDescription>{component.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/components">
                    View Component
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Start Building Amazing UIs Today</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of developers who are already using our components to build beautiful applications.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/components">
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/yourusername/shadcn-devsaround" target="_blank" rel="noopener noreferrer">
                <Star className="w-4 h-4 mr-2" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
