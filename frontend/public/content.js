// parse document.head to get metadata
chrome.runtime.sendMessage({
    type: "metadata",
    payload: {
        title: "",
        description: "",
    }
}, (res) => {
    console.log(res.status);
})