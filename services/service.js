import API from "./API.js";

export const loadfunc=async()=>{
    app.store.menu=await API.getfetchdetails();
}

export async function getProduct(id) {
    if (app.store.menu==null) {
        await loadData();
    }
    for (let c of app.store.menu) {
        for (let p of c.products) {
            if (p.id==id) {
                return p;
            }
        }
    }
    return null;
}