import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
      { title: "Derek M. Visner" },
      { name: "description", content: "Derek M. Visner" },
    ];
  };

export default function About() {
    return (
        <div>
            Hi!  I'm Derek!  Pleased to meet you :)
        </div>
    )
}
