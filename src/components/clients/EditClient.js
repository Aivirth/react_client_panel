import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

class EditClient extends Component {
  constructor(props) {
    super(props);

    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.balanceInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();

    const { client, firestore, history } = this.props;

    const updClient = {
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      email: this.emailInput.current.value,
      balance:
        this.balanceInput.current.value === ""
          ? 0
          : this.balanceInput.current.value,
      phone: this.phoneInput.current.value
    };

    firestore
      .update({ collection: "clients", doc: client.id }, updClient)
      .then(history.push("/"));
  };

  render() {
    const { client } = this.props;

    let output = <Spinner />;

    if (client) {
      output = (
        <React.Fragment>
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left" /> Back to Dashboard
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Edit client</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    minLength="2"
                    required
                    className="form-control"
                    defaultValue={client.firstName}
                    ref={this.firstNameInput}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    minLength="2"
                    required
                    className="form-control"
                    defaultValue={client.lastName}
                    ref={this.lastNameInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    minLength="2"
                    required
                    className="form-control"
                    defaultValue={client.email}
                    ref={this.emailInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    minLength="10"
                    required
                    className="form-control"
                    defaultValue={client.phone}
                    ref={this.phoneInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="balance">Balance</label>
                  <input
                    type="text"
                    name="balance"
                    className="form-control"
                    defaultValue={client.balance}
                    ref={this.balanceInput}
                  />
                </div>

                <input
                  className="btn btn-success btn-block"
                  type="submit"
                  defaultValue="Add New client"
                />
              </form>
            </div>
          </div>
        </React.Fragment>
      );
    }

    return output;
  }
}

EditClient.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    {
      collection: "clients",
      storeAs: "client",
      document: props.match.params.id
    }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0]
  }))
)(EditClient);
