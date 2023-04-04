import "./categories.style.scss"
import { Routes, Route} from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
const Shop = () => {
  return (
    <div>
      <h1>I am the SHOP</h1>
    </div>
  )
}

const App = () =>  {
    return (
      <Routes>
        <Route path = "/" element = {<Navigation></Navigation>}>
          <Route index element = {<Home></Home>} />
          <Route path = "shop" element = {<Shop></Shop>} />
          <Route path = "auth" element = {<Authentication></Authentication>} />

        </Route>
      </Routes>
      
    ); 
}

export default App;
