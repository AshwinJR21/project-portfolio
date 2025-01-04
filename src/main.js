const buttons = {
  center: document.getElementById('center-button'),
  top: document.getElementById('top-button'),
  bottom: document.getElementById('bottom-button'),
  left: document.getElementById('left-button'),
  right: document.getElementById('right-button'),
};

// Center the viewport on load
window.addEventListener('load', () => {
  window.scrollTo(scrollToButton(buttons[center]));
});

let activeButton = 'center'; // Start with the center button

document.addEventListener('keydown', (event) => {
  const navigationMap = {
    center: { ArrowUp: 'top', ArrowDown: 'bottom', ArrowLeft: 'left', ArrowRight: 'right' },
    top: { ArrowDown: 'center' },
    bottom: { ArrowUp: 'center' },
    left: { ArrowRight: 'center' },
    right: { ArrowLeft: 'center' },
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

  window.scrollTo({
    left: scrollX,
    top: scrollY,
    behavior: 'smooth',
  });
}
