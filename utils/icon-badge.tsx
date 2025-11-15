import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const backgroundVariants = cva(
  "rounded-full flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-sky-foreground",
        transparent: "bg-transparent",
        success: "bg-emerald-700",
        sky: "bg-sky",
      },
      size: {
        default: "p-2",
        sm: "p-0",
        xs: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const iconVariants = cva("", {
  variants: {
    variant: {
      default: "text-primary",
      transparent: "text-primary",
      success: "text-primary-foreground",
      sky: "text-sky-foreground",
    },
    size: {
      default: "h-8 w-8",
      sm: "h-4 w-4",
      xs: "h-3 w-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type IconVariantsProps = VariantProps<typeof iconVariants>;

interface IconBadgeProps extends BackgroundVariantsProps, IconVariantsProps {
  icon: LucideIcon;
}

export const IconBadge = ({ icon: Icon, variant, size }: IconBadgeProps) => {
  return (
    <div className={cn(backgroundVariants({ variant, size }))}>
      <Icon className={cn(iconVariants({ variant, size }))} />
    </div>
  );
};
