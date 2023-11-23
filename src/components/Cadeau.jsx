export default function Cadeau() {
  return (
    <div>
      <div className="imageBloc">
        <img src={data.image} />
      </div>
      <div className="description">
        <p>{data.description}</p>
      </div>
    </div>
  );
}

