import React, { Component } from "react";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "898989",
        firstName: "Kevin",
        lastName: "Red",
        email: "kevin@test.com",
        phone: "555-444-6666",
        balance: 30
      }
    ];

    let output = <h1>Loading</h1>;

    if (clients) {
      output = (
        <React.Fragment>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fa fa-users" /> Clients
              </h2>
            </div>
            <div className="col-md-6" />
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>{client.balance}</td>
                  <td />
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      );
    }
    return <div>{output}</div>;
  }
}

export default Clients;
