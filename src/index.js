import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Feelings from "./routes/feelings";
import Needs from "./routes/needs";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="needs" element={<Needs />} />
        <Route path="feelings" element={<Feelings />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);