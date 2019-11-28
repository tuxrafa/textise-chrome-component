chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		results = document.querySelectorAll('div#search .r');
		for (var i = 0; i < results.length; i++) {
			var a = document.createElement('a');
			var linkText = document.createTextNode(" - Textise it!");
			a.appendChild(linkText);
			a.className = "textiseit";
			a.title = "Open in Textise";
			a.href = "https://www.textise.net/showText.aspx?strURL="+results[i].querySelector('a').href;
			results[i].appendChild(a);
		}


	}
	}, 10);
});
