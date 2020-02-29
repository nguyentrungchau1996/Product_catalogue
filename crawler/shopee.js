// Libraries
const Axios = require("axios");

const url = "https://shopee.vn/api/v2/category_list/get";

let shopeeCategoryArr = [];
let shopeeProducts = [];

const getCategoryList = async () => {
  const dataCategoryList = await Axios.get(url);

  if (
    dataCategoryList &&
    dataCategoryList.data &&
    dataCategoryList.data.data &&
    dataCategoryList.data.data.category_list
  ) {
    const categoryList = dataCategoryList.data.data.category_list;
    shopeeCategoryArr = shopeeCategoryArr.concat(categoryList);
    const urlCategoryArr = createUrlCategoryArr();

    for (let i = 0; i < urlCategoryArr.length; i++) {
      getProducts(urlCategoryArr[i].catid, urlCategoryArr[i].url);
    }
  }
};

const getProducts = async (catid, url) => {
  const params = new URLSearchParams({
    by: 'relevancy',
    limit: '50', 
    match_id: catid,
    newest: '0',
    order: 'desc',
    page_type: 'search',
    version: '2'
  });

  const product = await Axios.get(
    `https://shopee.vn/api/v2/search_items/?${params}`,
    {
      headers: {
        Referer: url
      }
    }
  );

  if (
    product &&
    product.data &&
    product.data.items &&
    product.data.items.length
  ) {
    const { items } = product.data;

    for (let i = 0; i < items.length; i++) {
      shopeeProducts = [
        ...shopeeProducts,
        {
          name: items[i].name,
          price: typeof items[i].price === "number" && items[i].price / 100000
        }
      ];
    }
  }

  return shopeeProducts;
};

const createUrlCategoryArr = () => {
  let urlCategoryArr = [];

  if (shopeeCategoryArr && shopeeCategoryArr.length) {
    for (let i = 0; i < shopeeCategoryArr.length; i++) {
      let arrDisplayName = shopeeCategoryArr[i].display_name.split(" ");

      for (let j = arrDisplayName.length - 1; j >= 0; j--) {
        if (arrDisplayName[j] === "&" || arrDisplayName[j] === "-") {
          arrDisplayName.splice(j, 1);
        }
      }

      arrDisplayName = arrDisplayName.join("-");
      let encodedDisplayName = encodeURI(arrDisplayName);

      for (let pageNumber = 0; pageNumber <= 99; pageNumber++) {
        const params = new URLSearchParams({
          page: pageNumber
        });

        urlCategoryArr = [
          ...urlCategoryArr,
          {
            catid: shopeeCategoryArr[i].catid,
            url: `https://shopee.vn/${encodedDisplayName}-cat.${shopeeCategoryArr[i].catid}?${params}`
          }
        ];
      }
    }
  }
  
  return urlCategoryArr;
};

getCategoryList()
  .then()
  .catch(console.log);
