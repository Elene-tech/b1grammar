let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  try {
    if (!ctx) ctx = new AudioContext();
    return ctx;
  } catch {
    return null;
  }
}

function beep(freq: number, start: number, dur: number, type: OscillatorType = 'sine') {
  const c = getCtx();
  if (!c) return;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, c.currentTime + start);
  gain.gain.exponentialRampToValueAtTime(0.12, c.currentTime + start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + start + dur);
  osc.connect(gain).connect(c.destination);
  osc.start(c.currentTime + start);
  osc.stop(c.currentTime + start + dur + 0.05);
}

export function playCorrect() {
  beep(523, 0, 0.12); // C5
  beep(784, 0.09, 0.18); // G5
}

export function playWrong() {
  beep(220, 0, 0.15, 'triangle');
  beep(180, 0.12, 0.2, 'triangle');
}

export function playWin() {
  beep(523, 0, 0.12);
  beep(659, 0.1, 0.12);
  beep(784, 0.2, 0.12);
  beep(1047, 0.3, 0.3);
}
