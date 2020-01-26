/*global chrome*/
console.log("hi from background!");

chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="#C3413B"'
  });
});
