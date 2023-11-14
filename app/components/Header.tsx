import React from "react";
import { Link } from "@remix-run/react";
import { useFetcher } from "@remix-run/react";

import Button from "./common/button";

type HeaderProps = {
    title: string;
    isDarkMode: boolean;
}

const LightDarkModeButton : React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const fetcher = useFetcher();
    return (
        <fetcher.Form method="post">
            <Button className="rounded-full p-2 border-solid border-2 transition-colors duration-500 border-orange-200 hover:border-orange-500">
                {
                    !isDarkMode 
                        ? 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 stroke-black dark:stroke-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 stroke-black dark:stroke-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                      
                }
            </Button>
        </fetcher.Form>
    )
}

type HeaderLinkProps = {
    text: string;
    href: string;
}

const HeaderLink : React.FC<HeaderLinkProps> = ({ text, href }) => (
    <Link to={href} className="px-16 text-lg font-bold">
        {text}
    </Link>
);

const Header : React.FC<HeaderProps> = ({ title, isDarkMode }) => {
    return (
        <header className="w-screen flex justify-center">
            <nav className="py-12 w-7/12 flex justify-between">
                <div className="flex justify-center align-middle">
                    <Link to="/">
                        <h1 className="font-light tracking-wide text-3xl">{title}</h1>
                    </Link>
                </div>
                <ul className="flex p-3">
                    <li>
                        <HeaderLink href="/about" text="About"/>
                    </li>
                    <li>
                        <HeaderLink href="/work-history" text="Work History"/>
                    </li>
                    <li>
                        <HeaderLink href="/golf" text="Golf"/>
                    </li>
                    <li>
                        <HeaderLink href="/trading" text="Trading"/>
                    </li>
                </ul>
                <div>
                    <LightDarkModeButton isDarkMode={isDarkMode}/>
                </div>
            </nav>
        </header>
    );
}

export default Header;