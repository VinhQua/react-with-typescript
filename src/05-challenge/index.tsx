import React from "react";
type BasicUser = {
  type: "basic";
  name: string;
};
type AdvancedUser = {
  type: "advanced";
  name: string;
  email: string;
};
type User = BasicUser | AdvancedUser;

const index = (props: User) => {
  const { type, name } = props;
  let email: string = "";
  if (type === "advanced") {
    email = props.email;
  }
  return (
    <div className="flex items-center gap-3 mt-px border rounded-lg shadow-sm bg-base-100">
      <div className="avatar">
        <div className="mask mask-squircle h-12 w-12">
          <img
            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div>
        <div className="font-bold">{name}</div>
        {email && <div className="text-sm opacity-50">{email}</div>}
      </div>
    </div>
  );
};

export default index;
