export default function Cadeau({ data }) {
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

