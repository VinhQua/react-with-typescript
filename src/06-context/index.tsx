import React, { use } from "react";
import { ThemeContextProvider, useThemeContext, type Theme } from "./Context";

const ParentComponent = () => {
  return (
    <ThemeContextProvider>
      <Component />
    </ThemeContextProvider>
  );
};
const Component = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <div
      data-theme={theme}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div className="grid place-items-center gap-4">
        <h2 className="font-bold text-lg text-success">TypeScript Basics</h2>
        <h2 className="font-bold text-lg text-warning">React Context API</h2>
        <h3 className="font-bold text-lg text-primary">Theming with Context</h3>
        <h3 className="font-bold text-lg text-secondary">
          Using Context in React
        </h3>
        <select
          defaultValue="Pick a color"
          className="select"
          onChange={(e) => setTheme(e.target.value as Theme)}
        >
          <option disabled={true}>Select Theme</option>
          {["light", "dark", "cupcake", "aqua", "winter"].map((theme) => (
            <option key={theme} value={theme}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ParentComponent;
