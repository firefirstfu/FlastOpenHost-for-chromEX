chrome.tabs.onUpdated.addListener(checkUrl);


function checkUrl(tabId, changeInfo, tab) {
	var str = tab.url;
	// var patt1 = new RegExp(/^file:\/\//);
	var patt1 = new RegExp(/^file.*htdocs.*/);
	if(patt1.test(str)){
		var temp = str.replace(/^file.*cs/, "localhost:8888");
		chrome.tabs.update(tab.id, {url: temp});
	}
}

