import React, {useState, useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { ValueDisplay } from '../valuedisplay/ValueDisplay'
import {fetchShifts, fetchSelectedShift} from '../../pages/calenderAction'
import {Button, Spinner} from 'react-bootstrap'


export const CalenderView = () => {

  const history = useHistory();

  const { isLoading, shiftsList,  status, message} = useSelector(
    (state) => state.shifts
  )
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSelectedShift());
  }, [dispatch])

  // const handle = _id =>{
  //   dispatch(fetchSelectedShift())
  //   console.log(_id)
  // }
  return (
  
      <div>

      {/* {isLoading && <Spinner variant="primary" animation="border" />}
      {
        shiftsList?.map((item,i)=>{
          return(
            <>

            <h1>{item.date}</h1>
 
          
            <ul>{item?.empInfo.map(row => (
              <li>{row.name}</li>
            ))}</ul>
           
            </>
          )
        })
      } */}


            

        <ValueDisplay />

      </div>

    
  )
}
