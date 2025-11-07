import React from "react";

const Resources = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📘 Learning Resources</h2>
      <p style={styles.text}>
        Explore tutorials, documentation, and projects to improve your skills.
      </p>
      <ul style={styles.list}>
        <li>✨ Java Basics and OOPs Concepts</li>
        <li>⚙️ React Component Architecture</li>
        <li>🗄️ Spring Boot REST API Guide</li>
        <li>💾 Database Management System Notes</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "left",
  },
  heading: { fontSize: "26px", color: "#2563EB", marginBottom: "20px" },
  text: { color: "#374151", marginBottom: "16px", fontSize: "16px" },
  list: { lineHeight: "1.8", fontSize: "16px", color: "#4B5563" },
};

export default Resources;
