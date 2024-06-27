import * as React from 'react';

import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'flex w-full rounded-lg font-medium shadow-md shadow-gray-light/70 border-2 border-gray-light px-3 py-2 text-md text-primary-dark file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-dark outline-none focus-visible:border-gray-dark disabled:cursor-not-allowed disabled:opacity-50', className
                )}
                ref={ref}
                autoComplete='off'
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';

export { Input };
