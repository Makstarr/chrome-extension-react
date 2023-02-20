chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  sendResponse('Front the background Script');
});

chrome.contextMenus.create({
  id: 'react-boilerplate-extension',
  title: 'React Boilerplate context menu',
  contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  await chrome.tabs.sendMessage(tab?.id ?? 0, info.selectionText);
});
