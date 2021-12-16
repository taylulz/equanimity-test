import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Feelings from "./routes/feelings";
import Feeling from "./routes/feeling";
import Needs from "./routes/needs";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="needs" element={<Needs />} />
        <Route path="feelings" element={<Feelings />}>
          <Route 
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Index Route: select a feeling</p>
              </main>
            }
          />
          <Route path=":feelingId" element={<Feeling />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>no match route</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);