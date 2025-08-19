import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PageNotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="row text-center">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-4">
          <h1 className="display-3 fw-bold text-primary">404 ERROR</h1>
          <p className="fs-5 text-dark">
            Oops! The page you are looking for does not exist.
          </p>
          <p className="text-muted">
            Uh oh, we can’t seem to find the page you’re looking for. <br />
            Contact us for more information.
          </p>
          <a href="/" className="btn btn-primary px-4 mt-2">
            Back to Homepage
          </a>
        </div>

        {/* Right side illustration */}
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="https://youstable.com/blog/wp-content/uploads/2023/09/404-Error.jpg"
            alt="Error Illustration"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
