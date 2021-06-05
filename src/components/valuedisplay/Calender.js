// import React, {useEffect, useState} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import {useHistory} from 'react-router-dom'
// import {ValueDisplay} from './ValueDisplay'
// import {fetchShifts} from '../../pages/calenderAction'

// export const Calender = () => {

//     const history = useHistory();

//   const { isLoading, shiftsList, status, message} = useSelector(
//     (state) => state.shifts
//   )
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchShifts());
//   }, [dispatch]);


//     return (
//         <div>
//             {isLoading && <Spinner variant="primary" animation="border" />}
//        {shiftsList?.map((item,i)=> {
//          return()}}

//             // <ValueDisplay/>
//         </div>
//     )
// }
