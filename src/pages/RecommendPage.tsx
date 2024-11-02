import "./RPage.css";
import PlantCard from "../components/PlantCard";
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
  return (
    <div>
      <div className="title">What We Recommend For Your Garden!</div>
      <div className="container">
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
      </div>
    </div>
  );
}

export default ReccommendPage;
