import { Link } from "react-router-dom"
import ItemCount from "../../Container/ItemCount"
import '../Item/Item.css'

const onAdd = (cant) => {
    console.log(cant)
}
function Item({prod}) {
    return (

       
        <Link to={`/detalle/${prod.id}`}>
            <div 
                // key={prod.id}
                className='product' 
            >                       
                <div className="card w-10 " >
                    <div className="card-header">
                    <h5>{prod.title}</h5></div>
                    <div className="card-body">
                    <p>{prod.categoria}  </p>
                        <img src={prod.pictureUrl} alt='' className='w-50' />
                     <p> $ {prod.price}  </p>                                                            
                    </div>
                    <div className="card-footer"> 
                   {/*} <ItemCount initial={1} stock={10} onAdd={onAdd} />*/}
                    </div> 
                 
                                       
                        
                                                                                    
                    </div>
                </div>
           
            </Link>    
    )
}

export default Item