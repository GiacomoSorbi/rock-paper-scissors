import React from 'react'
import './MessageBox.css'

const MessageBox = ({ message, result, ...props }) => (
  <p className={`message-box-container  ${result}`}>{message}</p>
)

export default MessageBox
