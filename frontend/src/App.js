// Libraries
import React, { useEffect } from 'react';
import {connect, useDispatch} from 'react-redux';

// Assets
import './App.css';

// Components
import Layouts from './containers/Layouts/Layouts';
import { getInfoShopeeProduct } from './Redux/Action/PageInfo';

// Actions
import {actFetchProducts} from '../src/Redux/Action/Products';

const App = props => {
  const {res = {}, pageInfo = {}} = props;
  const {payload = {}} = res;
  const {shopid = '', itemid = ''} = payload;
  const dispatch = useDispatch();

  useEffect(() => {
    if (shopid && itemid) {
      dispatch(getInfoShopeeProduct(shopid, itemid));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Layouts />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    pageInfo: state.pageInfo.pageInfo  
  }
};

const mapDispatchToProps = {
  actFetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
