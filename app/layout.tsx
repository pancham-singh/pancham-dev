// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins'
})

export const metadata: Metadata = {
    title: 'Pancham Singh - Full Stack Developer',
    description: '9+ years Full-stack engineer specializing in React, Next.js, Node.js, and AWS',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {children}
        </body>
        </html>
    )
}