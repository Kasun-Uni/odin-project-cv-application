import { useState } from "react";
import "../styles/Experience.css";

function ExperienceEntry({ entry, onSave, onRemove }) {
  const [formData, setFormData] = useState(entry.data);
  const [isEditing, setIsEditing] = useState(!entry.data.company);

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
      <div className="experience-entry">
        <form onSubmit={handleSubmit}>
          <label>
            Company Name
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Position Title
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Main Responsibilities
            <textarea
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              rows="3"
              required
            />
          </label>

          <div className="date-row">
            <label>
              Date From
              <input
                type="text"
                name="dateFrom"
                placeholder="e.g. Jan 2020"
                value={formData.dateFrom}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Date Until
              <input
                type="text"
                name="dateUntil"
                placeholder="e.g. Present"
                value={formData.dateUntil}
                onChange={handleChange}
                required
              />
            </label>
          </div>

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
    <div className="experience-entry">
      <h3>{formData.position} — {formData.company}</h3>
      <p className="date-range">{formData.dateFrom} to {formData.dateUntil}</p>
      <p>{formData.responsibilities}</p>
      <div className="entry-buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => onRemove(entry.id)}>Remove</button>
      </div>
    </div>
  );
}

function Experience() {
  const [entries, setEntries] = useState([
    {
      id: crypto.randomUUID(),
      data: {
        company: "",
        position: "",
        responsibilities: "",
        dateFrom: "",
        dateUntil: "",
      },
    },
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
      {
        id: crypto.randomUUID(),
        data: {
          company: "",
          position: "",
          responsibilities: "",
          dateFrom: "",
          dateUntil: "",
        },
      },
    ]);
  };

  return (
    <section className="experience">
      <h2>Experience</h2>
      {entries.map((entry) => (
        <ExperienceEntry
          key={entry.id}
          entry={entry}
          onSave={handleSave}
          onRemove={handleRemove}
        />
      ))}
      <button className="add-btn" onClick={handleAdd}>
        + Add Experience
      </button>
    </section>
  );
}

export default Experience;
