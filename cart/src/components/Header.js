import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart, AiFillDelete } from 'react-icons/ai';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { GrFormClose } from 'react-icons/gr';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import gif from './gif.gif';
import Table from 'react-bootstrap/esm/Table';
import { Delete } from '../redux/action';


function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [price,setprice] = useState(0);
const dispatch = useDispatch();

    const datas = useSelector((state) => {
        return state.cartReducer.carts
    })

    const val = datas.length;

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const Total =() =>{
       let price = 0;
        datas.map((e)=>{
             price = (e.price + price)*e.qnty
        }
        )
        setprice(price)
    }

    useEffect(()=>{
        Total()
    },[Total])
    return (
        <div className='bg-dark text-white p-2'>
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <ul className='d-flex align-items-center custom'>
                            <li><Link to="/">Add to Cart</Link></li>
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </div>

                    <div>
                        <Badge badgeContent={val} color="primary">
                            <AiOutlineShoppingCart className='icons' id="demo-positioned-button"
                                aria-controls={open ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick} />
                        </Badge>
                    </div>

                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <div className='cart'>
                            <GrFormClose onClick={handleClose} className="position" />
                            {val === 0 ?
                                <div>
                                    <p>Your cart is empty</p>
                                    <img src={gif} className='img-fluid' />
                                </div> :
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>photo</th>
                                            <th>Restaurant</th>
                                            <th>  </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {datas.map((e, i) => {
                                            return (
                                                <tr key={i}>
                                                
                                                    <td><Link to={`/cart/${e.id}`}><img src={e.imgdata} className="img-fluid" alt='img' onClick={handleClose}></img></Link></td>
                                                    <td><small>{e.rname}</small><br></br><small>price: Rs.{e.price}</small><br></br><small>Quantity:{e.qnty}</small></td>
                                                    <td><AiFillDelete className='text-danger mx-2 delete' onClick={()=>{dispatch(Delete(e.id),handleClose())}}/></td>
                                                </tr>
                                            )
                                        })}
                                        <td><p>Total :{price}</p></td>
                                    </tbody>

                                </Table>}
                        </div>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Header