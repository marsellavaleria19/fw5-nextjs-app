// import { Button } from "bootstrap";
import { Col, Container, Row,Form,Alert } from "react-bootstrap";
import CButton from "../../component/CButton";
import Layout from "../../component/Layout";
import information from "../../styles/information.module.scss";
import PinInput from "react-pin-input"
import { useState } from "react";
// import NavbarComponent from "../component/NavbarComponent";

const ChangePin= () =>{
    
    const [pin,setPin] = useState(0)
    const [complete,setComplete] = useState(false)
    const [error,setError] = useState("")
    
    const handlePin = (event)=>{
        event.preventDefault()
        dispatch(changePinProcess(null,pin,auth.token))
        if(!changePin.isErrpr){
            route.push("/profile")
        }
    }

    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-5">
                    <div className="fs-5 mb-3 ms-4 fw-bold text-primary">Change Pin</div>
                    <p className="ms-4 text-primary">Type your new 6 digits security PIN to use in On-wallet..</p>
                        <Form className="text-center mt-5" onSubmit={handlePin}>
                            <PinInput 
                                length={6} 
                                initialValue=""
                                onChange={(value, index) => {
                                    setComplete(false)
                                }} 
                                type="numeric" 
                                inputMode="number"
                                onComplete={(value, index) => {
                                    console.log("complete!!")
                                    setPin(value)
                                    setComplete(true)
                                }}
                                autoSelect={true}
                                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                                />
                                <div className="mt-5">
                                    <CButton disabled={!complete}>Change Pin</CButton> 
                                {/* {
                                    !complete ? <CButton disabled>Change Pin</CButton> : <CButton type="submit">Change Pin</CButton>
                                } */}
                            </div>
                        </Form>
                </Container>
            </div>          
        </Layout>
    )
}

export default ChangePin