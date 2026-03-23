import { useState, useEffect } from "react";

const phrases = [
  "Marketing and Sales",
  "Product and Marketing",
  "Sales and Product",
];

const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`text-gradient inline-block pb-2 transition-all duration-400 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2"
      }`}
    >
      {phrases[currentIndex]}
    </span>
  );
};

export default RotatingText;
