import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
export class headerTwo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <h1 className="text-uppercase text-text-success">
          {" "}
          salammmmm {this.props.siteName}
        </h1>
        <button  className="btn btn-success">send</button>
        <input type="button" value="send2" className="alert-primary" />
        <div className="alert alert-info bg-black  !text-red-500">salam mmd dost</div>
        <div className="slider">kos</div>
      </>
    );
  }
}
