import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { AiFillStar,AiFillDelete } from 'react-icons/ai';
import {useParams,useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { Delete } from '../redux/action';
import { Add,Dec } from '../redux/action';


function CardDetail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data,setdata] = useState({})

    const data1 = useSelector((state)=>{
        return state.cartReducer.carts
    })

    const fetch = () =>{
        setdata(data1.find((e)=> e.id == id));
    }

    useEffect(()=>{
        fetch();
    },[id,fetch,dispatch])

    console.log(data)
    return (
        <div className='container mt-2'>
            <div className='text-center'>
                <h2>Items Detail Page</h2>
            </div>
            <section className='container mt-3'>
                <div className='cards-design-1 d-flex'>
                    <div className='items img'>
                        <img src={data.imgdata} className='height-image'></img>
                    </div>
                    <div className='details'>
                        <Table>
                            <tr>
                                <td><p><strong>Restaurant</strong>: {data.rname}</p>

                                    <p><strong>Price</strong>: Rs {data.price}</p>

                                    <p><strong>Dishes</strong>: {data.address}</p>

                                    <p><strong>Total</strong>:Rs {data.price*data.qnty}</p>

                                    <div className='d-flex align-items-center justify-content-between bg-dark text-white p-2 mx-2'style={{width:"100px",height:"35px"}}>
                                        <p onClick={()=>{dispatch(Add(data))}} style={{cursor:"pointer",margin:"0px"}}>+</p>
                                        <p style={{margin:"0px"}}>{data.qnty}</p>
                                        <p onClick={()=>{dispatch(Dec(data))}}style={{cursor:"pointer",margin:"0px"}}>-</p>
                                    </div>
                                </td>

                                <tr>
                                    <td><p><strong>Rating:</strong><span className=' btn btn-success p-1 mx-2'>{data.rating}<AiFillStar /></span></p>
                                    <p><strong>order Review:</strong>{data.somedata}</p>
                                    <p><strong>Remove:</strong><AiFillDelete className='text-danger mx-2 delete' onClick={()=>{dispatch(Delete(id),navigate("/"))}}/></p>
                                    </td>
                                </tr>
                            </tr>
                        </Table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CardDetail