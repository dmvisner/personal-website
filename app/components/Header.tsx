import React from "react";
import { Link } from "@remix-run/react";
import HeaderLink from "./HeaderLink";

type HeaderProps = {
    title: string;
}

const Header : React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="w-screen flex justify-center">
            <nav className="py-12 w-7/12 flex">
                <div className="flex justify-center align-middle">
                    <Link to="/">
                        <h1 className="font-light tracking-wide text-3xl">{title}</h1>
                    </Link>
                </div>
                <ul className="flex">
                    <li>
                        <HeaderLink href="/about" text="About"/>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;