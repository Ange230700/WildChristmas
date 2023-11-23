import data from "../data";
import Cadeau from "./cadeau";
export default function ListCadeaux() {
  return (
    <div>
      <Cadeau data={data} />
    </div>
  );
}
