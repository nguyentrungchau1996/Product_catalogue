// Libraries
const axios = require("axios");
const cheerio = require("cheerio");
const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });

let url = "https://www.lazada.vn/sitemap.xml";

const getSitemapData = html => {
  let dataSitemap = [];
  const $ = cheerio.load(html);

  $("sitemap").each((index, elem) => {
    dataSitemap = [
      ...dataSitemap,
      {
        url: $(elem)
          .find("loc")
          .text()
      }
    ];

    dataSitemap = dataSitemap.filter(
      dataItem => dataItem.url.indexOf("products") !== -1
    );
  });

  return dataSitemap;
};

const getSitemapProducts = html => {
  let dataProducts = [];
  const $ = cheerio.load(html);

  $("url").each((index, elem) => {
    dataProducts = [
      ...dataProducts,
      {
        url: $(elem)
          .find("loc")
          .text()
      }
    ];
  });

  return dataProducts;
};

const getScriptProducts = (html, scriptArr) => {
  const $ = cheerio.load(html);

  $("script").each((index, elem) => {
    if (
      typeof $(elem).attr("src") === "undefined" &&
      typeof $(elem).attr("type") !== "undefined" &&
      $(elem).attr("type") === "application/ld+json"
    ) {
      const scriptContent = $(elem).html();
      const onjScriptContent = JSON.parse(scriptContent);

      if (
        onjScriptContent &&
        onjScriptContent.name &&
        onjScriptContent.offers
      ) {
        scriptArr.push({
          name: onjScriptContent.name,
          price: onjScriptContent.offers.price
        });
      }
    }
  });

  return scriptArr;
};

let scriptArr = [];

const crawlLazadaHtml = async () => {
  let urlSiteMap = await axios.get(url);

  if (urlSiteMap) {
    let sitemapData = getSitemapData(urlSiteMap.data);
    let urlSitemapProducts = await axios.get(sitemapData[0]["url"]);

    if (urlSitemapProducts) {
      let sitemapProducts = getSitemapProducts(urlSitemapProducts.data);

      sitemapProducts
        .reduce((accumulator, url) => {
          return accumulator.then(() => {
            return nightmare
              .goto(url["url"])
              .wait("body")
              .evaluate(() => {
                return document.querySelector("body").innerHTML;
              })
              .then(html => {
                scriptArr = getScriptProducts(html, scriptArr);
              })
              .catch(console.log);
          });
        }, Promise.resolve([]))
        .then(res => {
          console.log("res", res);
        })
        .catch(console.log);
    }
  }
};

crawlLazadaHtml();
