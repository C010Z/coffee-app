import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from "react"
import { Button } from "react-bootstrap";

function Compra() {

  const { cartList, limpiar, total } = useCartContext()
  const [dataForm, setDataForm] = useState({ email: '', name: '', phone: '' })
  const [id, setId] = useState(null)

  const generarOrden = async (e) => {
    e.preventDefault();

    const date = new Date()
    let orden = {}
    orden.buyer = dataForm
    orden.total = total
    orden.date = `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}`
    orden.items = cartList.map(prod => {
      const id = prod.id
      const nombre = prod.title
      const price = prod.price * prod.cantidad

      return { id, nombre, price }
    })


    const db = getFirestore()
    const queryCollectionItems = collection(db, 'orders')
    await addDoc(queryCollectionItems, orden)

      .then(({ id }) => setId(id))
      .catch(err => console.log(err))
      .finally(() => limpiar())

  }

  const handleChange = (e) => {
    setDataForm({
      ...dataForm, [e.target.name]: e.target.value
    })

  }

  return (
    <div className="container pt-2">
      <div className="row justify-content sm-center pt-5">
        <div className="col sm-6 shadow round pb-2">
          <h4> complete los campos para efectuar la compra</h4>
          <form onSubmit={generarOrden}>
            <div className="form-group">
              <label className="col-form-label">Nompre y Apellido</label>
              <input name="name" onChange={handleChange} value={dataForm.name} placeholder="ingrese nombre"
                type="text"
                className=" form-control" />

            </div>
            <div className="form-group">
              <label className="col-form-label">Celular</label>
              <input name="phone" onChange={handleChange} value={dataForm.phone} placeholder="ingrese celular"
                type="text"
                className=" form-control" />

            </div>
            <div className="form-group">
              <label className="col-form-label">Email</label>
              <input name="email" placeholder=" ingrese email"
                onChange={handleChange} value={dataForm.email}
                type="text"
                className=" form-control" />

            </div>
            <div className="form-group">
              <label className="col-form-label">Email 2</label>
              <input name="email2" onChange={handleChange} value={dataForm.email2} placeholder="repita email"
                type="text"
                className=" form-control" />

            </div>
            {((dataForm.email !== dataForm.email2) || (dataForm.email === '') ||
              (dataForm.email2 === '') || (dataForm.address === '') ||
              (dataForm.lastName === '') || (dataForm.name === '') ||
              (dataForm.phone === '')) ?
              <div>  <h6>Corrobore los campos vacios y/o corfirmación de emails</h6></div> : <button className='btn btn-primary' onClick={generarOrden}>Finalizar</button>}

            {id && <label className={'alert alert-success'}> El id de la Compra es: {id}    </label>}

          </form>
        </div>
      </div>

    </div>

  )
}


export default Compra
