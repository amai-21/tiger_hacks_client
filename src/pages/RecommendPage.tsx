import "./RPage.css";
import PlantCard from "../components/PlantCard";
import { Plant } from "../Interfaces/Plant";
import { useNavigate } from "react-router-dom";
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

function ReccommendPage() {
  const navigate = useNavigate();
  const plant: Plant = {
    name: "carrot",
    image: "test.png",
  };
  function toGuideRouter(plant: Plant) {
    console.log("Tomato");
    navigate("/guide");
  }
  return (
    <div>
      <div className="title">What We Recommend For Your Garden!</div>
      <div className="container">
        <PlantCard plant={plant} priority={1} guideRouter={toGuideRouter} />
        <PlantCard plant={plant} priority={2} guideRouter={toGuideRouter} />
        <PlantCard plant={plant} priority={3} guideRouter={toGuideRouter} />
        <PlantCard plant={plant} priority={4} guideRouter={toGuideRouter} />
        <PlantCard plant={plant} priority={5} guideRouter={toGuideRouter} />
      </div>
    </div>
  );
}

export default ReccommendPage;
