import React, { useMemo, useState } from "react";

import webDevelop from "../assets/webDevelop.jpeg";
import datasciencewithpython1 from "../assets/datasciencewithpython1.jpeg";
import aws1 from "../assets/aws1.png";
import ui from "../assets/ui.png";
import devops from "../assets/devops.jpeg";
import mechinelearning from "../assets/mechinelearning.jpeg";
import dotnot from "../assets/dotnot.jpeg";

const COURSES = [
  { id: 1, title: "Full-Stack Web Development", provider: "Bootcamp", duration: "6 months", price: "₹4999", level: "Beginner", desc: "Learn to build modern web applications using popular frameworks.", image: webDevelop },
  { id: 2, title: "Data Science with Python", provider: "Professional Certificate", duration: "4 months", price: "₹3999", level: "Intermediate", desc: "Master data analysis, visualization, and ML with Python.", image: datasciencewithpython1 },
  { id: 3, title: "AWS Cloud Architect", provider: "Certification", duration: "3 months", price: "₹2999", level: "Advanced", desc: "Design and deploy scalable cloud solutions on AWS.", image: aws1 },
  { id: 4, title: "UI/UX Design Essentials", provider: "Short Course", duration: "6 weeks", price: "₹999", level: "Beginner", desc: "Understand the principles of UI and UX design.", image: ui },
  { id: 5, title: "DevOps & CI/CD", provider: "Bootcamp", duration: "12 weeks", price: "₹3499", level: "Intermediate", desc: "Automate software delivery with DevOps practices.", image: devops },
  { id: 6, title: "Machine Learning A-Z", provider: "Professional Certificate", duration: "5 months", price: "₹4499", level: "Advanced", desc: "Comprehensive ML concepts and hands-on projects.", image: mechinelearning },
  { id: 7, title: "Dot Net Development", provider: "Professional Certificate", duration: "3 months", price: "₹5499", level: "Advanced", desc: "Develop robust apps using Microsoft .NET.", image: dotnot },
];

const CourseList = ({ searchQuery = "" }) => {
  const [hovered, setHovered] = useState(null);
  const q = (searchQuery || "").trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return COURSES;
    return COURSES.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.provider.toLowerCase().includes(q) ||
        c.level.toLowerCase().includes(q)
    );
  }, [q]);

  return (
    <>
      <div className="course-header">
        <h2>Popular Courses</h2>
        <span className="result-count">{filtered.length} results</span>
      </div>

      <div className="course-grid">
        {filtered.map((c) => (
          <article
            key={c.id}
            className={`course-card ${hovered === c.id ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(c.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="card-content">
              <div className="card-body">
                <h3 className="card-title">{c.title}</h3>
                <div className="meta">
                  {c.provider} • {c.duration} • {c.level}
                </div>

                {hovered === c.id && <div className="desc">{c.desc}</div>}

                <div className="card-footer">
                  <strong className="price">{c.price}</strong>
                  <button
                    className="enroll"
                    onClick={() => alert(`Enroll demo: ${c.title}`)}
                  >
                    Enroll
                  </button>
                </div>
              </div>

              <div className="image-container">
                <img src={c.image} alt={c.title} className="course-image" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ✅ CSS — in same file */}
      <style>{`
        .course-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .result-count {
          color: #6b7280;
        }

        .course-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .course-card {
          padding: 22px;
          border: 1px solid #e6eef7;
          border-radius: 14px;
          background: #ddecff;
          min-height: 280px;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          overflow: hidden;
        }

        .course-card.hovered {
          transform: translateY(-8px);
          box-shadow: 0 10px 24px rgba(37, 99, 235, 0.18);
          z-index: 2;
        }

        .card-content {
          display: flex;
          gap: 16px;
        }

        .card-body {
          display: flex;
          flex-direction: column;
          gap: 10px;    /* ✅ prevents full-stretch */
          flex: 1;
        }

        .card-title {
          font-size: 18px;
          margin: 0;
          font-weight: 600;
          color: #000;
        }

        .meta {
          font-size: 14px;
          color: #333;
        }

        .desc {
          font-size: 13px;
          color: #222;
          line-height: 1.4;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          font-size: 15px;
          font-weight: 700;
        }

        .enroll {
          padding: 10px 14px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          transition: 0.2s;
        }

        .enroll:hover {
          transform: scale(1.05);
          background: #1d4ed8;
        }

        .image-container {
          flex: 1;
          min-width: 120px;
          max-width: 180px;
        }

        .course-image {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          object-fit: cover;
          transition: transform 0.28s ease;
        }

        .course-card.hovered .course-image {
          transform: scale(1.05);
        }

        /* ✅ Medium screens (2 cards) */
        @media (max-width: 1024px) {
          .course-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .card-content {
            flex-direction: column;
            gap: 12px;
          }
          .image-container {
            width: 100%;
            height: 160px;
          }
        }

        /* ✅ Mobile (1 card) */
        @media (max-width: 640px) {
          .course-grid {
            grid-template-columns: 1fr;
          }
          .course-card {
            min-height: auto;
          }
          .card-content {
            flex-direction: column;
          }
          .card-body {
            gap: 8px;
          }
          .card-title {
            font-size: 16px;
          }
          .meta {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default CourseList;
