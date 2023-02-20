chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  sendResponse('Front the background Script');
});
