import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Derek's Trading" },
        { name: "description", content: "Derek's Trading" },
    ];
};

export default function Trading() {
    return (
        <div>
            Trading
        </div>
    )
}