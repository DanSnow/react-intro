import React, { Component } from 'react';
import Demo from './Demo';
import IntroRoot from 'react-intro/IntroRoot';
import Intro from 'react-intro/Intro';

export default class App extends Component {
  constructor(...args) {
    super(...args);
    this.handleFinish = this.handleFinish.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleFinish() {
    this.setState({ start: false });
  }

  handleClick() {
    this.setState({ start: true });
  }

  render() {
    return (
      <div>
        <button style={ styles.btn } onClick={ this.handleClick }> Start Demo </button>
        <IntroRoot start={ this.state.start } onFinish={ this.handleFinish }>
          <div style={ styles.inlineBlock }>
            <Intro position='right' text='intro at right' step={ 1 }>
              <Demo text='Component1' color='#ff3300' />
            </Intro>
          </div>
          <div style={ styles.inlineBlock }>
            <Intro text='intro at bottom' step={ 2 }>
              <Demo text='Component2' color='#33ff00' />
            </Intro>
          </div>
        </IntroRoot>
      </div>
    );
  }

  state = {
    start: false
  };
}

const styles = {
  btn: {
    fontSize: '1.5em',
    border: 'none',
    backgroundColor: '#5B5BCC',
    color: 'white',
    display: 'block',
    padding: '5px 20px',
    borderRadius: '2px'
  },
  inlineBlock: {
    display: 'inline-block',
    width: '50%',
    textAlign: 'center'
  }
};
