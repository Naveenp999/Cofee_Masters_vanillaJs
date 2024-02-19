import { getProduct } from "./service.js";

export const addToCart = async(id) => {
    const product=await getProduct(id);
    const repeat=app.store.cart.filter(ele => 
        ele.product.id==id);
    if(repeat.length===1){
        app.store.cart=app.store.cart.map(ele => 
            ele.product.id==id?{...ele,quantity:ele.quantity+1} :ele);
        console.log(app.store.cart);
    }
    else{
        app.store.cart=[...app.store.cart,{product,quantity:1}];
        console.log(app.store.cart);
    }
} 

export const removeFromCart=(id) => {
    app.store.cart=app.store.cart.filter(p =>p.product.id!==id);
}