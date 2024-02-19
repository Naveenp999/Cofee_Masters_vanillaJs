export class Menupage extends HTMLElement{
    constructor(){
        super();

        this.root=this.attachShadow({mode:'open'})

        const styles=document.createElement("style");

        async function loadCSS() {
            const request = await fetch("./components/MenuPage.css");
            styles.textContent = await request.text();
        }
        loadCSS();  
        this.root.  appendChild(styles);

        

        const template=document.getElementById("menu-page-template");
        const temp=template.content.cloneNode(true);
        this.root.appendChild(temp);

        
    }

    connectedCallback(){
        window.addEventListener("appmenuchange",() => {
            this.render();
        });
        this.render();
    }


    render(){
        if(app.store.menu){
            console.log(app.store.menu);
            this.root.querySelector("#menu").innerHTML="";
            for(let category of app.store.menu){
                const li=document.createElement("li");
                li.innerHTML=`
                <h3>${category.name}</h3>
                <ul class="category"></ul>
                `;

                this.root.querySelector("#menu").appendChild(li);


                category.products.map(product => {
                    const item = document.createElement("product-item");
                    item.dataset.product = JSON.stringify(product);
                    li.querySelector("ul").appendChild(item);
                });
            }
        }
        else{
            this.root.querySelector("#menu").innerHTML="Loading...";
        }
    }
};

customElements.define("menu-page",Menupage);