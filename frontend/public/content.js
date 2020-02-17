// // parse document.head to get metadata
// chrome.runtime.sendMessage({
//     type: "metadata",
//     payload: {
//         title: "",
//         description: "",
//     }
// }, (res) => {
//     console.log(res.status);
// })

chrome.runtime.onConnect.addListener(port => {
    port.onMessage.addListener(res => {
        if (res.message === 'getPageInfo') {
            let metaArr = document.getElementsByTagName('meta');
            const title = metaArr['og:title']['content'];
            const description = metaArr['og:description']['content'];
            port.postMessage({payload: {title, description}});
        }
    })
})
