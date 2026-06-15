import React from "react";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
    subtitle: string;
    title: string;
    className?: string;
}

const SectionHeader = ({
    subtitle,
    title,
    className = "",
}: SectionHeaderProps) => {
    return (
        <div className={`text-center mb-8 ${className}`
        }>
            <div className="inline-flex flex-col items-center">
                <div className="inline-flex flex-col items-center mb-4">
                    <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
                        {subtitle}
                    </p>

                    <div className="relative w-full">
                        <div className="relative h-[2px] bg-border overflow-hidden">
                            <span
                                className={`absolute top-0 left-0 w-10 h-[2px] bg-primary ${styles["animate-line-move"]}`}
                            />

                        </div>
                    </div>
                </div>
            </div>

            < h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-tight font-serif font-bold text-foreground" >
                {title}
            </h2>
        </div>
    );
};

export default SectionHeader;