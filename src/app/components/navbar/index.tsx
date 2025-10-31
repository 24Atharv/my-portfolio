'use client'
import Link from "next/link";
import { Container } from "../container"
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

export const Navbar = () => {
    const navItems = [
        {
            title: "About",
            href: '/about'
        },

        {
            title: "Projects",
            href: '/projects'
        },
        {
            title: "Contact",
            href: '/contact'
        },
        {
            title: "Blog",
            href: '/blog'
        },
    ];

    const [hovered, setHovered] = useState<number | null>(null);
    const { scrollY } = useScroll();

    const [scrolled, setScrolled] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    })

    return <Container>
        <motion.nav
            animate={{
                boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
                width: scrolled ? '60%' : "100%",
                y: scrolled ? 10 : 0,
            }}
            transition={{
                duration: 0.3,
                ease: "linear"
            }}
            className="flex z-50 fixed top-0 inset-x-0 max-w-4xl mx-auto items-center justify-between px-3 py-2 rounded-4xl dark:bg-neutral-900">
            <img className="h-10 w-10 rounded-3xl" src="./logo.jpg" height="100" width="100" alt="Avatar" />

            <div className="flex items-center">
                {navItems.map((item, idx) => (
                    <Link
                        className="relative px-2 py-1 text-sm overflow-hidden"
                        href={item.href}
                        key={idx}
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {hovered === idx && (
                            <motion.span
                                layoutId="hovered-span"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute inset-0 h-full w-full rounded-md  bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md border border-neutral-200/20"
                            />
                        )}
                        <span className="relative z-10">{item.title}</span>
                    </Link>
                ))}
            </div>
        </motion.nav>
    </Container>
} 
