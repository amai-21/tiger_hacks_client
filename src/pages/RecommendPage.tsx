import "./RPage.css";
import PlantCard from "../components/PlantCard";
import { Plant } from "../Interfaces/Plant";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Region } from "../Interfaces/Region";
import "./imageBack.css";
import { blue } from "@mui/material/colors";

function RecommendPage() {
  const navigate = useNavigate();
  const location = useLocation();
  function toGuideRouter(plant: Plant) {
    navigate("/guide");
  }
  const [plants, setPlants] = useState<Plant[]>([]);

  const fetchPlants = async (region: Region) => {
    try {
      const response = await axios.post<Plant[]>(
        "http://localhost:5000/api/plants",
        region
      );
      setPlants(response.data);
    } catch (error) {
      console.error("Error fetching recommended plants:", error);
    }
  };

  useEffect(() => {
    if (plants.length === 0) {
      const region: Region = location.state || {};
      console.log(region);
      fetchPlants(region);
    }
  }, []);

  return (
    <div className="bg">
      <div className="title">What We Recommend For Your Garden!</div>
      <a href="/" style={{ fontSize: 40, color: "white" }}>
        Click Here To Play Again
      </a>
      <div className="container">
        {plants?.length && plants.length > 0 ? (
          plants!.map((plant: Plant, index) => (
            <PlantCard
              plant={plant}
              priority={index + 1}
              guideRouter={toGuideRouter}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default RecommendPage;
