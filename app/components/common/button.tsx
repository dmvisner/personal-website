import React from "react";

import WithChildren from "~/types/props/WithChildren";
import WithClassName from "~/types/props/WithClassName";

type ButtonProps = WithChildren & WithClassName

const Button : React.FC<ButtonProps> = ({ children, className }) => {
    return (
        <button className={className}>
            { children }
        </button>
    );
};

export default Button;