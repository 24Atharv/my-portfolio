import React from "react"

function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export const Container = ({ children, className }: {
    children: React.ReactNode,
    className?: string;
}) => {
    return <div className={cn(
        "max-w-4xl mx-auto w-full bg-white data:bg-black shadow-xl p-6 md:p10",
        className
    )}
    >
        {children}
    </div>
}

