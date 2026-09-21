import { useState } from "react";
import "../styles/PersonalInfo.css";

function PersonalInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <section className="personal-info">
        <h2>Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }

  return (
    <section className="personal-info">
      <h2>{formData.name}</h2>
      <p>{formData.email}</p>
      <p>{formData.phone}</p>
      <button onClick={handleEdit}>Edit</button>
    </section>
  );
}

export default PersonalInfo;
