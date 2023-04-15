import React from 'react'
import "./single.scss"
import Sidebar from "./../../components/sidebar/Sidebar"
import Navbar from "./../../components/navbar/Navbar"
import Chart from "./../../components/chart/Chart"
import List from '../../components/Table/Table'
export default function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
              <div className="editButton"> Edit </div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src="https://media.istockphoto.com/id/1188980757/vector/young-man-anime-style-character.jpg?s=612x612&w=0&k=20&c=uOfXeG7GdMpLqEXPDNA8KbZgEZdIDk9JhvAfIE1_D9A=" alt="" className="itemImg" />
                
                <div className="details">
                  <h1 className="itemTitle">John Wick</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email : </span>
                    <span className="itemValue">abcd123@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone. No : </span>
                    <span className="itemValue">+1 234 567 890</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address :</span>
                    <span className="itemValue"> ABC house, Third Street, City.</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country : </span>
                    <span className="itemValue">United kingdom</span>
                  </div>
                </div>
              </div>
          </div>
          <div className="right">
            <Chart aspect = { 4 / 1} title="User Spending ( Last 6 Months )"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}
