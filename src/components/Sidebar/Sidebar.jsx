import React from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from '../ExpandMoreIcon/ExpandMoreIcon'
import AddIcon from '../AddIcon/AddIcon'


function Sidebar() {
  return (
    <div className='sidebar'>

      <h2>I am the sidebar</h2>

      <div className="sidebar_top">
        <h3>Gustavo Silva</h3>
        <ExpandMoreIcon />
      </div>  

      <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
          <div className="sidebar_header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div> 
            <AddIcon />
        </div>
      </div>

    </div>
  )
}

export default Sidebar