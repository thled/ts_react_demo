import { useParams } from "react-router-dom";

const ManageCoursePage = () => {
  return (
    <>
      <h2>Manage Course</h2>
      {useParams().slug}
    </>
  );
}

export default ManageCoursePage;
