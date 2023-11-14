import { 
    createCookie,
    json,
} from "@remix-run/node"

const theme = createCookie("theme");

export async function getTheme(request: Request) {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await theme.parse(cookieHeader);
    return json({ isDarkMode: cookie?.isDarkMode || false });
}

export async function setTheme(request: Request) {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = (await theme.parse(cookieHeader)) || {};
    const isDarkMode = cookie?.isDarkMode || false;  
    cookie.isDarkMode = !isDarkMode;
  
    return json(isDarkMode, {
        headers: {
            "Set-Cookie": await theme.serialize(cookie)
        }
    })
}