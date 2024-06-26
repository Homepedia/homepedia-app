import Separator from '@/components/ui/separator';
import type { ReactNode } from 'react';

export default function AuthLayout({ title, children }: Readonly<{ title: string; children: ReactNode }>) {
    return (
        <div className="flex justify-center py-28">
            <div className="w-[300px] sm:w-[500px] flex flex-col gap-4 items-center rounded-2xl shadow-md shadow-gray-light border-2 border-gray-light py-7 px-9">
                <h1 className="text-2xl font-semibold">{ title }</h1>
                <Separator />
                <div className="w-full">{children}</div>
            </div>
        </div>
    );
}
