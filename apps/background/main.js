require([], function() {
	console.log("TEST");
	chrome.browserAction.onClicked.addListener(function(tab) {
		console.log(tab);


		chrome.tabs.executeScript(tab.id, {
			file: "lib/jquery/jquery-2.0.1.min.js"
		}, function() {
			chrome.tabs.executeScript(tab.id, {
				file: "apps/inject/main.js"
			}, function() {
				console.log("done");
			})
		})
	});


});