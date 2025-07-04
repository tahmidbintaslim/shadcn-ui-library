import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import React from "react";

export interface PricingFeature {
    /**
     * Feature text
     */
    text: string;
    /**
     * Whether the feature is included
     */
    included: boolean;
}

export interface PricingCardProps {
    /**
     * Plan name
     */
    name: string;
    /**
     * Plan description
     */
    description?: string;
    /**
     * Price amount
     */
    price: number;
    /**
     * Price currency
     */
    currency?: string;
    /**
     * Price period (e.g., "month", "year")
     */
    period?: string;
    /**
     * List of features
     */
    features: PricingFeature[];
    /**
     * Call-to-action button text
     */
    ctaText?: string;
    /**
     * Whether this is the popular/recommended plan
     */
    popular?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Button click handler
     */
    onSelect?: () => void;
}

/**
 * PricingCard component for displaying pricing plans
 * 
 * @example
 * ```tsx
 * <PricingCard
 *   name="Pro Plan"
 *   description="Perfect for growing businesses"
 *   price={29}
 *   period="month"
 *   features={[
 *     { text: "Unlimited projects", included: true },
 *     { text: "24/7 support", included: true },
 *     { text: "Advanced analytics", included: false }
 *   ]}
 *   ctaText="Get Started"
 *   popular={true}
 *   onSelect={() => console.log("Plan selected")}
 * />
 * ```
 */
export const PricingCard = React.memo<PricingCardProps>(({
    name,
    description,
    price,
    currency = "$",
    period = "month",
    features,
    ctaText = "Get Started",
    popular = false,
    className,
    onSelect,
}) => {
    return (
        <Card
            className={cn(
                "relative border-2 transition-all duration-300 hover:shadow-lg",
                popular && "border-primary shadow-lg scale-105",
                className
            )}
        >
            {popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                        Most Popular
                    </Badge>
                </div>
            )}

            <CardHeader className="text-center">
                <CardTitle className="text-2xl">{name}</CardTitle>
                {description && (
                    <CardDescription className="text-base">{description}</CardDescription>
                )}
                <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold">{currency}{price}</span>
                        <span className="text-muted-foreground ml-2">/{period}</span>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                {/* Features List */}
                <div className="space-y-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            {feature.included ? (
                                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                            ) : (
                                <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                            )}
                            <span
                                className={cn(
                                    "text-sm",
                                    !feature.included && "text-muted-foreground line-through"
                                )}
                            >
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <Button
                    onClick={onSelect}
                    className="w-full"
                    variant={popular ? "default" : "outline"}
                    size="lg"
                >
                    {ctaText}
                </Button>
            </CardContent>
        </Card>
    );
});

PricingCard.displayName = "PricingCard";

export default PricingCard;
