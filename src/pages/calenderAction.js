import { requestPending,
    addShiftSuccess, fetchShiftSuccess, deleteShiftSuccess,
    requestFail,selectedShiftSucess} from './calenderSlice'

import { getShifts, getAShift, } from '../components/apis/shiftAPI'

// export const addNewShift = frmDt => async dispatch => {
//     try{
//         dispatch(requestPending())
//         const result = await saveShift(frmDt)
//         console.log(result)
//         dispatch(addShiftSuccess(result))
        

//         result.status === "success" && dispatch(fetchShifts())

//     }catch(error){
//         const err = {
// 			status: "error",
// 			message: error.message,
// 		};

// 		dispatch(requestFail(err))
//     }
// }

export const fetchShifts = () => async dispatch => {
    try{
        dispatch(requestPending())
        const result = await getShifts()
        dispatch(fetchShiftSuccess(result))

    }catch(error){
        const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err))

    }
}

// export const deleteShift = _id => async dispatch => {
// 	try {
// 		dispatch(requestPending());

// 		const result = await shiftDelete(_id); //{status, message, result:[]}

// 		dispatch(deleteShiftSuccess(result));

// 		result.status === "success" && dispatch(fetchShifts());
// 	} catch (error) {
// 		const err = {
// 			status: "error",
// 			message: error.message,
// 		};

// 		dispatch(requestFail(err));
// 	}
// };

export const fetchSelectedShift = (_id) => async (dispatch) => {
    try {
      dispatch(requestPending());
  
      const result = await getAShift(_id)
      dispatch(selectedShiftSucess(result));
    } catch (error) {
      console.log(error);
      const err = {
        status: "error",
        message: error.message,
      };
  
      dispatch(requestFail(err));
    }
  };
