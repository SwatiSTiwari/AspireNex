"use client";

export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const ButtonLink = ({ className, buttonText, elementId }) => {
  return (
    <button className={className} onClick={() => scrollToElement(elementId)}>
      {buttonText}
    </button>
  );
}

export  {ButtonLink};