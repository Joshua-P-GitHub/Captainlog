import React, { Component } from 'react'

export class New extends Component {
  render() {
    return (
      <div>
        <form action='/logs' method='POST'>
          <label htmlFor="">Title</label>
          <input type='text' name='title'/>
          <label htmlFor="">Entry</label>
          <input type="textarea" name="entry"/>
          <label htmlFor="">is ship broken</label>
          <input type="checkbox" name="shipIsBroken" id="" />
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    )
  }
}

export default New





