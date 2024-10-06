import { useEffect, useState } from "react";

const AnimatedText = ({
  texts = [],
  typingSpeed = 150,
  deletingSpeed = 75,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return; 

    const currentText = texts[index];
    const isComplete = displayedText === currentText;

    let timeoutId;

    if (isDeleting) {
      if (isComplete) {
        timeoutId = setTimeout(() => setIsDeleting(true), 1000); 
      }

      timeoutId = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }, deletingSpeed);
    } else {
      if (!isComplete) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => setIsDeleting(true), 1000);
      }
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, index, texts, typingSpeed, deletingSpeed]);

  return (
    <h1
      className="headding animated_sm
     h-12 transition-opacity duration-300"
    >
      {displayedText}
    </h1>
  );
};

export default AnimatedText;
