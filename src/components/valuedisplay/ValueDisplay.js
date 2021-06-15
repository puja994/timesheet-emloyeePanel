import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Spinner, Table} from 'react-bootstrap'
import {AllCalender} from './AllCalender'
import {fetchSelectedShift, fetchShifts} from '../../pages/calenderAction'
import { isSameDay, format } from 'date-fns'
import './valuedisplay.css'




export const ValueDisplay = () => {

  const history = useHistory();

  const { isLoading, selectedShiftList,shiftsList, status, message} = useSelector(
    (state) => state.shifts
  )
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShifts());
  }, [dispatch]);

  // const handle = _id =>{
  //   dispatch(fetchSelectedShift())
  //   console.log(_id)
  // }

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
 let firstThreeDaysInCominMonth = comingMonth.slice(0,-[das])
let readyArray = [...lastThreeDaysInLastMonth,...lastThreeDaysInCurrentMonthsliced]
let a = [...lastThreeDaysInLastMonth, ...currentMonthDays]

if(readyArray.length>totalDaysInMonth){
  return a
}
let x = new Date().getFullYear()
let d = new Date().toLocaleString('default', { month: 'short' })
const mnth = new Date().getMonth()
console.log(mnth, "sdfds")

const mny = format(new Date(), "yyyy-MM")
 console.log(isSameDay(format(new Date("2021-06-23"), "yyyy-MM-dd"), format(new Date("2021-06-23T00:00:00.000Z"), "yyyy-MM-dd") ))

 const handleOnClick = ()=>{
   alert("hi")
 }

    return (
        <div>
       <h1 style={{color:"black",textAlign:"center"}}> {x} {d} </h1>
        
<Table striped bordered hover >

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
          a.slice(i, i+7).map(day =>
          <td>
            <div>
                  <div className="date">
                  {day} 
                 </div>
              
                     <div className="shiftdata">
                         {shiftsList.length && shiftsList?.map((item,i)=>{
                           if(item && isSameDay(new Date(item.date), new Date(`${mny}-${day}`))){
                        
                              return <>
                              <ul >{item?.empInfo.map(row =>(
                                <>
                                <li>Employee: {row.name} </li>
                                <li>StartTime: {item.startTime}</li>
                                <li>EndTime: {item.endTime}</li>
                               </>


                              ))}</ul>


                              </>
                           }
                             
                          })}
                          </div>
            </div>
          </td>)
        }
      </tr>
    } 
  })
}    
  </tbody>
</Table>
        </div>
           
    )
    
         }
