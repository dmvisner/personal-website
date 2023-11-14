import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
      { title: "Derek's Work History" },
      { name: "description", content: "Derek's Work History" },
    ];
  };

export default function WorkHistory() {
    return (
        <div>
            Here's my work history.
        </div>
    )
}