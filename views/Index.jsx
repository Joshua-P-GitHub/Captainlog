import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    const {logs} = this.props
    return (
      <div>
        <h1>Logs</h1>
        <a href="/new">create a log</a>
        <ul>
        {logs.map((log) => {
          return <li>
            <a href={`/log/${log.id}`}>Title: {log.title}</a>
          </li>
        })}          
        </ul>

      </div>
    )
  }
}
