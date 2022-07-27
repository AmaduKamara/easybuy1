import { Switch, Route } from "react-router-dom";

import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
