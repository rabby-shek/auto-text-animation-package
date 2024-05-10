
import React, { useState, useEffect } from 'react';

function TextEffectAnimation({ words, intervalTime = 100, duration = null, loop = false, cursor = false }) {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;

    const typeWords = () => {
      const word = words[index];
      let currentIndex = 0;
      let typedText = '';

      const typeCharacters = () => {
        if (currentIndex < word.length) {
          typedText += word[currentIndex];
          setDisplayedText(typedText);
          currentIndex++;
          timeout = setTimeout(typeCharacters, intervalTime);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText('');
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
          }, duration || 2000); // Default 2 seconds between words
        }
      };

      typeCharacters();
    };

    typeWords();

    return () => clearTimeout(timeout);
  }, [words, index, intervalTime, duration, loop]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayedText}
      {cursor && showCursor && <span>|</span>}
    </span>
  );
}

export default TextEffectAnimation;
