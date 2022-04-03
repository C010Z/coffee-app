import Item from '../Item/Item'


function ItemList({ prods }) {
   return (
      <> 
       <section  section className='py-4 container'>
          <div className='row justify-content-center'>

       
          {prods.map((prod) => <Item key={prod.id} prod={prod} />)}   
         
</div>
</section>
          </>

 
 
   )}
   export default ItemList