import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    const {logs} = this.props
    return (
      <div>
        <h1>Logs</h1>
        <a href="/logs/new">create a log</a>
        <ul>
        {logs.map((log) => {
          return <li>
            <a href={`/logs/${log.id}`}>Title: {log.title}</a>
            <form action={`/logs/${log.id}?_method=DELETE`} method='POST'>
              <input type="submit" value="Delete" />
            </form>
            <a href={`/logs/${log._id}/edit`}>EDIT</a>
          </li>
        })}          
        </ul>

      </div>
    )
  }
}
