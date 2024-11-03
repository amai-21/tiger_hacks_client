import "./RPage.css";
import PlantCard from "../components/PlantCard";
import { Plant } from "../Interfaces/Plant";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Region } from "../Interfaces/Region";
/*   {blogs?.length && blogs.length > 0 ? (
          blogs!.map((blog: BlogUI) => (
            <BlogCard
              desc={DescGenerator(blog.content)}
              viewMode={activateViewModal}
              editMode={BlogEditor}
              key={blog._id}
              Blog={blog}
              US_date={DateToString(blog.posted)}
            />
          ))
        ) : (
          <div className="emptyNote">No Blogs Have Been Posted Yet...</div>
        )}*/

function RecommendPage() {
  const navigate = useNavigate();
  const location = useLocation();
  function toGuideRouter(plant: Plant) {
    navigate("/guide");
  }
  const [plants, setPlants] = useState<Plant[]>([]);

  const fetchPlants = async (region: Region) => {
    try {
      const response = await axios.post(
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
    <div>
      <div className="title">What We Recommend For Your Garden!</div>
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
