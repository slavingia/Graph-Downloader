chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file:"jquery-2.0.3.min.js"});
	chrome.tabs.executeScript(null, {file:"contentscript.js"});
});