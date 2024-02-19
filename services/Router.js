const router={
    init:()=>{
        document.querySelectorAll("a.navlink").forEach((ele) => {
            ele.addEventListener("click",(event) => { 
                event.preventDefault();
                let url=event.target.getAttribute("href");
                router.go(url);
            });
        });
        window.addEventListener("popstate",(event)=>{
            router.go(event.state.data,false);
        })
    },
    go:(data,History=true)=>{
        if(History){
            history.pushState({data},"",data);
        }
        let pageconst=null;

        switch(data){
            case "/":
                pageconst=document.createElement("menu-page");
                break;
            case "/order":
                pageconst=document.createElement("order-page");
                break;
            default:
                if (data.startsWith("/product-")) {                
                    pageconst = document.createElement("details-page");
                    pageconst.dataset.productId = data.substring(data.lastIndexOf("-")+1);
                }
                break;   
        }
        if (pageconst) {
            document.querySelector("main").innerHTML = "";
            document.querySelector("main").appendChild(pageconst);
        }
    
        window.scrollX = 0;
    }
}

export default router;