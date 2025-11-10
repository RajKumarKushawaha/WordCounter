import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0">
        <div className="card-body">
          <h2 className="card-title text-center mb-4 text-primary">
            About Word Counter
          </h2>

          <p className="card-text">
            <strong>Word Counter</strong> is a simple yet powerful React web
            application that allows users to analyze and format their text in
            real-time. Whether you’re writing an article, essay, or email, this
            tool helps you track your writing statistics easily.
          </p>

          <p className="card-text">
            The app is built using <strong>React Hooks</strong> like{" "}
            <code>useState</code> for managing state and{" "}
            <strong>Bootstrap</strong> for styling, ensuring a responsive and
            user-friendly experience across all devices.
          </p>

          <h4 className="mt-4 text-success">✨ Key Features</h4>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">🔠 Convert text to Uppercase and Lowercase</li>
            <li className="list-group-item">🧹 Clear text instantly</li>
            <li className="list-group-item">🧾 Count Words and Characters</li>
            <li className="list-group-item">⏱️ Estimate Reading Time</li>
            <li className="list-group-item">🎨 Responsive UI using Bootstrap</li>
          </ul>

          <p className="card-text">
            This project is designed to help beginners understand React
            fundamentals like <strong>component-based architecture</strong>,
            <strong>props</strong>, and <strong>state management</strong> while
            creating something practical and interactive.
          </p>

          <div className="text-center mt-4">
            <button className="btn btn-primary">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
