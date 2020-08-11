console.log("fbclid killer is running")

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    let match = info.url.match(/(.*)[&\?]fbclid=/);
    if (match) {
      return {redirectUrl: match[1]};
    }
  },
  { urls: ["<all_urls>"]},
  ["blocking"]
);