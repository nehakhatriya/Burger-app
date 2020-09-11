import React,{Component, Fragment} from 'react'
import Modal from './modal'
const withExceptionHandling =(WrappedComponent,axios)=>{
return class extends Component{

    state={ error:null}
    
    componentWillMount(){
        axios.interceptors.request.use( req=>req,error=>{
       this.setState({error:error})
        })   
        axios.interceptors.response.use( res=>res,error=>{
       this.setState({error:error})
        })   
    }
    closemodel=()=>{
        this.setState({error:null})
    }
render(){

    return(
        <Fragment>
            <Modal show={this.state.error} modalClosed={this.closemodel}>
                {this.state.error?this.state.error.message:null}
            </Modal>
            <WrappedComponent {...this.props}/>
        </Fragment>
    )
}
}
}

export default withExceptionHandling