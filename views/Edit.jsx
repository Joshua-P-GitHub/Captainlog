import React, { Component } from 'react'

export class Edit extends Component {
  render() {
    const {log} = this.props
    return (
      <div>
        <form action={`/logs/${log._id}?_method=PUT`} method='POST'>
          <label htmlFor="">Title</label>
          <input type='text' name='title' value={log.title}/>
          <label htmlFor="">Entry</label>
          <input type="textarea" name="entry" value={log.entry}/>
          <label htmlFor="">is ship broken</label>
          {log.shipIsBroken ? <input type="checkbox" name="shipIsBroken" id="" checked/> : <input type="checkbox" name="shipIsBroken" id="" />}
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    )
  }
}

export default Edit