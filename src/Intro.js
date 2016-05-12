import React, { Children, PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';

class Intro extends Component {
  componentDidMount() {
    this.context.addIntro(this.props.step);
    this.calculatePostion();
  }

  calculatePostion() {
    const { position } = this.props;
    const element = findDOMNode(this.refs.target);
    const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = element;
    const targetInfo = this.targetInfo = {
      top: offsetTop,
      left: offsetLeft,
      height: offsetHeight,
      width: offsetWidth
    };
    if (position === 'right') {
      this.setState({
        position: {
          top: '-5px',
          left: `${targetInfo.width}px`
        }
      });
    } else if (position === 'bottom') {
      this.setState({
        position: {
          top: `${targetInfo.height}px`,
          left: '-5px'
        }
      });
    }
  }

  getStyles() {
    return {
      none: {},
      introContainer: {
        position: 'relative',
        display: 'inline-block'
      },
      targetContainer: {
        display: 'inline-block'
      },
      introBox: {
        maxWidth: '640px',
        minWidth: '100px',
        position: 'absolute',
        borderRadius: '2px',
        boxShadow: '2px 2px 15px gray',
        padding: '8px',
        margin: '5px'
      },
      introBtn: {
        border: 'none',
        backgroundColor: '#5B5BCC',
        color: 'white',
        display: 'block',
        padding: '5px 10px',
        borderRadius: '2px',
        float: 'right'
      }
    };
  }

  render() {
    const { step, text, children } = this.props;
    const { introStep, introLast, nextIntro } = this.context;
    const { position } = this.state;
    const styles = this.getStyles();
    const isIntro = step === introStep;

    return (
      <span style={ isIntro ? styles.introContainer : styles.none }>
        <span style={ styles.targetContainer } ref='target'>
          {
            Children.only(children)
          }
        </span>
        {
          isIntro ? (
            <div style={ { ...styles.introBox, ...position } }>
              <div>
                { text }
              </div>
              <div>
                <button style={ styles.introBtn } onClick={ nextIntro }>
                  { step === introLast ? 'Finish' : 'Next' }
                </button>
              </div>
            </div>
          ) : null
        }
      </span>
    );
  }

  state = {
    position: {}
  };

  static propTypes = {
    children: PropTypes.node,
    step: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['right', 'bottom'])
  };

  static contextTypes = {
    nextIntro: PropTypes.func,
    addIntro: PropTypes.func,
    introStep: PropTypes.number,
    introLast: PropTypes.number
  };

  static defaultProps = {
    position: 'bottom'
  };
}

export default Intro;
