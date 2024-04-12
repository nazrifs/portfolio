import React from "react";

export default function Contact({onClose}) {
  return (
    <>
      <div className="main">
        <section className="section full-height contact-section">
          <div className="container">
            <div className="popup-wrapper">
              <h2>Contact Page</h2>
              <button onClick={onClose}>Close</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
