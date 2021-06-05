import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Spinner, Table} from 'react-bootstrap'
import {AllCalender} from './AllCalender'
import {fetchShifts} from '../../pages/calenderAction'




export const ValueDisplay = () => {

  const history = useHistory();

  const { isLoading, shiftsList, status, message} = useSelector(
    (state) => state.shifts
  )
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShifts());
  }, [dispatch]);

  //june

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
let a = [...lastThreeDaysInLastMonth, ...currentMonthDays]

if(readyArray.length>totalDaysInMonth){
  return a
}



// const firstRow = []
//  for(let i=0; i<7; i++){
//  firstRow.push (a[i])
// }
// const secondRow = []
// for(let j=7; j<14; j++){
//   secondRow.push(a[j]) 
// }
// const thirdRow = []
// for(let i=14; i<21; i++){
//   thirdRow.push(a[i])
// }
// const fourthRow = []
// for(let i=21; i<28; i++){
//   fourthRow.push(a[i])
// }
// const fifthRow = []
// for(let i=28; i<35; i++){
//   fifthRow.push(a[i])
// }

let x = new Date().getFullYear() 
let d = new Date().toLocaleString('default', { month: 'long' })

const getShiftPerDay = (day) =>{



  return "for " + day + " day"
}

    return (
        <div>
       <h1 style={{color:"black",textAlign:"center"}}> {x} {d} </h1>
       {/* {isLoading && <Spinner variant="primary" animation="border" />}
       {shiftsList?.map((item,i)=> {
         return( */}

        
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

    
{



  a.map((row, i) =>{
    if(i === 0 || i % 7 === 0){
      return <tr>
        {
          a.slice(i, i+7).map(itm =><td>
            <div>
<div className="date">
{itm}
</div>
<div className="shiftData">{
  getShiftPerDay(itm)
}
</div>
            </div>
          </td>)
        }
      </tr>
    } 
  })
}
    
{/* 
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
    */}
      
  </tbody>
</Table>

    

{/* })}   */}
        </div>
           
    )
    
         }
