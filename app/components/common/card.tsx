import React, { PropsWithChildren } from "react"

import WithClassName from "~/types/props/with-classname";


type CardProps = PropsWithChildren & WithClassName;

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={"transition-colors duration-1000 ease-in-out text-black bg-gray-100 dark:bg-gray-600 dark:text-white rounded px-8 py-12 " + (className || "")}>
            {children}
        </div>
    )
}

export default Card;