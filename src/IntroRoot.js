import React, { Component } from 'react'
import PropTypes from 'prop-types'

class IntroRoot extends Component {
  constructor (...args) {
    super(...args)
    this.nextIntro = this.nextIntro.bind(this)
    this.addIntro = this.addIntro.bind(this)
    this.introSteps = []
    this.stepIndex = 0
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.start) {
      this.nextIntro()
    } else {
      this.stepIndex = 0
      this.setState({
        introStep: 0
      })
    }
  }

  addIntro (newIdx) {
    this.introSteps.push(newIdx)
    this.introSteps.sort()
  }

  nextIntro () {
    if (this.stepIndex === this.introSteps.length) {
      this.props.onFinish()
    } else {
      this.setState({
        introStep: this.introSteps[this.stepIndex]
      })
      this.stepIndex += 1
    }
  }

  getChildContext () {
    return {
      addIntro: this.addIntro,
      nextIntro: this.nextIntro,
      introStep: this.state.introStep,
      introLast: this.introSteps[this.introSteps.length - 1]
    }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

  state = {
    introStep: 0
  };

  static propTypes = {
    children: PropTypes.node,
    onFinish: PropTypes.func.isRequired,
    start: PropTypes.bool.isRequired
  };

  static childContextTypes = {
    introStep: PropTypes.number,
    introLast: PropTypes.number,
    addIntro: PropTypes.func,
    nextIntro: PropTypes.func
  };
}

export default IntroRoot
