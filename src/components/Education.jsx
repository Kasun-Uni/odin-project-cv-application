import { useState } from "react";
import "../styles/Education.css";

function EducationEntry({ entry, onSave, onRemove }) {
  const [formData, setFormData] = useState(entry.data);
  const [isEditing, setIsEditing] = useState(!entry.data.school);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(entry.id, formData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <div className="education-entry">
        <form onSubmit={handleSubmit}>
          <label>
            School Name
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Title of Study
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Date of Study
            <input
              type="text"
              name="date"
              placeholder="e.g. 2020 - 2024"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>

          <div className="entry-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={() => onRemove(entry.id)}>
              Remove
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="education-entry">
      <h3>{formData.school}</h3>
      <p>{formData.title}</p>
      <p>{formData.date}</p>
      <div className="entry-buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => onRemove(entry.id)}>Remove</button>
      </div>
    </div>
  );
}

function Education() {
  const [entries, setEntries] = useState([
    { id: crypto.randomUUID(), data: { school: "", title: "", date: "" } },
  ]);

  const handleSave = (id, newData) => {
    setEntries((prev) =>
      prev.map((entry) => (entry.id === id ? { ...entry, data: newData } : entry))
    );
  };

  const handleRemove = (id) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  const handleAdd = () => {
    setEntries((prev) => [
      ...prev,
      { id: crypto.randomUUID(), data: { school: "", title: "", date: "" } },
    ]);
  };

  return (
    <section className="education">
      <h2>Education</h2>
      {entries.map((entry) => (
        <EducationEntry
          key={entry.id}
          entry={entry}
          onSave={handleSave}
          onRemove={handleRemove}
        />
      ))}
      <button className="add-btn" onClick={handleAdd}>
        + Add Education
      </button>
    </section>
  );
}

export default Education;
