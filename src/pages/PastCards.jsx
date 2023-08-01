import React from 'react'
import mailSvg from "../../public/images/mail.svg"
import { Link } from 'react-router-dom'

const Pastcards = () => {
  return (
    <div>
      <h3>
        Please sign up to keep and review your past card designs.
      </h3>
      <img style={{height: "10rem"}} src={mailSvg} alt="mailIcon" />
      <Link to="/register">
        {"Sign up"}
      </Link>
      <Link to="/" variant="body2" style={{color: "#C8D0DA"}}>
        Already have an account? Sign in
      </Link>
    </div>
  )
}

export default Pastcards