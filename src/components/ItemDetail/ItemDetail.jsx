
function ItemDetail({producto}) {
  return (
    <div >
      <center>
      <img  src={producto.pictureUrl} alt="IMAGEN NO DISPONIBLE" className="  w-30 h-30"  />
          <p className='alert alert-success w-25'>{producto.title}</p>
          <p className='alert alert-success w-25'>{producto.price}</p>
          <p className='alert alert-success w-25'>{producto.categoria}</p>
      </center>
    </div>
  )
}

export default ItemDetail
