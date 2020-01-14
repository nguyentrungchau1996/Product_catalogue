import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

render = (metadata) => {
    let { title, description } = metadata;
    return axios.get('/api/products', {
        params: {
            search: title,
        }
    })
    .then((res) => {
        let products = res.data;
        ReactDOM.render(<App products={products} />, document.getElementById('root'));
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// message = {
//     type: "metadata",
//     payload: {
//         title: "",
//         description: "",
//     }
// }
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == "metadata")
      sendResponse({status: "ok"});
      render(request.payload);
  });
