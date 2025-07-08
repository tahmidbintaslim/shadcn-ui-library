import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, Clock, Heart, User } from "lucide-react";
import React from "react";

export interface BlogCardProps {
    /**
     * Blog post title
     */
    title: string;
    /**
     * Blog post excerpt/description
     */
    excerpt: string;
    /**
     * Author name
     */
    author: string;
    /**
     * Author avatar URL
     */
    authorAvatar?: string;
    /**
     * Publication date
     */
    date: string;
    /**
     * Reading time estimate
     */
    readTime?: string;
    /**
     * Featured image URL
     */
    image?: string;
    /**
     * Blog post URL
     */
    href?: string;
    /**
     * Category/tag
     */
    category?: string;
    /**
     * Category color
     */
    categoryColor?: string;
    /**
     * Like count
     */
    likes?: number;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Card variant
     */
    variant?: "default" | "horizontal" | "minimal";
    /**
     * Click handler
     */
    onClick?: () => void;
}

/**
 * BlogCard component for displaying blog posts and articles
 * 
 * @example
 * ```tsx
 * <BlogCard
 *   title="Getting Started with React Components"
 *   excerpt="Learn how to build reusable React components with TypeScript and modern best practices."
 *   author="Jane Smith"
 *   date="2024-01-15"
 *   readTime="5 min read"
 *   image="/blog/react-components.jpg"
 *   category="React"
 *   categoryColor="bg-blue-100 text-blue-800"
 *   likes={42}
 *   href="/blog/react-components"
 * />
 * ```
 */
export const BlogCard = React.memo<BlogCardProps>(({
    title,
    excerpt,
    author,
    authorAvatar,
    date,
    readTime,
    image,
    href,
    category,
    categoryColor = "bg-gray-100 text-gray-800",
    likes,
    className,
    variant = "default",
    onClick,
}) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const CardWrapper = href ? 'a' : 'div';
    const cardProps = href ? { href } : {};

    const renderImage = () => {
        if (!image) return null;

        return (
            <div className={cn(
                "relative overflow-hidden",
                variant === "horizontal" ? "w-48 h-full" : "w-full h-48"
            )}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {category && (
                    <Badge
                        className={cn(
                            "absolute top-3 left-3",
                            categoryColor
                        )}
                    >
                        {category}
                    </Badge>
                )}
            </div>
        );
    };

    const renderContent = () => (
        <div className={cn(
            "flex flex-col",
            variant === "horizontal" ? "flex-1" : "flex-1"
        )}>
            <CardHeader className="pb-3">
                {variant !== "horizontal" && category && (
                    <Badge className={cn("w-fit mb-2", categoryColor)}>
                        {category}
                    </Badge>
                )}
                <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-sm">
                    {excerpt}
                </CardDescription>
            </CardHeader>

            <CardContent className="pt-0 mt-auto">
                {/* Author and Meta */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        {authorAvatar ? (
                            <img
                                src={authorAvatar}
                                alt={author}
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                                <User className="w-4 h-4 text-primary" />
                            </div>
                        )}
                        <div className="flex flex-col">
                            <span className="text-sm font-medium">{author}</span>
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3" />
                                <span>{formatDate(date)}</span>
                                {readTime && (
                                    <>
                                        <span>•</span>
                                        <Clock className="w-3 h-3" />
                                        <span>{readTime}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Likes and Read More */}
                    <div className="flex items-center space-x-2">
                        {likes !== undefined && (
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <Heart className="w-4 h-4" />
                                <span>{likes}</span>
                            </div>
                        )}
                        {variant !== "minimal" && (
                            <Button variant="ghost" size="sm" className="group">
                                Read More
                                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </Button>
                        )}
                    </div>
                </div>
            </CardContent>
        </div>
    );

    return (
        <CardWrapper
            {...cardProps}
            className={cn(
                href && "no-underline",
                className
            )}
            onClick={onClick}
        >
            <Card
                className={cn(
                    "group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden",
                    variant === "horizontal" && "flex flex-row",
                    variant === "minimal" && "border-0 shadow-none hover:shadow-md",
                    className
                )}
            >
                {variant === "horizontal" ? (
                    <>
                        {renderImage()}
                        {renderContent()}
                    </>
                ) : (
                    <>
                        {renderImage()}
                        {renderContent()}
                    </>
                )}
            </Card>
        </CardWrapper>
    );
});

BlogCard.displayName = "BlogCard";

export default BlogCard;
