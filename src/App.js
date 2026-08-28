import "./App.css";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Shop } from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Journal from "./Components/Journal";
import Home from "./Components/Home";
import ProfButton from "./Components/ProfButton";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ProductDetail from "./Components/ProductDetail";

function App() {
  const RenderLocationUp = () => {
    const location = useLocation();

    if (location.pathname === "/signin" || location.pathname === "/signup") {
      return null;
    } else {
      return (
        <div>
          <Header />

          <ProfButton />
        </div>
      );
    }
  };

  const RenderLocationDown = () => {
    const location = useLocation();

    if (location.pathname === "/signin" || location.pathname === "/signup") {
      return null;
    } else {
      return (
        <div>
          <Footer />
        </div>
      );
    }
  };

  return (
    <div className="App">
      <Router>
        <RenderLocationUp />

        <Routes>
          <Route path="/" exact element={<Home />}>
            {" "}
          </Route>
          <Route path="/shop" exact element={<Shop />}>
            {" "}
          </Route>
          <Route path="/about" exact element={<About />}>
            {" "}
          </Route>
          <Route path="/contact" exact element={<Contact />}>
            {" "}
          </Route>
          <Route path="/journal" exact element={<Journal />}>
            {" "}
          </Route>
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route
            path="/shop/productdetail/:id"
            exact
            element={<ProductDetail />}
          />
        </Routes>

        <RenderLocationDown />
      </Router>

      {/* <BrowserRouter>
 
 <Routes>


<Route path="/signin"  exact element={ <SignIn /> } /> 


 </Routes>
 
 </BrowserRouter> */}
    </div>
  );
}

export default App;
