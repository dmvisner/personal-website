import type { 
  LinksFunction,
  LoaderFunctionArgs,
  ActionFunctionArgs,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import "./tailwind.css";
import favicon from "./favicon.ico";
import { setTheme, getTheme } from "./cookies/theme-cookie.server";
import Header from "./components/header";

export const links: LinksFunction = () => [
  { rel: "icon", href: favicon }
];

export async function loader({
  request,
}: LoaderFunctionArgs) {
  return await getTheme(request);
}

export async function action({
  request
} : ActionFunctionArgs) {
  return await setTheme(request);;
}

export default function App() {
  const { isDarkMode } = useLoaderData<typeof loader>();
  return (
    <html lang="en" className={isDarkMode === true? "dark" : ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="w-screen bg-white transition duration-1000 ease-in-out dark:bg-sky-950 dark:text-white">
        <Header isDarkMode={isDarkMode} title="Derek M. Visner"/>
        <div className="flex justify-center pt-10 w-screen">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
