import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Quote, Star } from "lucide-react";
import React from "react";

export interface TestimonialCardProps {
    /**
     * The testimonial text
     */
    testimonial: string;
    /**
     * Author name
     */
    author: string;
    /**
     * Author role/title
     */
    role?: string;
    /**
     * Author company
     */
    company?: string;
    /**
     * Author avatar URL
     */
    avatar?: string;
    /**
     * Rating out of 5
     */
    rating?: number;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Card variant
     */
    variant?: "default" | "bordered" | "elevated";
}

/**
 * TestimonialCard component for displaying customer testimonials
 * 
 * @example
 * ```tsx
 * <TestimonialCard
 *   testimonial="This product has completely transformed how we work. The team is more productive than ever!"
 *   author="Sarah Johnson"
 *   role="Product Manager"
 *   company="TechCorp"
 *   rating={5}
 *   avatar="/avatars/sarah.jpg"
 * />
 * ```
 */
export const TestimonialCard = React.memo<TestimonialCardProps>(({
    testimonial,
    author,
    role,
    company,
    avatar,
    rating,
    className,
    variant = "default",
}) => {
    const renderStars = () => {
        if (!rating) return null;

        return (
            <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={cn(
                            "w-4 h-4",
                            i < rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                        )}
                    />
                ))}
            </div>
        );
    };

    const getCardVariant = () => {
        switch (variant) {
            case "bordered":
                return "border-2 border-primary/20";
            case "elevated":
                return "shadow-lg hover:shadow-xl transition-shadow duration-300";
            default:
                return "hover:shadow-md transition-shadow duration-200";
        }
    };

    return (
        <Card className={cn(getCardVariant(), "relative", className)}>
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-8 h-8" />
            </div>

            <CardContent className="pt-6">
                {/* Rating */}
                {renderStars()}

                {/* Testimonial */}
                <blockquote className="text-lg font-medium leading-relaxed mb-6">
                    &ldquo;{testimonial}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                    {avatar ? (
                        <img
                            src={avatar}
                            alt={author}
                            className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
                        />
                    ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                            <span className="text-primary font-semibold text-lg">
                                {author.charAt(0)}
                            </span>
                        </div>
                    )}

                    <div>
                        <div className="font-semibold text-foreground">{author}</div>
                        {(role || company) && (
                            <div className="text-sm text-muted-foreground">
                                {role}{role && company && " • "}{company}
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
});

TestimonialCard.displayName = "TestimonialCard";

export default TestimonialCard;
