import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive  placeholder:text-foreground/60  dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent px-3 py-3 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex  file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive py-3",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
