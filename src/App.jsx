import "./App.css";
import Articles from "./components/articles/Articles";
import Blog from "./components/blog/Blog";
import Courses from "./components/courses/Courses";
import Test from "./components/users/Test";
import Users from "./components/users/Users";

function App() {
  return (
    <div className="container">
      <>
        {/* <Blog /> */}
        {/* <Courses /> */}
        {/* <Users /> */}
        <Articles />
      </>
    </div>
  );
}
export default App;
