import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon, Minus, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

export interface StatisticsCardProps {
    /**
     * The statistic title
     */
    title: string;
    /**
     * The main value to display
     */
    value: string | number;
    /**
     * Optional description
     */
    description?: string;
    /**
     * Percentage change
     */
    change?: number;
    /**
     * Change period description
     */
    changePeriod?: string;
    /**
     * Icon to display
     */
    icon?: LucideIcon;
    /**
     * Icon color
     */
    iconColor?: string;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Value prefix (e.g., "$", "€")
     */
    prefix?: string;
    /**
     * Value suffix (e.g., "%", "K", "M")
     */
    suffix?: string;
}

/**
 * StatisticsCard component for displaying key metrics and KPIs
 * 
 * @example
 * ```tsx
 * <StatisticsCard
 *   title="Total Revenue"
 *   value={45231}
 *   prefix="$"
 *   change={20.1}
 *   changePeriod="from last month"
 *   icon={DollarSign}
 *   iconColor="text-green-600"
 * />
 * ```
 */
export const StatisticsCard = React.memo<StatisticsCardProps>(({
    title,
    value,
    description,
    change,
    changePeriod = "from last month",
    icon: Icon,
    iconColor = "text-primary",
    className,
    prefix = "",
    suffix = "",
}) => {
    const formatValue = (val: string | number) => {
        if (typeof val === 'number') {
            return val.toLocaleString();
        }
        return val;
    };

    const getTrendIcon = () => {
        if (!change) return null;

        if (change > 0) {
            return <TrendingUp className="w-4 h-4 text-green-600" />;
        } else if (change < 0) {
            return <TrendingDown className="w-4 h-4 text-red-600" />;
        } else {
            return <Minus className="w-4 h-4 text-gray-500" />;
        }
    };

    const getChangeColor = () => {
        if (!change) return "text-muted-foreground";

        if (change > 0) {
            return "text-green-600";
        } else if (change < 0) {
            return "text-red-600";
        } else {
            return "text-gray-500";
        }
    };

    return (
        <Card className={cn("hover:shadow-md transition-shadow", className)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {Icon && (
                    <Icon className={cn("w-4 h-4", iconColor)} />
                )}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {prefix}{formatValue(value)}{suffix}
                </div>
                {description && (
                    <CardDescription className="mt-1">
                        {description}
                    </CardDescription>
                )}
                {change !== undefined && (
                    <div className={cn("text-xs flex items-center mt-1", getChangeColor())}>
                        {getTrendIcon()}
                        <span className="ml-1">
                            {change > 0 ? '+' : ''}{change}% {changePeriod}
                        </span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
});

StatisticsCard.displayName = "StatisticsCard";

export default StatisticsCard;
