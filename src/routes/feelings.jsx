import { Link, Outlet } from "react-router-dom";
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
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/feelings/${feeling.name}`}
            key={feeling.name}
          >
            {feeling.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}