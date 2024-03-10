function main(){
betoltes();
kepreKattintas();
}

function  betoltes(){
    const FOOTER_NEV = document.querySelector(".pFooter");
    FOOTER_NEV.innerHTML = `<p>Simon Kende</p>`
    FOOTER_NEV.innerHTML += `<style>
                                footer p {
                                    background-color: aqua;
                                    text-align: center;
                                    color: black;
                                }
                            </style>`
}

function kepreKattintas(){
   const KEPEK = document.querySelectorAll(".dolgokImg");
   const CSONAK_IMG = document.getElementById("csonak");
   const KEPEK_TOMB = [];
   for (let index = 0; index < KEPEK.length; index++) {
        KEPEK[index].addEventListener("mouseenter" , function() {
            KEPEK[index].classList.add("kiemel");
        });
        KEPEK[index].addEventListener("mouseleave",  function() {
            KEPEK[index].classList.remove("kiemel");
        });
        KEPEK[index].addEventListener("click",function(event){
            KEPEK_TOMB.push(event.target.src);
            console.log(KEPEK_TOMB);
            event.target.classList.add("lathatatlan");
            let ujKep = document.createElement("img");
            ujKep.src = event.target.src;
            ujKep.classList.add("athelyezettKep");
            ujKep.innerHTML += `<style>
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                </style>`
                                
            for (let index = 0; index < KEPEK_TOMB.length; index++) {
                if (KEPEK_TOMB[index] === "http://127.0.0.1:5500/kepek/farkas.png" || KEPEK_TOMB[index] === "http://127.0.0.1:5500/kepek/kaposzta.png") {
                    alert("Helytelen volt a választás!");
                    
                } else if (KEPEK_TOMB[index] === "http://127.0.0.1:5500/kepek/kecske2.png"){
                    CSONAK_IMG.appendChild(ujKep);
            }
                    
                   
        }
        
        });
            
        
       
    }
    

}


main();