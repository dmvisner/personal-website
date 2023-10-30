import { Link } from "@remix-run/react";
import React from "react";

type HeaderLinkProps = {
    text: string;
    href: string;
}

const HeaderLink : React.FC<HeaderLinkProps> = ({ text, href }) => (
    <Link to={href} className="px-16 text-lg">
        {text}
    </Link>
);

export default HeaderLink;