import { 
  NavLink, 
  Outlet,
  useSearchParams 
} from "react-router-dom";
import { getFeelings } from "../allNeeds";

export default function Feelings() {
  let feelings = getFeelings();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        <input 
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {feelings
          .filter(feeling => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = feeling.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map(feeling => (
            <NavLink
              // className={({ isActive }) => isActive ? "active" : ""}
              style={({ isActive }) => ({
                  display: "block", 
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
              })}
              to={`/feelings/${feeling.name}`}
              key={feeling.name}
            >
              {feeling.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}