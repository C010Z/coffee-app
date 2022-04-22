import { Link } from "react-router-dom"
import '../Item/Item.css'

 
function Item({ prod })
 {
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-60 shadow ">
                <h5 className="card-title">
                    {prod.title}
                    </h5>
                <Link to={`/detalle/${prod.id}`}>
                    < img src={prod.pictureUrl}
                     class="card-img-top img-fluid " />
                </Link>
                <div class="card-body ">
                    <p className="card-text"> ${prod.price}</p>
                    <p className="card-text">{prod.categoria}</p>
                </div>
            </div>
        </div>
    )
}

export default Item