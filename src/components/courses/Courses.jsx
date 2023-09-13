import { useState } from "react";
import FormCourse from "./FormCourse";
import ListCourses from "./ListCourses";
import ListCoursesGrid from "./ListCoursesGrid";

const Courses = () => {
  const title = "Blog of Coding Tech";
  const [courses, setCourses] = useState([
    {
      id: 1,
      label: "Spring boot",
      image: "https://picsum.photos/id/12/200/300?grayscale&blur=2",
    },
    {
      id: 2,
      label: "ReactJS",
      //   image: "https://picsum.photos/id/15/200/300?grayscale&blur=2",
    },
    {
      id: 3,
      label: "Django",
      image: "https://picsum.photos/id/13/200/300?grayscale&blur=2",
    },
    {
      id: 4,
      label: "Angular",
      image: "https://picsum.photos/id/14/200/300?grayscale&blur=2",
    },
  ]);
  const AddCourse = ({ label, image }) => {
    // const newcourse = { id: Math.random, label, image };
    setCourses([...courses, { id: Math.random, label, image }]);
    // setCourses((prev)=>{
    //     return[...prev,newcourse]
    // });
  };
  return (
    <>
      {/* (.row.my-4>(.col-md-6>h1{Courses})+(.col-md-6.text-end>button.btn.btn-success.btn-sm{New}))+(.row.my-4>.col-md-6.mx-auto>form>(.form-group>label{Course}+input:text.form-control#course)+.d-grid>button.btn.btn-primary{Add Course})+(.row.my-5>.col-md-6.mx-auto>.div>button.btn.btn-light*2^(ul.list-group.my-5>li.list-group-item)) */}

      <div className="row my-4">
        <div className="col-md-6">
          <h1>{title}</h1>
          {/* <h4>{label}</h4>
          <h4>{image}</h4> */}
        </div>
        <div className="col-md-6 text-end">
          <button className="btn btn-success btn-sm">New</button>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-4 mx-auto">
          <FormCourse registerCourse={AddCourse} />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-4 mx-auto">
          <div className="div">
            <button className="btn btn-warning me-1">List</button>
            <button className="btn btn-warning">Grid</button>
          </div>
          <ListCourses datalist={courses} test="test" />
          <ListCoursesGrid dataGrid={courses} />
        </div>
      </div>
    </>
  );
};
export default Courses;
