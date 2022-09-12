// whenever a tab updates it's url, send a message to the tab with the content script
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, _tab) {
  if (changeInfo.url && changeInfo.url.match("/shorts/")) {
    chrome.tabs.sendMessage(tabId, {
      url: changeInfo.url,
    });
  }
});
