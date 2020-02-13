// Libraries
const Axios = require("axios");
const Nightmare = require("nightmare");
const cheerio = require("cheerio");

const nightmare = Nightmare({
  show: false
});

// Constants
const url = "https://tiki.vn/api/v2/personalization/v2/personalized_categories";
const PRODUCTS_IN_PAGE = 48;
const MAX_PAGES = 208;
const api_key = "2cd335e2c2c74a6f9f4b540b91128e55";

const getCategoryList = async () => {
  let categoryList = [];
  const dataCategoryList = await Axios.get(url);

  if (dataCategoryList && dataCategoryList.data && dataCategoryList.data.data) {
    categoryList = dataCategoryList.data.data;
  }

  return categoryList;
};

const getUrlOfProductsInAPage = async () => {
  let urlOfProductsInAPage = [];
  let categoryList = await getCategoryList();

  if (categoryList) {
    categoryList.forEach(category => {
      urlOfProductsInAPage.push(
        `https://tiki.vn/${category.url_key}/c${category.id}?src=c.${category.id}.hamburger_menu_fly_out_banner`
      );
    });
  }

  return urlOfProductsInAPage;
};

const getInfoProduct = async () => {
  let urlProductsArr = await createUrlProductsArr();
  let products = [];

  if (urlAurlProductsArrrr) {
    urlArr.reduce((accumulator, url) => {
      return accumulator.then(() => {
        return nightmare
          .goto(url)
          .wait("body")
          .evaluate(() => {
            return document.querySelector("body").innerHTML;
          })
          .then(html => {
            const $ = cheerio.load(html);
            // $('div.product-box-list div.product-item')
            $("div.product-box-list div[data-price]").each((index, elem) => {
              let price = $(elem).attr("data-price");
              let name = $(elem).attr("data-title");
              products = [
                ...products,
                {
                  name,
                  price
                }
              ];

              console.log("length", products.length);
            });
          })
          .catch(console.log);
      });
    }, Promise.resolve([]));
  }
};

const getProductsInAPage = async () => {
  let products = [];
  const productUrl = await createUrlProductsArr();

  if (productUrl) {
    productUrl.reduce((accumulator, url) => {
      return accumulator.then(() => {
        return nightmare
          .goto(url)
          .wait("body")
          .evaluate(() => {
            return document.querySelector("body").innerHTML;
          })
          .then(html => {
            if (html) {
              const $ = cheerio.load(html);
              $("div.product-box-list div[data-price]").each(
                (index, element) => {
                  let price = $(element).attr("data-price");
                  let name = $(element).attr("data-title");
                  products = [
                    ...products,
                    {
                      name,
                      price
                    }
                  ];
                }
              );

              console.log("products", products);
              return products;
            }
          })
          .catch(console.log);
      });
    }, Promise.resolve([]));
  }
};

const createUrlProductsArr = async () => {
  let productUrl = [];
  let urlOfProductsInAPage = await getUrlOfProductsInAPage();

  if (urlOfProductsInAPage) {
    productUrl = await urlOfProductsInAPage.reduce((accumulator, url) => {
      return accumulator.then(() => {
        return nightmare
          .goto(url)
          .wait("body")
          .evaluate(() => {
            return document.querySelector("body").innerHTML;
          })
          .then(html => {
            const $ = cheerio.load(html);

            // url.slice(15) -> Cắt bỏ đoạn https://tiki.vn
            $(`#collapse-category a[href="${url.slice(15)}"] span`).each(
              (index, elem) => {
                let totalProducts = Number(
                  $(elem)
                    .text()
                    .slice(1, $(elem).text().length - 1)
                );

                if (typeof totalProducts === "number") {
                  let totalPageNumber = 0;

                  if (totalProducts % PRODUCTS_IN_PAGE !== 0) {
                    totalPageNumber =
                      Math.floor(totalProducts / PRODUCTS_IN_PAGE) + 1;
                  } else {
                    totalPageNumber = totalProducts / PRODUCTS_IN_PAGE;
                  }

                  if (totalPageNumber >= MAX_PAGES) {
                    totalPageNumber = MAX_PAGES;
                  }

                  for (let i = 1; i <= totalPageNumber; i++) {
                    productUrl = [...productUrl, url + `&page=${i}`];
                  }
                }
              }
            );

            return productUrl;
          })
          .catch(console.log);
      });
    }, Promise.resolve([]));

    return productUrl;
  }
};

getProductsInAPage();
