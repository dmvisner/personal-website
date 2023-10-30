import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Derek M. Visner" },
    { name: "description", content: "Derek M. Visner" },
  ];
};

export default function Index() {
  return (
    <div>
      Home screen
    </div>
  );
}
