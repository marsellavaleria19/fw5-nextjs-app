// import { Button } from "bootstrap";
import { Col, Container, NavItem, Row } from "react-bootstrap";
import CButton from "../../component/CButton";
import Layout from "../../component/Layout";
import information from "../../styles/information.module.scss";
import variables from "../../styles/transaction.module.scss";
import Image from 'next/image';
import Input from "../../component/Input";
import { getAllDataUser } from "../../redux/actions/user";
import { getDataReceiver } from "../../redux/actions/transaction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
// import NavbarComponent from "../component/NavbarComponent";

const Receiver = () => {
    const {user,auth} = useSelector(state=>state)
//     const [listUser,setListUser] = useState([{id:5,fullName:'Bella Safira',picture:null,phone:[{id:4,userId:5,isPrimary:1,phone:"089999999"}]},
// {id:6,fullName:'Adam Smith',picture:null,phone:[]}])
    const dispatch = useDispatch()
    const route = useRouter()


    useEffect(()=>{
       dispatch(getAllDataUser(auth.token))
    },[])

    const handleReceiver = (item,phone=null)=>{
        dispatch(getDataReceiver(item,phone))
        route.push('/transaction/form')
    }

    // const listAllDataUser = ()=>{
    //     // dispatch(getAllDataUser(auth.token))
    //     // var listTemp = setuser.listUser.length>0 && auth.user!==null && user.listUser.filter((item)=>item.id!==auth.user.id).map((item)=>{
    //     //     return item
    //     // })

    //     // setListUser(listTemp)
    // }
    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-3">
                    <div className="fs-4 mb-3 fw-bold text-primary">Search Receiver</div>
                    <Input type="text" placeholder="Search" className={variables.search}/>   
                    {
                       user.listUser.length>0 && auth.user!==null && user.listUser.filter((item)=>item.id!==auth.user.id).map((item)=>{
                            return(
                                <>
                                    {
                                        item.phone.length > 0 ?
                                        item.phone.map((itemPhone)=>{
                                            return(<Row className={`${information.list} mt-3 mb-3 ms-3 me-3`} key={itemPhone.id} onClick={()=>handleReceiver(item,itemPhone)}>
                                                <Col xs={2}>
                                                    <Image src={item.picture===null ? "/images/profile.png" : item.picture} width={50} height={50}/>
                                                </Col>
                                                <Col xs={5}>
                                                    <div className="fs-4 text-primary">{item.fullName}</div>
                                                    <div className="fs-6 text-primary">{itemPhone.number}</div>
                                                </Col>
                                            </Row>) 
                                        }) 
                                        :
                                          <Row className={`${information.list} mt-3 mb-3 ms-3 me-3`} key={item.id} onClick={()=>handleReceiver(item)}>
                                          <Col xs={2}>
                                                <Image src={item.picture===null || item.picture=="undefined" ? "/images/profile.png" : item.picture} width={50} height={50}/>
                                            </Col>
                                          <Col xs={5}>
                                              <div className="fs-4 text-primary">{item.fullName}</div>
                                              <div className="fs-6 text-primary">-</div>
                                          </Col>
                                      </Row>
                                    }
                                </>
                            )
                        })
                    }
                    
                    
                    {/* <Row className={`${information.list} mt-3 mb-3 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/2.png" width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </Col>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/2.png" width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </Col>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/2.png" width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </Col>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/2.png" width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </Col>
                    </Row> */}
                </Container>
            </div>          
        </Layout>
    )
}

export default Receiver