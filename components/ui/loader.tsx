import { LoaderCircle } from 'lucide-react';

export const Loader = ({ size }: { size: string }) => {
    return (
        <LoaderCircle className="animate-spin" size={size} />
    );
};
