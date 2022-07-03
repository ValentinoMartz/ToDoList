import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="container p3 p-sm-1">
      <div className="row justify-content-center mt-2 ">
        <div className="col-xl-6 col-lg-7 col-md-10">
          <div className="card">
            <div className="card-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
