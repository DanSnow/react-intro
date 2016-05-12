import React, { PropTypes, Component } from 'react';

class Demo extends Component {
  render() {
    const { text, color } = this.props;
    return (
      <div style={ { display: 'inline-block', padding: '10px', backgroundColor: color } } >
        { text }
      </div>
    );
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  };
}

export default Demo;
