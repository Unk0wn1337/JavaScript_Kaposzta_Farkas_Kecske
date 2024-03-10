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
                                    
                                </style>`
            CSONAK_IMG.appendChild(ujKep);


        });
    }
    

}


main();