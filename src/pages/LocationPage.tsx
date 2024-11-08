import { useNavigate } from "react-router-dom";
import LocationSelector from "../components/CountryStateCityComponents";
import { Region } from "../Interfaces/Region";
import "./imageBack.css";
function LocationPage() {
  const navigate = useNavigate();
  function toRecPage(region: Region) {
    console.log(region);
    navigate("/rec", { state: { region } });
  }
  return (
    <div className="bg">
      <LocationSelector toRec={toRecPage} />
    </div>
  );
}

export default LocationPage;
