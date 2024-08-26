import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

interface MaxWidthWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const MaxWidthWrapper = ({
  children,
  className,
  ...props
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn("max-w-screen-xl mx-auto w-full px-2", className)}
      {...props}
    >
      {children}
    </div>
  );
};
