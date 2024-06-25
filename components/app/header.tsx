import logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

function NavLink({ to, auth, children }: { to: string, auth?: boolean, children: ReactNode }) {
    const router = useRouter();

    return auth ? (
        <Link href={to} className={`transition duration-200 rounded-full px-4 py-2 font-medium ${router.route === to ? 'bg-primary text-white' : 'hover:text-primary-dark text-gray'}`}>{children}</Link>
    ) : (
        <Link href={to} className={`hover:text-primary-dark text-gray transition duration-200 rounded-full px-4 py-2 font-medium ${router.route === to && 'bg-gray-light'}`}>{children}</Link>
    );
}

export default function Header() {
    return (
        <header className="flex items-stretch gap-8 border-gray-light border-b py-3 px-8">
            <div className="flex items-center pr-9 border-gray-light border-e">
                <Image
                    src={logo}
                    alt="Logo"
                    width={200}
                />
            </div>
            <nav className="flex items-center gap-5 justify-between w-full">
                <div className="flex items-center gap-2">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/map">Map</NavLink>
                </div>
                <div className="flex items-center gap-2">
                    <NavLink auth to="/auth/login">Login</NavLink>
                    <NavLink auth to="/auth/register">Register</NavLink>
                </div>
            </nav>
        </header>
    );
}