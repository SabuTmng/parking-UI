import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./views/LoginPage";
import Admin from "./views/Admin";
import BaseLayout from "./layouts/Base";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route element={<AuthLayout/>}>
                  <Route exact path = "/"  element={<LoginPage/>} />
                  <Route path = "/signup" element={<LoginPage/>} />
              </Route>
              <Route  element={<BaseLayout />}>
                  <Route path = "/admin" element={<Admin/>} />
              </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
