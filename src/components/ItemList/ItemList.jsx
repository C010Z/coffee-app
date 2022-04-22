import Item from '../Item/Item'

function ItemList({ prods }) {
   return (
      
       <div    className='py-4 container'>
          <div className='row justify-content-center'>
                 {prods.map((prod) => <Item key={prod.id} prod={prod} />)}   
         </div>
</div>
           
 
   )}
   export default ItemList