import React from "react";

const Component = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(formData.get("text") as string); // Accessing the text input value
    const person = {
      name: data.text as string,
      email: data.email as string,
    };
  };

  return (
    <section>
      <h2>Event Examples</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="text"
          className="form-input"
        />
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          className="form-input"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </section>
  );
};

export default Component;
