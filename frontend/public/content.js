chrome.runtime.onConnect.addListener(port => {
  port.onMessage.addListener(res => {
    if (res && res.message && res.messageId) {
      switch (res.message) {
        case "lazada": {
          const script = document.querySelectorAll('script[type="application/ld+json"]');

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
          const scriptElementArray = headElement && headElement.querySelectorAll("script");

          let foundedScripElement = [];

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
                let parsedScrip = script.innerHTML.trim();

                if (parsedScrip) {
                  return (foundedScripElement = [...foundedScripElement, parsedScrip]);
                }
              }
            });
          }

          foundedScripElement.map(script => {
            if (script) {
              let ga = () => {};

              eval(script);

              if (dataLayer.length) {
                return dataLayer;
              }
            }
          });

          let foundedItem = (dataLayer.length && dataLayer.find(item => !!item["ecommerce"])) || {};

          if (foundedItem.ecommerce && foundedItem.ecommerce.detail && foundedItem.ecommerce.detail.products) {
            let products = foundedItem.ecommerce.detail.products || [];

            if (products.length === 1) {
              const payload = {
                name: products[0].name || "",
                price: +products[0].price || 0
              };

              port.postMessage({
                ...payload,
                messageId: res.messageId || ""
              });
            }
          }

          break;
        }

        default:
          break;
      }
    }
  });
});
