import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Spinner, Table} from 'react-bootstrap'




export const ValueDisplay = () => {

let firstDay = (new Date(2021,6)).getDay()
let totalDaysInMonth = new Date(2021, 6, 0).getDate()
//first day of current month.
 let date = new Date()
 const das = new Date(date. getFullYear(), date. getMonth(), 1).getDay()
 //last days of month
 //filling array with days
let currentMonthDays = Array(new Date(2021, 6, 0).getDate()).fill(0).map((e,i)=>i+1)
let lastThreeDaysInCurrentMonthsliced = currentMonthDays.slice(0,-[das])
//totalDaysInLastMonth
let totalDaysInLastMonth = Array(new Date(2021, 5, 0).getDate()).fill(0).map((e,i)=>i+1)
let lastThreeDaysInLastMonth = totalDaysInLastMonth.slice(-[das])
 let comingMonth = Array(new Date(2021, 7, 0).getDate()).fill(0).map((e,i)=>i+1)
 let firstThreeDaysInCominMonth = comingMonth.slice(0,[das])
let readyArray = [...lastThreeDaysInLastMonth,...lastThreeDaysInCurrentMonthsliced]

const firstRow = []
 for(let i=0; i<7; i++){
 firstRow.push (readyArray[i])
}
const secondRow = []
for(let j=7; j<14; j++){
  secondRow.push(readyArray[j]) 
}
const thirdRow = []
for(let i=14; i<21; i++){
  thirdRow.push(readyArray[i])
}
const fourthRow = []
for(let i=21; i<28; i++){
  fourthRow.push(readyArray[i])
}
const fifthRow = []
for(let i=28; i<35; i++){
  fifthRow.push(readyArray[i])
}




    return (
        <div>
           
<Table striped bordered hover>
  <thead>
    <tr>
      <th>SUNDAY</th>
      <th>MONDAY</th>
      <th>TUESDAY</th>
      <th>WEDNESDAY</th>
      <th>THURSDAY</th>
      <th>FRIDAY</th>
      <th>SATURDAY</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>{firstRow[0]}</td>
    <td>{firstRow[1]}</td>
    <td>{firstRow[2]}</td>
    <td>{firstRow[3]}</td>
    <td>{firstRow[4]}</td>
    <td>{firstRow[5]}</td>
    <td>{firstRow[6]}</td>
  </tr>

  <tr>
    <td>{secondRow[0]}</td>
    <td>{secondRow[1]}</td>
    <td>{secondRow[2]}</td>
    <td>{secondRow[3]}</td>
    <td>{secondRow[4]}</td>
    <td>{secondRow[5]}</td>
    <td>{secondRow[6]}</td>
  </tr>

  <tr>
    <td>{thirdRow[0]}</td>
    <td>{thirdRow[1]}</td>
    <td>{thirdRow[2]}</td>
    <td>{thirdRow[3]}</td>
    <td>{thirdRow[4]}</td>
    <td>{thirdRow[5]}</td>
    <td>{thirdRow[6]}</td>
  </tr>

  <tr>
    <td>{fourthRow[0]}</td>
    <td>{fourthRow[1]}</td>
    <td>{fourthRow[2]}</td>
    <td>{fourthRow[3]}</td>
    <td>{fourthRow[4]}</td>
    <td>{fourthRow[5]}</td>
    <td>{fourthRow[6]}</td>
  </tr>

  <tr>
    <td>{fifthRow[0]}</td>
    <td>{fifthRow[1]}</td>
    <td>{fifthRow[2]}</td>
    <td>{fifthRow[3]}</td>
    <td>{fifthRow[4]}</td>
    <td>{fifthRow[5]}</td>
    <td>{fifthRow[6]}</td>
  </tr>
   
      
  </tbody>
</Table>

    
         
        </div>
           
    )   
    
    }
