import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Derek's Golf Journey" },
        { name: "description", content: "Derek's Golf Journey" },
    ];
};

export default function Golf() {
    return (
        <div>
            I golf regularly.  I will track my scores here.
        </div>
    )
}