let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#resetBtn");
let turn0=true;

boxes.forEach((box) =>{
    box.addEventListener("click",() =>
        {
            if(turn0){
                turn0=false;
                box.innerText="0";

            }else{
                turn0=true;
                box.innerText="X";
            }
            box.disabled=true;
        }
    )
}
)
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 
const checkWinner= ()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                 console.log("Winnner " );
            }
        }
    }
}