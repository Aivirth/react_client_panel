import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddClient extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fa fa-arrow-cicle-left" /> Back to Dashboard
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Add client</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  minLength="2"
                  required
                  className="form-control"
                  onChange={this.onChange}
                  value={this.state.firstName}
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
                  onChange={this.onChange}
                  value={this.state.lastName}
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
                  onChange={this.onChange}
                  value={this.state.email}
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
                  onChange={this.onChange}
                  value={this.state.phone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="balance">Balance</label>
                <input
                  type="text"
                  name="balance"
                  className="form-control"
                  onChange={this.onChange}
                  value={this.state.balance}
                />
              </div>

              <input
                className="btn btn-success btn-block"
                type="submit"
                value="Add New client"
              />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddClient;
