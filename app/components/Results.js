var React = require('react');
var PropTypes = React.PropTypes;


Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;