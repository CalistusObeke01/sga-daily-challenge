import React from 'react';
class Test extends React.Component {
    state = {
      timer: null,
      visible: false,
    }
   
    showComponent() {
      const timer = setTimeout(() => {
        this._handleTimeout()
      }, 4000)
      this.setState({
        timer,
        visible: true,
      })
    }
   
    hideComponent() {
      this.setState({
        visible: false,
      })
    }
   
    _handleTimeout() {
      this.hideComponent()
    }

    componentDidMount() {
      this.showComponent()
    }
   
    render() {
      const styles = { 
        display: this.state.visible ? 'block' : 'none' 
      }

      return (
        <div style={styles}>I will hide in 4 seconds.</div>
      )
       
    }
}

export default Test