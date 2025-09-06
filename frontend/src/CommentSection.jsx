import React, { useState } from "react";
import "./CommentSection.css";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setComments([
      { ...form, date: new Date() },
      ...comments,
    ]);

    setForm({ name: "", email: "", message: "" }); // reset form
  };

  return (
    <section id="comments" className="comment-section">
      <h2 className="comment-title">💬 Leave a Comment</h2>

      {/* Form */}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="comment-input"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="comment-input"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message..."
          className="comment-input"
          rows="4"
          required
        />

        <button type="submit" className="comment-btn">
          Post Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="comment-list">
        {comments.length === 0 ? (
          <p className="no-comments">No comments yet.</p>
        ) : (
          comments.map((c, i) => (
            <div key={i} className="comment-card">
              <p className="comment-header">
                <strong>{c.name}</strong> ({c.email})
              </p>
              <p className="comment-text">{c.message}</p>
              <span className="comment-date">
                {c.date.toLocaleString()}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
