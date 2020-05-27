import React, { Component } from "react";
class PageNotFound extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h2 className="text-center">Incorrect Path</h2>
            <p className="text-center">
              No content found, Use navigation to try again1!.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default PageNotFound;
