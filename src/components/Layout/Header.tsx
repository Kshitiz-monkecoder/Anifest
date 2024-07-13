import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center">
                <Image src="/path/to/logo.png" alt="Logo" width={40} height={40} className="h-10" />
                <span className="ml-3 text-xl font-bold">AniFest</span>
            </div>
            <nav className="hidden md:flex space-x-6">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/events">Events</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </nav>
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 text-gray-900 rounded-md"
                />
                <button className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                    Search
                </button>
            </div>
        </header>
    );
}

// Custom NavLink component to wrap Link and handle active states
interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    return (
        <Link href={href}>
            {children}
        </Link>
    );
};

export default Header;
