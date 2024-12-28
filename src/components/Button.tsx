import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'group flex items-center justify-center rounded-md',
    {
        variants: {
            variant: {
                default: 'bg-primary  active:opacity-90',
                destructive: 'bg-destructive  active:opacity-90',
                outline:
                    'border border-input bg-background ',
                secondary: 'bg-secondary  active:opacity-80',
            },
            size: {
                default: 'h-10 px-4 py-2 native:h-12 native:px-5 native:py-3',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8 native:h-14',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);



type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
    VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
    ({ className, variant, size, children, ...props }, ref) => {
        return (

            <Pressable
                className={cn(
                    props.disabled && 'opacity-50 web:pointer-events-none',
                    buttonVariants({ variant, size, className })
                )}
                ref={ref}
                {...props}
            >
                {children}
            </Pressable>

        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };