window.addEventListener('load', () => {
  // Wait a short amount of time (e.g., 0 milliseconds) to ensure page is fully rendered
  setTimeout(() => {
    window.scrollTo({
      left: 1782,
      top: 1935,
      behavior: 'smooth',
    });
  }, 0);
});


const buttons = {
  abtme: document.getElementById('abtme-button'),
  s1: document.getElementById('s1-button'),
  s2: document.getElementById('s2-button'),
  s3: document.getElementById('s3-button'),
  s4: document.getElementById('s4-button'),

  s1p1: document.getElementById('s1-1-button'),
  s1p2: document.getElementById('s1-2-button'),
  s1p3: document.getElementById('s1-3-button'),
  s1p4: document.getElementById('s1-4-button'),
  s1p5: document.getElementById('s1-5-button'),

  s2p1: document.getElementById('s2-1-button'),
  s2p2: document.getElementById('s2-2-button'),
  s2p3: document.getElementById('s2-3-button'),
  s2p4: document.getElementById('s2-4-button'),
  s2p5: document.getElementById('s2-5-button'),

  s3p1: document.getElementById('s3-1-button'),
  s3p2: document.getElementById('s3-2-button'),
  s3p3: document.getElementById('s3-3-button'),
  s3p4: document.getElementById('s3-4-button'),
  s3p5: document.getElementById('s3-5-button'),
};

let activeButton = 'abtme'; // Start with the center button

document.addEventListener('keydown', (event) => {
  const navigationMap = {
    abtme: { ArrowUp: 's1', ArrowDown: 's4', ArrowLeft: 's2', ArrowRight: 's3' },
    s1: { ArrowUp: 's1p3', ArrowDown: 'abtme', ArrowLeft: 's2', ArrowRight: 's3' },
    s2: { ArrowUp: 's1', ArrowDown: 's4', ArrowLeft: 's2p3', ArrowRight: 'abtme' },
    s3: { ArrowUp: 's1', ArrowDown: 's4', ArrowLeft: 'abtme', ArrowRight: 's3p3' },
    s4: { ArrowUp: 'abtme', ArrowLeft: 's2', ArrowRight: 's3' },

    s1p1: {ArrowDown: 's1p3', ArrowRight: 's1p2' },
    s1p2: {ArrowDown: 's1p3', ArrowLeft: 's1p1' },
    s1p3: {ArrowUp: 's1p1', ArrowDown: 's1p5', ArrowLeft: 's1p4', ArrowRight: 's1p2' },
    s1p4: {ArrowUp: 's1p3', ArrowDown: 's1', ArrowRight: 's1p5' },
    s1p5: {ArrowUp: 's1p3', ArrowDown: 's1', ArrowLeft: 's1p4' },

    s2p1: {ArrowRight: 's2p3', ArrowUp: 's2p2' },
    s2p2: {ArrowLeft: 's2p3', ArrowDown: 's2p1' },
    s2p3: {ArrowLeft: 's2p1', ArrowRight: 's2p5', ArrowDown: 's2p4', ArrowUp: 's2p2' },
    s2p4: {ArrowLeft: 's2p3', ArrowRight: 's2', ArrowUp: 's2p5' },
    s2p5: {ArrowLeft: 's2p3', ArrowRight: 's2', ArrowDown: 's2p4' },

    s3p1: {ArrowLeft: 's3', ArrowRight: 's3p3', ArrowUp: 's3p2' },
    s3p2: {ArrowLeft: 's3', ArrowRight: 's3p3', ArrowDown: 's3p1' },
    s3p3: {ArrowLeft: 's3p1', ArrowRight: 's3p5', ArrowDown: 's3p4', ArrowUp: 's3p2' },
    s3p4: {ArrowLeft: 's3p3', ArrowUp: 's3p5' },
    s3p5: {ArrowLeft: 's3p3', ArrowDown: 's3p4' }

  };
  const nextButton = navigationMap[activeButton]?.[event.key];
  console.log(event.key, nextButton)
  if (nextButton) {
    event.preventDefault();
    // Update the active button
    activeButton = nextButton;

    // Scroll to the center of the button
    scrollToButton(buttons[nextButton]);
  }
});

function scrollToButton(button) {
  const rect = button.getBoundingClientRect();
  const scrollX = rect.left + window.scrollX + rect.width / 2 - window.innerWidth / 2;
  const scrollY = rect.top + window.scrollY + rect.height / 2 - window.innerHeight / 2;
  console.log(scrollX, scrollY);

  window.scrollTo({
    left: scrollX,
    top: scrollY,
    behavior: 'smooth',
  });
}
