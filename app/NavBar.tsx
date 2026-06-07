'use client'; 
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
    const currentPath = usePathname();
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
            <AiFillBug />
        </Link>
        <ul className="flex space-x-6">
            <li><Link className="hover:underline" href="/">Dashboard</Link></li>
            <li><Link className="hover:underline" href="/issues">Issues</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar;