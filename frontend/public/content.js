chrome.runtime.sendMessage({greeting: 'Hello'}, (res) => {
    console.log(res.farawell);
})