import { useParams } from "react-router-dom";
import { getFeeling } from "../allNeeds";

export default function Feeling() {
  let params = useParams();
  let feeling = getFeeling(params.feelingId, 10)
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Feeling Category: <span>{feeling.category}</span></h2>
      <p>
        {feeling.name} {feeling.areNeedsMet === true ? <p>feeling when needs are met</p> : <p>feeling when needs are not met</p>}
      </p>
    </main>
  );
}