import React, { Component } from 'react'

export class Show extends Component {
  render() {
    const {log} = this.props
    return (
      <div>
        <a href="/logs">Home</a>
        <h1>LOG</h1>
        <h3>Title: {log.title}</h3>
        <p>Entry: {log.entry}</p>
        {log.shipIsBroken ? <p>The ship is broken</p>: <p>The ship is not broken</p>}
      </div>
    )
  }
}

export default Show