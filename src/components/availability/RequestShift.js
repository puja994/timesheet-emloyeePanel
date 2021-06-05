import React, {useState, useEffect} from 'react'
import {Col, Form, InputGroup, Button, Jumbotron, Alert} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import {fetchAvailability, addNewAvailability,deleteAvailability} from '../../pages/availability/availabilityAction'
import {Spinner} from 'react-bootstrap'



const initialState = {
    name: "",
    date: new Date().toLocaleDateString(),
  startTime: new Date().toLocaleTimeString(),
  endTime: new Date().toLocaleTimeString()

}
export const RequestShift = () => {
  const dispatch = useDispatch()
  // const history = useHistory();
  const [availability, setAvailability] = useState(initialState)
  const { isLoading, availabilityResponse, availabilityList, deleteMsg} = useSelector(state => state.availability)
  

    const handleOnChange = e => {
        const {name, value} = e.target

        setAvailability({
          ...availability,
          [name]: value,
        })
      }

      const handleOnSubmit = e => {
        e.preventDefault()
       dispatch(addNewAvailability(availability))
    
      }

      const {message,status} = availabilityResponse
    return (
        <div>
                    <h2 variant= "info"style={{color:"black",textAlign:"center"}}>Provide your availability here</h2>
       <Jumbotron>

       {isLoading && <Spinner variant="primary" animation="border" />}

{message && (
  <Alert variant={status === "success" ? "success" : "danger"}>
    {message}
  </Alert>
)}
          
           <Form onSubmit= {handleOnSubmit}>
           <Form.Group as={Col} controlId="formGridState">
           <Form.Label>Enter your Name:</Form.Label>
           <input
            type="name"
            name="name"
            value={availability.name}
            onChange={handleOnChange}

            ></input>

     <Form.Group as={Col} controlId = "formGridState">
      <Form.Label>Shift Date</Form.Label>
      <Form.Control 
      name="date"
      type="date"
      value= {availability.date}
      onChange={handleOnChange}
     />

    </Form.Group>

     <Form.Group as={Col} controlId = "formGridState">
      <Form.Label>Shift Start Time</Form.Label>
      <Form.Control
       name="startTime"
       type="time"
       value= {availability.startTime}
       onChange= {handleOnChange}
     
        />
    </Form.Group> 


    <Form.Group as={Col} controlId = "formGridState">
      <Form.Label>Shift End Time</Form.Label>
      <Form.Control
       name="endTime"
       type="time"
       value={availability.endTime}
       onChange={handleOnChange}
    
        />
    </Form.Group> 

    <Button type="submit" variant="info" block>Request Shift</Button>


           </Form.Group>
           </Form>
          
           </Jumbotron>
       
           </div>
    )
}
