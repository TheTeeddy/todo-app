import './button.css'

const Button = ({ children, size, invert, border, w }) => {
  const styles = {
    fontSize: size || '',
    width: w || 'auto',
  }

  const classes = `${invert ? 'invert-color' : ''} ${border ? 'border' : ''}`
  return (
    <button className={classes} style={styles}>
      {children}
    </button>
  )
}

export default Button
