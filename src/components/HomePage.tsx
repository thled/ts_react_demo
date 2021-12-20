import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-light p-5 rounded-lg">
      <h1>Pluralsight Administration </h1>
      <p>React, Flux and React Router in ES6 for ultra-responsive web apps.</p>
      <Link to="about" className="btn btn-primary">About</Link>
    </div>
  );
}

export default HomePage;
