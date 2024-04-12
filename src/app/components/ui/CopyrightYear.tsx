import React from "react";

export default function CopyrightYear() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright">
      © <span>{currentYear}</span>
    </div>
  );
}
