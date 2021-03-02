import './App.css';
import {Route} from 'react-router-dom';

import Homepage from "./pages/homepage/homepage.component"

const HatsPage=()=>(
  <div>
    HatsPage
  </div>
)

function App() {
  return (
    <div >
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop/hats" component={HatsPage}/>
    </div>
  );
}

export default App;
