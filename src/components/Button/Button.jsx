import './button.css'

const Button = ({ children, size, invert, onClick, disabled }) => {
  const styles = {
    fontSize: size || '',
  }

  const classes = `${invert ? 'invert-color' : ''}`
  return (
    <button
      className={classes}
      style={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
