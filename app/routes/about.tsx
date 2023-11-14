import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
      { title: "About Derek" },
      { name: "description", content: "About Derek" },
    ];
  };

export default function About() {
    return (
        <div>
            Hi!  I'm Derek!  Pleased to meet you :)
        </div>
    )
}
