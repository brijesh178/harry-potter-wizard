import React from "react"

import "./styles.css"

interface ErrorMessageProps {
  message?: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className='error-container'>
      <h3>Error</h3>
      <p>
        {message || "An unexpected error occurred. Please try again later."}
      </p>
    </div>
  )
}

export default ErrorMessage
