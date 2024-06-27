import { cn } from '@/lib/utils';

export const Loader = ({ className = '', size = '30', width = '6' }: { className?: string; size?: string; width?: string }) => {
    return (
        <div className="inline-flex items-center">
            <svg className={cn('animate-loader-circular-rotate', className)} fill="none" stroke="currentColor" style={{ height: `${size}px`, width: `${size}px` }} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className="loader-circular-shape" cx="33" cy="33" r="20" strokeWidth={width} strokeMiterlimit="10" />
            </svg>
        </div>
    );
};
