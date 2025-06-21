import React from "react";
type Link = {
  id: number;
  url: string;
  text: string;
};
const navLinks: Link[] = [
  { id: 1, url: "https://reactjs.org", text: "React" },
  { id: 2, url: "https://typescriptlang.org", text: "TypeScript" },
  { id: 3, url: "https://reactrouter.com", text: "React Router" },
];
const Component = () => {
  const [text, setText] = React.useState<string>("Hello, World!");
  const [number, setNumber] = React.useState<number>(0);
  const [links, setLinks] = React.useState<Link[]>(navLinks);
  return (
    <div>
      <h1>React & TypeScript</h1>
      <h2>State</h2>
      <button
        type="button"
        className="btn btn-primary btn-center"
        onClick={() => {
          setText("Hello, TypeScript!");
          setNumber((prev) => prev + 1);
          setLinks([
            ...navLinks,
            { id: 4, url: "https://vitejs.dev", text: "Vite" },
          ]);
        }}
      >
        Click me
      </button>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <div key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {text}{" "}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Component;
