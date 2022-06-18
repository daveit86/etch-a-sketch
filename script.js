console.log("loaded!");

const screen=document.querySelector("#screen");
const btn=document.querySelector("button");
let isMouseDown=false;

function populateScreen(sideNum)
{
    screen.innerHTML="";
    for(let i=0;i<sideNum*sideNum;i++)
    {
        let pixel=document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width=(40/sideNum)+"em";
        pixel.style.height=(40/sideNum)+"em";
        pixel.addEventListener("mouseover",(e)=>{
            if(isMouseDown)
            {
                e.target.style.backgroundColor='black';
            }
           
        })
        screen.appendChild(pixel);
    }
}

function promptSideNum()
{
    return prompt("Number of pixels per side?(100 max)");
}

btn.addEventListener("mouseup",(e)=>{
    let sideNum=promptSideNum();
    if(sideNum<1||sideNum>100)
    {
        alert("Error: Invalid number");
        return false;
    }
    populateScreen(sideNum);
})

document.addEventListener("mousedown",(e)=>{
    isMouseDown=true;
})

document.addEventListener("mouseup",(e)=>{
    isMouseDown=false;
})
