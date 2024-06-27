import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

function LoadingMap() {
    return (
        <Skeleton className="w-full h-full rounded-md" />
    );
}

const Map = dynamic(async () => import('@/components/app/map'), {
    ssr: false,
    loading: () => <LoadingMap />
});

export default function Dashboard() {
    return (
        <div className="relative h-[50vh] w-[50vw]">
            <Map />
        </div>
    );
}
