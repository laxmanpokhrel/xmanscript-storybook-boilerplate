import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../utils/tailwindutil';

const buttonVariants = cva(
  `inline-flex items-center justify-center rounded-md text-sm 
  font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 
  focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none`,
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-white hover:shadow-top hover:shadow-primary-400',
      },
      size: {
        default: 'h-10 py-2 px-3',
        sm: 'h-7 px-2 rounded-lg',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const ButtonContent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
ButtonContent.displayName = 'Button';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  className?: string;
}

function Button({ children, className, ...rest }: IButtonProps) {
  return (
    <ButtonContent {...rest} className={`flex items-center gap-1 ${className}`}>
      {children}
    </ButtonContent>
  );
}

export { Button, buttonVariants };
