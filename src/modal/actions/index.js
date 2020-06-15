export const showModal1 = () => {
  return {
    type: "SET_MODAL",
    payload: {
      showModal1: true,
      showModal2: false,
      showModal3: false
    }
  }
}

export const showModal2 = () => {
  return {
    type: "SET_MODAL",
    payload: {
      showModal1: false,
      showModal2: true,
      showModal3: false
    }
  }
}

export const showModal3 = () => {
  return {
    type: "SET_MODAL",
    payload: {
      showModal1: false,
      showModal2: false,
      showModal3: true
    }
  }
}

export const hideModal = () => {
  return {
    type: "SET_MODAL",
    payload: {
      showModal1: false,
      showModal2: false,
      showModal3: false
    }
  }
}
