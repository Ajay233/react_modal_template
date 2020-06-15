import React from 'react'
import { connect } from 'react-redux'
import Modal from './modal/modal'
import { showModal1, hideModal } from './modal/actions'

class Home extends React.Component{

  testFunc = () => {
    console.log("The modal executed the function you passed in")
  }

  render(){
    const { showModal1, hideModal, modalState } = this.props
    return(
      <div>
        <Modal
        show={modalState.showModal1}
        title={"Test Modal"}
        message={"Test message"}
        onContinue={this.testFunc}
        onClose={hideModal}
        />
        Home page
        <button onClick={showModal1}>show me the modal</button>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    modalState: state.modalState
  }
}

export default connect(mapStateToProps, { showModal1, hideModal })(Home)
