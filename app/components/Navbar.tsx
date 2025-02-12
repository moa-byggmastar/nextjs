import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/form">Form</Link></li>
                <li><Link href="/gissatalet">Guess Number</Link></li>
            </ul>
        </div>
    )
}
