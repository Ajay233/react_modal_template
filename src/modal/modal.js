import React from 'react'
import ReactDOM from 'react-dom'

import "../stylesheets/modal.css"

const Modal = (props) => {

  // props:
  // show - true/false
  // title
  // message
  // continue function
  // cancel/close function

  return(
    ReactDOM.createPortal(
      <div onClick={props.onClose} className={`modal ${props.show ? "show" : "hide"}`}>
        <div onClick={e => e.stopPropagation()} className="modalContent">
          <span onClick={props.onClose} className="close"><i className="fas fa-times-circle"></i></span>
          <div className="modalHeader">
            {props.title}
          </div>
          <div className="modalMessage">
            {props.message}
          </div>
          <div className="modalActions">
            <button onClick={props.onContinue}>Continue</button>
            <button onClick={props.onClose}>Cancel</button>
          </div>
        </div>
      </div>, document.querySelector("#modal")
    )
  );
}

export default Modal
