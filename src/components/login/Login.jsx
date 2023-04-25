import React, { Component } from 'react'
import Heading from "../heading/Heading"
import './login.css'

export default class Login extends Component {
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

      <div className='margin'></div>
        <h3>Sign In</h3>

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

        <div className="mb-3">
          <div className="custom-control custom-checkbox flex-container">
            <input
              type="checkbox"
              // className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label rMe" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}