import React, { type JSX } from "react";

const Component = (): JSX.Element | null | string | number | boolean => {
  return null;
  return "This is a React component that returns null.";
  return 42;
  return true;
  return (
    <>
      <h2>React & TypeScript</h2>
      <h2>Return Type</h2>
    </>
  );
};

export default Component;
