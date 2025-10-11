console.log('yt annotation & card blocker is running.');

// List of selectors for annotations and cards
const selectors = [
  '.ytp-ce-element', // card elements
  '.iv-annotation', // old annotations
  '.ytp-cards-button', // card button in controls
  '.ytp-cards-teaser', // card teaser
  '.ytp-badge', // badges (which might be annotations)
  '.ytp-pause-overlay', // pause overlay might contain annotations
  // Add more selectors as needed
];

// Function to remove elements matching the selectors
function removeElements() {
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      element.remove();
    });
  });
}

// Run initially
removeElements();

// Set up a MutationObserver to run on DOM changes
const observer = new MutationObserver(() => {
  removeElements();
});

// Start observing the entire document body and its subtree
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Also, observe URL changes to re-run when a new video is loaded
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    console.log('yt annotation & card blocker: New video page detected.');
    removeElements(); // Also remove elements on video change
  }
}).observe(document.body, { subtree: true, childList: true });
