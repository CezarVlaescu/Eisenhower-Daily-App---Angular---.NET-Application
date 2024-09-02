const mottos = [
    "Believe in yourself and all that you are.",
    "Every day is a second chance.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Dream big, work hard, stay focused, and surround yourself with good people.",
    "Your only limit is your mind.",
    "Embrace the glorious mess that you are.",
    "Stay positive, work hard, make it happen.",
    "Do something today that your future self will thank you for.",
    "Difficult roads often lead to beautiful destinations.",
    "You are capable of amazing things.",
    "Start where you are. Use what you have. Do what you can.",
    "The only way to do great work is to love what you do.",
    "You miss 100% of the shots you don’t take.",
    "Never stop learning because life never stops teaching.",
    "Success is the sum of small efforts, repeated day in and day out."
];

export function getRandomMotto() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    return mottos[dayOfYear % mottos.length];
}
