export default {
  input: {
    border: 'none',
    borderBottom: '2px solid #d5d5d5',
    padding: '6px 45px 10px 35px',
    height: '36px',
    opacity: 0.7,
    '&:focus': {
      borderBottom: '2px solid #000',
      opacity: 1
    },
    '&:valid': {
      borderBottom: '2px solid #000',
      opacity: 1
    },
    '&:invalid': {
      boxShadow: 'none'
    },
    '&:-moz-submit-invalid': {
      boxShadow: 'none'
    },
    '&:-moz-ui-invalid': {
      boxShadow: 'none'
    }
  },
  inputEye: {
    top: '6px'
  }
}
