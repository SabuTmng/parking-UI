import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./views/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path = "/"  element={<LoginPage/>} />
              <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>

      </Router>
    </div>
  );
}

export default App;
