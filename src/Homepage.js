import React from 'react'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import Title from './components/Title'
import Top from './components/Top Navigation'

export default function Homepage() {
    return (
            <div>
       <Title />
        {/* Favicon*/}
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        {/* Core theme CSS (includes Bootstrap)*/}
        <link href="css/styles.css" rel="stylesheet" />
        <div className="d-flex" id="wrapper">
            {/* Sidebar*/}
           <Sidebar />
            {/* Page content wrapper*/}
            <div id="page-content-wrapper">
            {/* Top navigation*/}
           <Top />
            {/* Page content*/}
           <Content />
            </div>
        </div>
        </div>

    )
}
