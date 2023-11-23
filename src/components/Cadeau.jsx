export default function Cadeau({ Description, Category, Image }) {
  return (
    <>
      <div className="item">
        <div className="imageBloc">
          <img src={`public/images/${Category}${Image}`}/>
        </div>
        <div className="description">
          <p>{Description}</p>
        </div>
      </div>
    </>
  );
}
