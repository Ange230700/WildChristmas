import data from "../data.js";

export default function Cadeau() {
  return (
    <div>
      <div className="imageBloc">
        {/* <p>Coucou</p> */}
        <img src={data.image} />
      </div>
      <div className="description">
        <p>{data.description}</p>
      </div>
    </div>
  );
}
