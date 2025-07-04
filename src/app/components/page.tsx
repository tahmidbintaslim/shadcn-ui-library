import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Copy, Github } from "lucide-react";
import Link from "next/link";

export default function ComponentsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
            {/* Header */}
            <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Home
                                </Link>
                            </Button>
                            <div className="h-6 w-px bg-border" />
                            <h1 className="text-2xl font-bold">Components</h1>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                            <a href="https://github.com/yourusername/shadcn-devsaround" target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                View Source
                            </a>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Component Library</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Browse our collection of beautiful, accessible, and customizable components. Each component is built with TypeScript and follows modern React patterns.
                    </p>
                </div>

                {/* Component Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Interactive Card Component */}
                    <Card className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Interactive Card</CardTitle>
                                <Badge variant="secondary">New</Badge>
                            </div>
                            <CardDescription>
                                A beautiful card component with hover effects, animations, and flexible content layout.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {/* Preview */}
                                <div className="border rounded-lg p-4 bg-muted/50">
                                    <Card className="max-w-sm border-2 hover:border-primary/50 transition-colors">
                                        <CardHeader>
                                            <CardTitle className="text-base">Sample Card</CardTitle>
                                            <CardDescription>This is a preview of the interactive card component.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button size="sm">Try it out</Button>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline">
                                        <Copy className="w-4 h-4 mr-2" />
                                        Copy Code
                                    </Button>
                                    <Button size="sm" asChild>
                                        <Link href="/components/interactive-card">
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Pricing Card Component */}
                    <Card className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Pricing Card</CardTitle>
                                <Badge variant="outline">Popular</Badge>
                            </div>
                            <CardDescription>
                                Professional pricing cards with features list, call-to-action buttons, and responsive design.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {/* Preview */}
                                <div className="border rounded-lg p-4 bg-muted/50">
                                    <Card className="max-w-sm border-2">
                                        <CardHeader className="text-center">
                                            <CardTitle className="text-base">Pro Plan</CardTitle>
                                            <div className="text-2xl font-bold">$29/mo</div>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-sm">
                                                <li>✓ Feature 1</li>
                                                <li>✓ Feature 2</li>
                                                <li>✓ Feature 3</li>
                                            </ul>
                                            <Button size="sm" className="w-full mt-4">
                                                Get Started
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline">
                                        <Copy className="w-4 h-4 mr-2" />
                                        Copy Code
                                    </Button>
                                    <Button size="sm" asChild>
                                        <Link href="/components/pricing-card">
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Statistics Card Component */}
                    <Card className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Statistics Card</CardTitle>
                                <Badge variant="secondary">Analytics</Badge>
                            </div>
                            <CardDescription>
                                Display key metrics and statistics with beautiful icons and trend indicators.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {/* Preview */}
                                <div className="border rounded-lg p-4 bg-muted/50">
                                    <Card className="max-w-sm">
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                                            <div className="text-2xl font-bold">$45,231</div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-xs text-muted-foreground">
                                                +20.1% from last month
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline">
                                        <Copy className="w-4 h-4 mr-2" />
                                        Copy Code
                                    </Button>
                                    <Button size="sm" asChild>
                                        <Link href="/components/statistics-card">
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Feature Card Component */}
                    <Card className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Feature Card</CardTitle>
                                <Badge variant="outline">Featured</Badge>
                            </div>
                            <CardDescription>
                                Showcase product features with icons, descriptions, and call-to-action elements.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {/* Preview */}
                                <div className="border rounded-lg p-4 bg-muted/50">
                                    <Card className="max-w-sm text-center">
                                        <CardHeader>
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                                <div className="w-6 h-6 bg-primary rounded"></div>
                                            </div>
                                            <CardTitle className="text-base">Amazing Feature</CardTitle>
                                            <CardDescription>
                                                This feature will revolutionize your workflow
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline">
                                        <Copy className="w-4 h-4 mr-2" />
                                        Copy Code
                                    </Button>
                                    <Button size="sm" asChild>
                                        <Link href="/components/feature-card">
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Testimonial Card Component */}
                    <Card className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Testimonial Card</CardTitle>
                                <Badge variant="secondary">Social</Badge>
                            </div>
                            <CardDescription>
                                Beautiful testimonial cards with user avatars, ratings, and quotes.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {/* Preview */}
                                <div className="border rounded-lg p-4 bg-muted/50">
                                    <Card className="max-w-sm">
                                        <CardHeader>
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 bg-primary rounded-full"></div>
                                                <div>
                                                    <CardTitle className="text-sm">John Doe</CardTitle>
                                                    <CardDescription className="text-xs">CEO, Company</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm">&ldquo;This is an amazing product that has transformed our business.&rdquo;</p>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline">
                                        <Copy className="w-4 h-4 mr-2" />
                                        Copy Code
                                    </Button>
                                    <Button size="sm" asChild>
                                        <Link href="/components/testimonial-card">
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Blog Card Component */}
                    <Card className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Blog Card</CardTitle>
                                <Badge variant="outline">Content</Badge>
                            </div>
                            <CardDescription>
                                Perfect for blog posts, articles, and news content with images and metadata.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {/* Preview */}
                                <div className="border rounded-lg p-4 bg-muted/50">
                                    <Card className="max-w-sm">
                                        <div className="w-full h-24 bg-gradient-to-r from-primary to-primary/60 rounded-t-lg"></div>
                                        <CardHeader>
                                            <CardTitle className="text-sm">How to Build Amazing UIs</CardTitle>
                                            <CardDescription className="text-xs">
                                                Learn the best practices for creating beautiful user interfaces
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-xs text-muted-foreground">
                                                Jan 15, 2024 • 5 min read
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline">
                                        <Copy className="w-4 h-4 mr-2" />
                                        Copy Code
                                    </Button>
                                    <Button size="sm" asChild>
                                        <Link href="/components/blog-card">
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle className="text-2xl">Want to Contribute?</CardTitle>
                            <CardDescription>
                                Help us build an even better component library. Contribute new components, fix bugs, or improve documentation.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-4 justify-center">
                                <Button asChild>
                                    <a href="https://github.com/yourusername/shadcn-devsaround" target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4 mr-2" />
                                        Contribute on GitHub
                                    </a>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href="/">
                                        Back to Home
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
