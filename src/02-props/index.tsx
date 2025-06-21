import React, { type PropsWithChildren } from "react";
type propsType = PropsWithChildren<{
  name: string;
  id: number;
}>;
const Component = ({ name, id, children }: propsType) => {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Props</h2>
      <h3>Name: {name} </h3>
      <h3>id: {id} </h3>
      {children}
      <hr />
    </div>
  );
};

export default Component;
