console.log('yt annotation & card blocker is running.');

let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    console.log('yt annotation & card blocker: New video page detected.');
  }
}).observe(document.body, { subtree: true, childList: true });
