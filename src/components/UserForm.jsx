import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { editCardData, saveCard } from '../CardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const UserFrom = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const flag = useSelector(state => state.card.updateFlag)
  const index = useSelector(state => state.card.updateIndex)
  const cards = useSelector(state => state.card.list)

  const [data, setdata] = useState({
    name:"",
    address:"",
    age:"",
    email:""
  })

  useEffect(() => {
    if(flag){
      let currCard = cards[index]
      setdata({
        name: currCard?.name,
        address:currCard?.address,
        age:currCard?.age,
        email:currCard?.email
      })
    }
    else return
  }, [])
  

  const changeHandler = (e)=>{
    const {name , value} = e.target
    setdata({
      ...data,
      [name]:value
    })
  }

  const clickHandler = ()=>{
    if(!flag){
    dispatch(saveCard(data))
    navigate("/")
    }
    else{
      dispatch(editCardData(data))
       navigate("/")
    }
  }


  return (
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control required value={data.name} onChange={changeHandler} name="name" type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control required value={data.address} onChange={changeHandler} name="address" type="text" placeholder="Enter Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control value={data.age} onChange={changeHandler} name="age" type="number" placeholder="Enter age" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control value={data.email} onChange={changeHandler} name="email" type="email" placeholder="Enter Email" />
      </Form.Group>
      <Button variant="primary" onClick={clickHandler}>
        {!flag?"Add User":"Update"}
      </Button>
      {/* <Button onClick={()=>navigate('/')} variant="primary" size="md">
          Main Page
        </Button> */}
    </Form>
  )
}

export default UserFrom