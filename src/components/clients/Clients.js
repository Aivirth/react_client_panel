import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

class Clients extends Component {
  render() {
    const { clients } = this.props;

    let output = <Spinner />;

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
                  <td>€{parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      className="btn btn-secondary btn-sm"
                      to={`/client/${client.id}`}
                    >
                      <i className="fa fa-arrow-circle-right" /> Details{" "}
                    </Link>
                  </td>
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

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients
  }))
)(Clients);
