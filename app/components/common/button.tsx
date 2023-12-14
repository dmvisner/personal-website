import React from "react";

import WithClassName from "~/types/props/with-classname";

type ButtonProps = React.PropsWithChildren & WithClassName

const Button : React.FC<ButtonProps> = ({ children, className }) => {
    return (
        <button className={className}>
            { children }
        </button>
    );
};

export default Button;