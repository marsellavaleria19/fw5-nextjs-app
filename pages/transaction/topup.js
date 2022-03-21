// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import {FaTrash} from "react-icons/fa";
import Layout from "../../component/Layout";
import information from "../../styles/information.module.scss";
import transactionStyle from "../../styles/transaction.module.scss"
import input from "../../styles/input.module.scss";
import Image from 'next/image';
import Input from "../../component/Input";
import CButton from "../../component/CButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAllDataUser } from "../../redux/actions/user";
import { useSelector,useDispatch } from "react-redux";
import {FaPencilAlt} from 'react-icons/fa'
import { Form } from "react-bootstrap";
import {addTopup } from "../../redux/actions/transaction";

// import NavbarComponent from "../component/NavbarComponent";

const Topup= () =>{
    const {topup,auth} = useSelector(state=>state)
    const route = useRouter()
    const [error,setError] = useState({})
    const dispatch = useDispatch()
    
    const validation = (amount)=>{
        const newErrors = {}
        if(!amount || amount===''){
            newErrors.amount = 'Amount must be filled'
        }else if(amount<10000){
            newErrors.amount = 'Amount must be grather than 10000'
        }

        return newErrors;
    }

    const handleTopup = (event)=>{
        event.preventDefault()
        var amount =  event.target.elements["amount"].value
        var validate = validation(amount)
        if(Object.keys(validate).length > 0){
            setError(validate)
        }else{
            dispatch(addTopup(amount,auth.token))
            route.push("/home")
            setError({})
        }
    }

    // const handleChange = (event) =>{
    //     console.log("masuk!!")
    //     let value = event.target.value
    //     if(event.target.name=="amount"){
    //         setAmount(value)
    //     }
    // }


    return (  
        <Layout>          
            <div className={information.information}>
                <Container className="pt-3">
                    <div className="fs-4 mb-5 fw-bold text-primary">Topup</div>
                    <div className="mt-5 mb-5 ms-3">
                        <p className="fs-6 text-primary">Type the amount you want to topup.</p>
                    </div>
                    <Form className="text-center mt-5 ms-3 me-3" onSubmit={handleTopup}>
                            <div className={`${input.inputContainer} mt-5 mb-5`}>
                                <Input type="text" name="amount" className={input.textLoginSignup} placeholder="Amount"/>
                            </div>
                            {error!==null && error.amount ? <div className={input.error}>{error.amount}</div> : '' }
                            <div className="text-end mb-4">
                                <CButton type="submit" className={input.buttonTransaction}>Topup</CButton>
                            </div>
                        </Form>
                </Container>
            </div>          
        </Layout>
     )
}

export default Topup