import React, { Component } from 'react'

const withAuthenticate = PassedComponent => {
    return class HOC extends Component {
       render() {
           return (
               <div>
                   <PassedComponent />
               </div>
           )
       }
    }
}

export default withAuthenticate
