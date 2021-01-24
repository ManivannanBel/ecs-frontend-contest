import store from "./redux/store";
import { Provider } from "react-redux";
import HomePage from "./containers/homePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "./containers/CartPage/CartPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact strict path="/" component={HomePage} />
          <Route exact strict path="/cart" component={CartPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
