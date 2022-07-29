import React from "react";
import states from '../states.json';
import PropTypes from "prop-types";

// Event changer 
class SelectUSState extends React.Component {
  handleChange = event => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };


// Render select box of states and abbreviations from JSON file
  render() {
    const { id, className } = this.props;
    return (
      <select id={id} className={className} onChange={this.handleChange}>
        <option key="all" vaLue="">States</option>
        {states.map(item => (
          <option key={item.abbreviation} value={item.abbreviation}>
            {item.name}
          </option>
        ))}
      </select>
    );
  }
}

const propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

SelectUSState.propTypes = propTypes;

export default SelectUSState;