import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import interactionPlugin from "@fullcalendar/interaction";
// import {fetchShiftSuccess} from '../../pages/calenderSlice'
import {useHistory} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'


// const dateClick = () => {
//   alert("got hit")
// }
// const handleDateClick = (arg) => { 
//   alert(arg.dateStr)
// }



export const ValueDisplay = () => {

  // const history = useHistory()

  // const {isLoading, shiftsList, status, message } = useSelector(
  //   (state) => state.shifts
  // )

  // const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(fetchShiftSuccess())
  // }, [dispatch])

  // const events = ["monday", "tues", "wed"] 

    return (
        <div>

          {/* {isLoading && <Spinner variant ="primary" animation="border" />} */}
          {/* {shiftsList?.map((item, i)=>{ */}
            return(

              <FullCalendar
  plugins={[ dayGridPlugin]}
  initialView="dayGridMonth"
  weekends={true}
  events={[
    { title: 'puja', date: '2021-05-31', duration: '2:00' },
    { title: 'event 2', date: '2019-04-02' }
  ]} 
  />

            )
          {/* })} */}


         
        </div>
           
        
    )
}
