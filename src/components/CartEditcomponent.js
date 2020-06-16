
import React,{useState} from 'react'
import{Modal,Button,Container,Row,Col,Image} from 'react-bootstrap'
import{connect} from 'react-redux'
import  t1 from './Cart/images/T1.jpg'
import  t2 from './Cart/images/T2.jpg'
import  t3 from './Cart/images/T3.jpg'
import  t4 from './Cart/images/T4.jpg'

function CartEditcomponent(props) {
    console.log(props.products)
    console.log(props.item)
    const {products,item}=props
    let scolor=item.p_selected_color?.name
    let ssize=item.p_selected_size?.code
    console.log(scolor)
    console.log(ssize)
    const[changecolor,setChangecolor]=useState('')
    const[changesize,setChangeSize]=useState('')
    const[changeqty,setChangeqty]=useState(1)
    
    const modifyItem=()=>{
        props.onHide()
    }
    
    return (
      
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         MODIFY THE PRODUCT
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>ITEM DETAILS</h4>
        <Container fluid>
  <Row>
    <Col className="text-center">
    <h1 className="text-uppercase">{item.p_name}</h1>
    <h2><del>{item.p_originalprice!==item.p_price ?item.p_originalprice:""}</del></h2>
    <h2>{item.c_currency}{item.p_originalprice===item.p_price ? item.p_originalprice:item.p_price}</h2>
    <h2 className="text-uppercase">{item.p_style}</h2>
     
     <h6>Available Colors:</h6>
     {
         item.p_available_options?.colors.map(icolor=><Button key={icolor.name} style={{backgroundColor: icolor?.hexcode}} 
         onClick={()=>{setChangecolor(icolor?.name)}} >

         </Button>)
        
      }
    <h6>Changed Color:{changecolor}</h6>
    {console.log({changecolor})}
    {console.log(item.p_selected_color?.name)}
    {item.p_selected_color?.name==changecolor}
    {console.log(item.p_selected_color?.name)}
   
    <select className="mdb-select md-form" onClick={(e)=>{setChangeSize(e.target.value)}}>
  {/* <option value={changesize} disabled selected>Choose your size</option> */}
  { item.p_available_options?.sizes.map(csize=><option key={csize?.code} value={csize?.code}>{csize?.name}</option>)}
  </select>
  <h6 className="text-uppercase">Selected size:{changesize}</h6>
  {item.p_selected_size?.code===changesize}
  <h6>Choose Quantity</h6><input value={changeqty} type="number" onChange={(e)=>{setChangeqty(e.target.value)}}></input><br/>
  {item?.p_quantity===changeqty  }
{/* {console.log(item)} */}
{console.log(products)}
    {products.map(product=>{
         if(product.p_id===item.p_id){
           if(changecolor===""){
           product.p_selected_color.name=item.p_selected_color.name
          }else{
            product.p_selected_color.name=changecolor
          }
           product.p_quantity=changeqty
           if(changesize===""){
           product.p_selected_size.code=item.p_selected_size.code
           }
           else{ product.p_selected_size.code=changesize}
         }
    })}
    {console.log(products)}
  
  <Button onClick={()=>{modifyItem()}}>EDIT</Button>
    </Col>
    <Col> <Image src={item.p_id==='1'?t1 :item.p_id==='2'?t2:
           item.p_id==='3'?t3:t4}  width='300px' height='400px' ></Image></Col>
  </Row>
</Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

const mapStateTOProps=(state)=>{
       //console.log(state)
    return{products:state.items,
             item:state.eitem
           }
}
const mapDispatchTOProps=(dispatch)=>{
return{
  
}
}

export default connect(mapStateTOProps,mapDispatchTOProps) (CartEditcomponent)
