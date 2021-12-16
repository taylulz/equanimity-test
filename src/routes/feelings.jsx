import { NavLink, Outlet } from "react-router-dom";
import { getFeelings } from "../allNeeds";

export default function Feelings() {
  let feelings = getFeelings();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {feelings.map(feeling => (
          <NavLink
            className={({ isActive }) => isActive ? "active" : ""}
            style={({ isActive }) => {
              return { 
                display: "block", 
                margin: "1rem 0",
                color: isActive? "red" : ""
              };
            }}
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