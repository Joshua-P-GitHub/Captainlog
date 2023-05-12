import React, { Component } from 'react'

export class New extends Component {
  render() {
    return (
      <div>
        <form action='/logs' method='POST'>
          <input type='text' name='title'/>
          <input type="textarea" name="entry"/>
          <input type="checkbox" name="shipIsBroken" id="" />
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    )
  }
}

export default New





