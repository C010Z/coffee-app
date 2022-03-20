import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function Item({ prod }) {
    return (
       <Link to={`detalle/${prod.id}`}>
        <div
            //key={prod.id}
            className="col-md-3"
        >

            <div className="card w-100 text-center p-4 mt-5">
                <div className=" card-header -mb-0">
                    {prod.title} - {prod.categoria}
                </div>
                <div className="card-body">
                    <img src={prod.pictureUrl} alt="" className="w-50" />
                    {prod.price}
                </div>
                <div className="card-footer">
                   
                 
                 {/* <button className="btn btn-outline-primary btn-block">
                        Detalles
    </button> */}
                </div>
            </div>
        </div>
        </Link>
    )
}
export default Item
