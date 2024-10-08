import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import { useState } from "react";
import { newUsers } from "./APICalls";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function CreateUsers({newdetails,setNewDetails}){
  const [name,setName]= useState("")
  const [username,setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address,setAddress]= useState("");
  const [street,setStreet] = useState("");
  const [city,setCity] = useState("");
  const [zip,setZip] = useState("");
  const [phoneno,setPhoneNo] = useState("");
  const [website,setWebsite] = useState("");
  const navigate = useNavigate()


  

    const AddnewUsers = ()=> {

      const addNewUsersDetails = {
        name_user : name ,
        username_user :username ,
        email_user :email ,
        address_user : address,
        street_user : street,
        city_user : city,
        zipcode_user : zip,
        phone_user :phoneno ,
        website_user :website ,
      };
      console.log(addNewUsersDetails);
      newUsers(addNewUsersDetails).then((data)=>{
        if(data){
          setNewDetails([...newdetails, addNewUsersDetails]);
          navigate("/");
        }
        else{
          console.log("Sorry can not add new Users");
        }
      })

    }


  
    return (
      <div>
        <TopBar/>
        <div className='container-fluid '>
                <Form>
                    <Form.Group className="mb-3 ">
                      <Form.Label className="fw-bold">Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label className="fw-bold">Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" value={username}  onChange={(e)=>{setUserName(e.target.value)}}/>
                          </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label className="fw-bold">Email</Form.Label>
                          <Form.Control type='email' placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Label className="fw-bold">Address</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Door No.' value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                        </Form.Group>
                        <Form.Label className="fw-bold">Street</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Street' value={street} onChange={(e)=>{setStreet(e.target.value)}}/>
                        </Form.Group>
                        <Form.Label className="fw-bold">City</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter City' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                        </Form.Group>
                        <Form.Label className="fw-bold">Zip Code</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Zipcode' value={zip} onChange={(e)=>{setZip(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label className="fw-bold">Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" value={phoneno} onChange={(e)=>{setPhoneNo(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label className="fw-bold">Website</Form.Label>
                            <Form.Control type="text" placeholder="Enter Website" value={website}  onChange={(e)=>{setWebsite(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    
                    <Button variant="primary" onClick={AddnewUsers}>Submit</Button>
                </Form>    
        </div>
        </div>
    )
}
export default CreateUsers;