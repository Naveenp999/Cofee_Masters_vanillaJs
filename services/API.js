const API={
    url:"./data/menu.json",
    getfetchdetails:async()=>{
        const response=await fetch(API.url);
        return response.json();
    } 
}

export default API;