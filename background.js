function go() {
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(function(tab) {
            chrome.tabs.remove(tab.id)
        });
    })
}

chrome.tabs.onCreated.addListener(function(tab) {
    chrome.tabs.query({
        windowType: 'normal'
    }, function(tabs) {
        if (tabs.length > 20) {
            go();
        }
    });
});
