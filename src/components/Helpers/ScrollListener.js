import React from 'react';

class ScrollListener extends React.Component {
  state = {
    hasScrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll >= 200) {
      this.setState({
        hasScrolled: true
      });
    } else if (windowScroll <= 200) {
      this.setState({
        hasScrolled: false
      });
    }
  }

  render() {
    const {hasScrolled} = this.state;
    return (
      <div className={`animate ${hasScrolled ? 'out' : ''}`}>
        {this.props.children}
      </div>
    );
  }
}

export default ScrollListener;