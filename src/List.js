import React from 'react';
import store from './store'
import './List.css';

export default function Bench(props) {
  /**
   * PROPS:
   * 1. title {string} a title to be displayed
   * 2. handleClick {function} something to do when
   * one item is clicked on.
   * 3. list {Array<string>} a list of strings to be displayed.
   */

   function handleClick(player) {
     store.dispatch({
       type: 'player/SEND_PLAYER_TO_COURT',
       payload: player
     })
   }

  var list = props.list.map((item, i) => {
    return <li key={i} onClick={handleClick.bind(null, item)} > {item}</li>
  })
  return (
    <div className="list">
      <h1>{props.title}</h1>
      <ul>
        {list}
      </ul>
    </div>
  )
}
