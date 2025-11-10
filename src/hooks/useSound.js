// src/hooks/useSound.js
import { useState, useEffect } from 'react';

// Pre-load sounds to avoid delay
const audioCache = {};

export const useSound = (src) => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (!src) return;
    
    // Check if we already loaded this sound
    if (audioCache[src]) {
      setAudio(audioCache[src]);
    } else {
      // Load new sound
      const newAudio = new Audio(src);
      newAudio.volume = 0.4; // Don't make it too loud
      audioCache[src] = newAudio;
      setAudio(newAudio);
    }
  }, [src]);

  // Return a function that can be called to play the sound
  const play = () => {
    if (audio) {
      audio.currentTime = 0; // Rewind to start
      audio.play().catch(e => console.error("SFX play failed:", e));
    }
  };

  return play;
};