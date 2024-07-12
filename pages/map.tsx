import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from '@/components/ui/resizable';

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
        <div className="relative h-full w-full">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={5}>One</ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel><Map /></ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}
