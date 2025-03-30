import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";

const AppRouter = () => {
  return (
    <Router>
      <Route path="/">
        <HomePage />
      </Route>
    </Router>
  );
}

export default AppRouter;