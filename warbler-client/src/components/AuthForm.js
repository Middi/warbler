import React, { Component } from "react";

export default class AuthForm extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    profileImageUrl: ""
  };

  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const { heading, signUp, buttonText } = this.props;
    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="co-md-6">
            <form onSubmit={this.handleSubmit} />
            <h2>{heading}</h2>
            <label htmlFor="email">Email:</label>
            <input type="text" className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
                value={email}
            />
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control"
                id="password"
                name="password"
                onChange={this.handleChange}
            />
            {signUp && (
                <div>
                <label htmlFor="username">Username:</label>
            <input type="text" className="form-control"
                id="username"
                name="username"
                onChange={this.handleChange}
                value={username}
            />
            <label htmlFor="image-url">Image URL:</label>
            <input type="text" className="form-control"
                id="image-url"
                name="profileImageUrl"
                onChange={this.handleChange}
                value={profileImageUrl}
            />
                </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}