import React, { useState } from 'react';
import Cardsdata from './CardsData';
import { useDispatch } from 'react-redux/es/exports';
import { Add } from '../redux/action';

function Card() {
    const [data, setdata] = useState(Cardsdata);
    const dispatch = useDispatch();
    

    return (
        <div className='container mt-2'>
            <div>
                <h2 className='text-center'>Add To Cart</h2>
                <hr></hr>
            </div>

            <div className='mt-3'>
                <div className='row'>
                    {data.map((e,i) => {
                        return (
                            <div className='col-md-4 mb-3' key={i}>
                                <div className='cards-design'>
                                    <div>
                                        <img src={e.imgdata} className="img-fluid height-image" />
                                        <div className='mt-2'>
                                            <h6>{e.rname}</h6>
                                            <p>RS.{e.price}</p>
                                            <div className='d-flex justify-content-center'>
                                                <button className='btn btn-primary form-control' onClick={()=>{dispatch(Add(e))}}>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default Card