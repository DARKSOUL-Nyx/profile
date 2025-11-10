// src/components/MusicPlayer/MusicPlayer.js
import React, { useState, useEffect, useRef } from 'react';
import { FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6';
import './MusicPlayer.css';

const MusicPlayer = ({ src }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(new Audio(src)); // Create the Audio object

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0; // Start at 0 volume

    // Play the audio (this is allowed because it happens after the 'Enter' click)
    audio.play().catch(e => console.error("Audio play failed:", e));

    // --- FADE IN LOGIC ---
    let currentVolume = 0;
    const fadeInterval = setInterval(() => {
      currentVolume += 0.05;
      if (currentVolume >= 0.5) { // Fade in to 50% volume
        currentVolume = 0.5;
        clearInterval(fadeInterval);
      }
      audio.volume = currentVolume;
    }, 200); // Increase volume every 200ms

    // Cleanup function
    return () => {
      audio.pause();
      clearInterval(fadeInterval);
    };
  }, [src]);

  // Mute/Unmute Logic
  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <button className="music-toggle-button" onClick={toggleMute}>
      {isMuted ? <FaVolumeXmark /> : <FaVolumeHigh />}
    </button>
  );
};

export default MusicPlayer;