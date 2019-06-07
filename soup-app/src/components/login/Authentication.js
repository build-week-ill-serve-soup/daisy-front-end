import React, { Component } from 'react'

const Authentication = (Component1) => (Component2) =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        userLoggedIn: false
      }
    }

    componentDidMount () {
      if (localStorage.getItem('token')) {
        this.setState({
            userLoggedIn: true
        })
      } else {
        this.setState({
            userLoggedIn: false
        })
      }
    }

    render() {
      if (!this.state.userLoggedIn) {
        return <Component1 />
      } else {
        return <Component2 />
      }
    }
  }

export default Authentication
