import React, { Component } from "react";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "12345",
        firstName: "Kevin",
        lastName: "Sorbo",
        email: "kevinsorbo@gmail.com",
        phone: "512-867-5309",
        balance: "50"
      }
    ];
    if (clients) {
      return (
        <div>
          <div className='row'>
            <div className='col-md-6'>
              <h2>
                {" "}
                i.fas <fa-users />{" "}
              </h2>
            </div>
            <div className='col-md-6' />
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
