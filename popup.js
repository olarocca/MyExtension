(function () {
    chrome.browserAction.setBadgeText({ text: "click!" });
})();
document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function () {

        chrome.tabs.getSelected(null, function (tab) {
            alert("HI");
        });
    }, false);
}, false);

