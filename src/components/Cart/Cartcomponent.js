import React from 'react'
import {connect} from 'react-redux'
import {Container,Row,Col, Image,Button} from 'react-bootstrap'
import {RemoveItem,UpdateItem}from '../../redux/Cart/CartActions'
import CartEditcomponent from '../CartEditcomponent';
import  t1 from './images/T1.jpg'
import  t2 from './images/T2.jpg'
import  t3 from './images/T3.jpg'
import  t4 from './images/T4.jpg'
function Cartcomponent(props) {
   let aj10=5.9;
let price,sum=0;
   const clist=props.products;

   //edit model
   const [modalShow, setModalShow] = React.useState(false);
   const[pcode,SetPcode]=React.useState('')
   const[codevalue,setCodevalue]=React.useState(0)
    const applyCode=()=>{
        //SetPcode()
        if(pcode!=='')
        {
            setCodevalue(aj10)
        }
        else{setCodevalue(0)}
    }
   //calling modal
   const callModal=(item)=>{
        props.UpdateItem(item)
        setModalShow(true)
  
    }
   console.log(clist)
    return (
        <Container>
         <Row><Col><hr/><h5>{clist.items.length} ITEMS</h5><hr/></Col></Row>
        <Row>
     <Col></Col>
    <Col sm={6}></Col>
    <Col>SIZE</Col>
    <Col>QUANTITY</Col>
     <Col>PRICE</Col>   
     </Row>
    
 { clist.items.map(item=><Row key={item.p_id}>
    <Col>
     <Image src={item.p_id==='1'?t1 :item.p_id==='2'?t2:
           item.p_id==='3'?t3:t4}  width='100px' height='100px' ></Image></Col>
    <Col sm={6}><div className="conatainer text-center">
         <h6 className="text text-center text-uppercase">{item.p_name}</h6>
         <h6 className="text text-center text-uppercase">Style#:{item.p_style}</h6>
         <h6 className="text text-center text-uppercase" >COLOR:{item.p_selected_color.name}</h6>
    
    <Button variant="link primary" size="sm" onClick={()=>{callModal(item)}}>EDIT</Button>|
    <Button variant="link primary" size="sm" onClick={()=>props.DeleteItem(item)}>X REMOVE</Button>|
    <Button variant="link primary" size="sm">SAVE FOR LATER</Button>
    </div>
     <hr></hr></Col>
    <Col><h6 className="text text-center text-uppercase">{item.p_selected_size.code}</h6></Col>
    <Col><h6 className="text text-center text-uppercase">{item.p_quantity}</h6></Col>
     <Col>
        <h6> <del>{item.p_originalprice!==item.p_price ?item.p_originalprice:""}</del></h6>
        <h6> {item.c_currency}{price=(item.p_originalprice===item.p_price ? item.p_originalprice:item.p_price)} </h6>
               {console.log(sum=sum+(price*item.p_quantity))} 
               </Col>
               {<CartEditcomponent product={item} show={modalShow} onHide={() => setModalShow(false)}/>}    
</Row>)
 }
<Row>
   
   <Col></Col>
   <Col>  
   <table>
    <tr>
    <td><h6 className="text-uppercase">Enter promocode or  Gift card(AJ10) if u have</h6></td>
    <td><input type="text" value={pcode} onChange={(e)=>SetPcode(e.target.value)}></input>
    <Button variant="primary" onClick={(e)=>{applyCode()}}>APPLY</Button></td>
    </tr>
   <tr>
   <td> <h6 className="text-uppercase">sub total:</h6></td>
   <td>${sum}</td>
   </tr>
   <tr>
   <td> <h6 className="text-uppercase">Promotional Code Applied:</h6></td>
   <td>${codevalue}</td>
   </tr>
   <tr>
   <td> <h6 className="text-uppercase">estimated shipping:</h6><span>if Toatal is above $50 you are eligible for free shipping</span></td>
   <td>{(sum-codevalue>=50?"FREE":"PAY FOR SHIPPING")}<hr/></td>
   </tr>
   <tr><td> <h6 className="text-uppercase">estimated  total:</h6><span>Tax Will be applied during Checkout</span></td>
   <td>${sum-codevalue}</td>
   </tr>
   <tr><td><Button  variant="link" className="text-uppercase">Continue shopping</Button></td><td><Button>CHECKOUT</Button></td></tr>
   <tr><td><hr/></td></tr>
   </table>
   </Col></Row>
     
    
   </Container>
    )
}

const mapStateTOProps=(state)=>{
         return{products:state}
 }
const mapDispatchTOProps=(dispatch)=>{
    return{
        DeleteItem:(item)=>dispatch(RemoveItem(item)),
        UpdateItem:(item)=>dispatch(UpdateItem(item))
    }

}

export default connect(mapStateTOProps,mapDispatchTOProps)(Cartcomponent)
