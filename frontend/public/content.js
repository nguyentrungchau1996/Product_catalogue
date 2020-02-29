chrome.runtime.onConnect.addListener(port => {
  port.onMessage.addListener(res => {
    if (res && res.message && res.messageId) {
      switch (res.message) {
        case "lazada": {
          const script = document.querySelectorAll(
            'script[type="application/ld+json"]'
          );

          if (script && script.length) {
            const parsedHtml = JSON.parse(script[0].innerHTML);
            const productInfo = eval(parsedHtml);
            const name = productInfo.name;
            const description = productInfo.description;
            const price = productInfo.offers["price"];
            const payload = { name, description, price };

            port.postMessage({
              ...payload,
              messageId: res.messageId || ""
            });
          }

          break;
        }

        case "shopee": {
          if (res.url) {
            let newArray = res.url.toString().split(".");
            let payload = { shopid: "", itemid: "" };

            if (newArray.length) {
              payload.itemid = newArray[newArray.length - 1];
              payload.shopid = newArray[newArray.length - 2];

              port.postMessage({
                ...payload,
                messageId: res.messageId || ""
              });
            }
          }

          break;
        }

        case "tiki": {
          const headElement = document.querySelector("head");
          const scriptElementArray =
            headElement && headElement.querySelectorAll("script");

          let foundScriptElement = [];

          if (scriptElementArray && scriptElementArray.length) {
            scriptElementArray.forEach(script => {
              if (
                !script["src"] &&
                !script["type"] &&
                !script["async"] &&
                !script["defer"] &&
                !script["id"] &&
                !script["crossorigin"]
              ) {
                foundScriptElement = [...foundScriptElement, script];
              }
            });
          }

          foundScriptElement.filter(script => {
            let parsedScript = script.innerHTML;

            if (parsedScript) {
              let index = parsedScript.indexOf('dataLayer');

              if (index !== -1) {
                return script;
              }
            }
          })

          console.log('foundScriptElement', foundScriptElement);
          console.log('length', foundScriptElement.length);

          break;
        }

        default:
          break;
      }
    }
  });
});
