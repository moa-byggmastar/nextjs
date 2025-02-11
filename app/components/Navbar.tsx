import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
