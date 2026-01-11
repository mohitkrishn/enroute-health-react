import Lenis from 'lenis';

export const lenis = new Lenis({
    duration: 1.6,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    smoothTouch: false,
});