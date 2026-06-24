import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

import { Card, CardContent } from "@/components/ui/card";

type Amenity = {
  id: number;
  icon: LucideIcon | IconType;
  title: string;
  description: string;
};

type AmenityCardProps = {
  amenity: Amenity;
  index: number;
  showIndex?: boolean;
  isSticky?: boolean;
};

const FacilitiesCard = ({
  amenity,
  index,
  showIndex = false,
  isSticky = false,
}: AmenityCardProps) => {
  const Icon = amenity.icon;
  console.log(isSticky);

  return (
    <Card
      className={cn(
        "rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        isSticky ? "lg:sticky" : "relative",
      )}
      style={
        isSticky
          ? {
              top: `${72 + index * 30}px`,
              zIndex: index + 1,
            }
          : undefined
      }
    >
      <CardContent className="p-8">
        {/* top-right number badge */}
        {showIndex && (
          <div className="absolute top-0 right-0 text-foreground/40 bg-primary/10 px-4 py-2 rounded-bl-md text-xl font-bold">
            {index + 1}
          </div>
        )}

        {/* icon */}
        <div className="mb-4 text-primary">
          <Icon className="w-7 h-7" />
        </div>

        {/* title */}
        <h3 className="text-xl font-semibold uppercase tracking-wide mb-3">
          {amenity.title}
        </h3>

        {/* description */}
        <p className="text-sm text-foreground/70 leading-relaxed">
          {amenity.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FacilitiesCard;
