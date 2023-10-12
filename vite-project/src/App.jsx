import PropTypes from 'prop-types';
import './App.css'

function FirstApp({title,sum}) {

  return (
    <>
     <h1>{title}</h1>
     <span>{sum}</span>
    </>
  )
}
FirstApp.PropTypes = {
  title: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title:"No hay",
  sum: 25
}


export default FirstApp
