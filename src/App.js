import './App.css';
import {Route} from 'react-router-dom';

import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"



function App() {
  return (
    <div >
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={ShopPage}/>
    </div>
  );
}

export default App;
