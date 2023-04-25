import React, { Component } from 'react'
import Heading from "../heading/Heading"

export default class Register extends Component {
  render() {
    return (
      <form>

      <section className='loginhead'>
        <div className='container'>
          <div className='row'>
            <Heading />
          </div>
        </div>
      </section>

        <h4>Sign Up</h4>

        <div className='flex-container'>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}