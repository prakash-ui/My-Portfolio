import { useEffect, useState } from 'react';

export default function Typewriter({ texts, speed = 150 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const currentText = texts[loopNum % texts.length];
    const delta = isDeleting ? speed / 2 : speed;

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setCurrentIndex(0);
    } else {
      const timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentIndex + (isDeleting ? -1 : 1)));
        setCurrentIndex(currentIndex + (isDeleting ? -1 : 1));
      }, delta);

      return () => clearTimeout(timer);
    }
  }, [displayText, currentIndex, isDeleting, loopNum, texts, speed]);

  return <span className="text-indigo-600 dark:text-indigo-400">{displayText}</span>;
}