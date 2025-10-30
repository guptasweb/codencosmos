import { useCallback, useRef, useState } from 'react';

export const useSound = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playBeep = useCallback((frequency: number = 800, duration: number = 100) => {
    if (isMuted) return;
    
    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration / 1000);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration / 1000);
    } catch (error) {
      console.error('Audio error:', error);
    }
  }, [isMuted, getAudioContext]);

  const playKeyPress = useCallback(() => {
    if (isMuted) return;
    
    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      // Simple keyboard click
      oscillator.frequency.value = 1000;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.04);
    } catch (error) {
      console.error('Audio error:', error);
    }
  }, [isMuted, getAudioContext]);

  const playEnterKey = useCallback(() => {
    if (isMuted) return;
    
    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      // Slightly lower for Enter key
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.06);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.06);
    } catch (error) {
      console.error('Audio error:', error);
    }
  }, [isMuted, getAudioContext]);

  const playClick = useCallback(() => {
    playBeep(1200, 50);
  }, [playBeep]);

  const playHover = useCallback(() => {
    playBeep(600, 30);
  }, [playBeep]);

  const playSuccess = useCallback(() => {
    if (isMuted) return;
    
    try {
      const ctx = getAudioContext();
      const frequencies = [800, 1000, 1200];
      
      frequencies.forEach((freq, index) => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.value = freq;
        oscillator.type = 'sine';

        const startTime = ctx.currentTime + (index * 0.1);
        gainNode.gain.setValueAtTime(0.2, startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.15);

        oscillator.start(startTime);
        oscillator.stop(startTime + 0.15);
      });
    } catch (error) {
      console.error('Audio error:', error);
    }
  }, [isMuted, getAudioContext]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  return {
    isMuted,
    toggleMute,
    playClick,
    playHover,
    playSuccess,
    playBeep,
    playKeyPress,
    playEnterKey,
  };
};

