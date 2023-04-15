import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import "./home.scss"
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'

import Table from '../../components/Table/Table'

export const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <div className="widgets">
              <Widget type="user"/>
              <Widget type="order"/>
              <Widget type="earning"/>
              <Widget type="balance"/>
            </div>

            <div className="charts">
              <Feature />
              <Chart aspect={3 / 1} title="User spending ( Last 6 Months )"/>
            </div>

            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              <Table />
            </div>
        </div>
    </div>
  )
}
