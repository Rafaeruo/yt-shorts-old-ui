// Redirect on page reload / initial load
if (window.location.href.match("/shorts/")) {
  window.location.replace(
    window.location.href.replace("/shorts/", "/watch?v=")
  );
}

// Listen to event emitted by the background script whenever the
// page is updated to a shorts page when alrealy in YouTube
chrome.runtime.onMessage.addListener(function (
  request,
  _sender,
  _sendResponse
) {
  window.location.replace(request.url.replace("/shorts/", "/watch?v="));
});
