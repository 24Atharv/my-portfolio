'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
export const Projects = () => {
    const projects = [{
        title: "Macbook",
        src: '/project.webp',
        href: "#",
        description: "A minimal project description for a portfolio should be concise yet informative, focusing on the core elements that demonstrate your thinking and process."
    }, {
        title: "book",
        src: '/project.webp',
        href: "#",
        description: "A minimal project description for a portfolio should be concise yet informative."
    }, {

        title: "Mac",
        src: '/project.webp',
        href: "#",
        description: "The core elements that demonstrate your thinking and process."
    }, {
        title: "Lenvo",
        src: '/project.webp',
        href: "#",
        description: "Core elements that demonstrate your thinking and process."
    }]

    return <div className="py-10">
        <p className="text-secondary text-sm md:text-sm pt-4 max-w-lg">
            I love building web apps and products that can impact millions of lives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-4">
            {projects.map((project, idx) =>
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    transition={{
                        duration: 0.3,
                        delay: idx * 0.2,
                        ease: 'easeInOut',
                    }}
                    key={project.title}
                    className='group'>
                    <Link href={project.href}>
                        <img src={project.src} alt={project.title}
                            className="h-60 w-full rounded-xl object-cover group-hover:scale-[1.02]  transition duration-300" />
                        <h2 className='font-semibold mt-2 text-neutral-500 dark:text-neutral-400'>{project.title}</h2>
                        <p className='text-sm max-w-xs mt-2 text-neutral-500 dark:text-neutral-400'>
                            {project.description}
                        </p>
                    </Link>
                </motion.div>
            )}
        </div>
    </div>
}
