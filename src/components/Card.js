import { useState } from 'react';
import logo from '../logo.svg';
import Modal from './Modal';




function Card({image, title}) {
    const[open, setOpen] = useState(false)
    return (
        <>
                <div onClick={() => setOpen(true)} className='card'>
            <img src={image} />
            <h1>{title}</h1>
            <button>add to cart</button>
        </div>
        {open === true ?  <Modal setOpen={setOpen}  title={title}  image={image}/>  : ''     }
        </>

    )
}
export default Card