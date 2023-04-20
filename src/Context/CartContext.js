import { createContext, useContext, useState} from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartProvider = ( {children})=> {
    
    const [cart, setCart] = useState([]);
    const [totalPrince, setTotalPrice] = useState(0);


    const isInCart =(id) => cart.find(p=>p.id ===id)? true: false;
    

    const addItem = (prod, cant)=>{
      if (isInCart(prod.id)){
        setCart(cart.map(product=>{
          if(product.id === prod.id){
          return {
            ...product,
            cant : product.cant + cant
          } 
        } else {
          return product
        }
      }))      
      } else {
        setCart([...cart, {...prod, cant}])
      }
    }
   
    const emptyCart =()=>{
      setCart([]);
    }
    
    const removeItem = (id, cantToRemove) => {
      
      setCart(cart.map(product => {
        if (product.id === id) {
          const newCant = Math.max(product.cant - cantToRemove, 0) // Asegura que la cantidad nunca sea negativa
          return {
            ...product,
            cant: newCant
          }
        } else {
          return product
        }
      }).filter(product => product.cant > 0)) // Elimina los productos con cantidad 0
    }
    
    const getQuantity=()=>{
      return cart.reduce((acum,prod)=> acum += prod.cant,0)
    }

    const totalPrice = () => {
      return cart.reduce((acum,prod)=> acum += (prod.cant * prod.price),0);
    }
    
    console.log(cart)
 

    

    return(
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, emptyCart, getQuantity,totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}







export {CartContext, CartProvider}

