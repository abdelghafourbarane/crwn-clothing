import './App.css';
import {Route} from 'react-router-dom';

import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"



function App() {
  return (
    <div >
      <Header/>

      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={ShopPage}/>
    </div>
  );
}

export default App;
