import React, { Fragment } from 'react'
import classes from './modal.module.css'
import Backdrop from './backdrop'
const Modal =(props)=>{

    return(
        <Fragment>
            <Backdrop click={props.modalClosed } show={props.show}/>
            <div className={classes.Modal} style={{transform:props.show?'translateY(0)':'translateY(-100vh)', opacity:props.show?'1':'0'}}>
            {props.children}
             </div>
            
        </Fragment>
       
    )
}

export default Modal;