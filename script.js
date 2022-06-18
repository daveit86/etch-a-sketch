console.log("loaded!");

const screen=document.querySelector("#screen");
const btn=document.querySelector("button");

function populateScreen(sideNum)
{
    screen.innerHTML="";
    for(let i=0;i<sideNum*sideNum;i++)
    {
        let pixel=document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width=(40/sideNum)+"em";
        pixel.style.height=(40/sideNum)+"em";
        pixel.addEventListener("mouseout",(e)=>{
            e.target.style.transition="all 500ms";
        })
        pixel.addEventListener("mouseover",(e)=>{
            e.target.style.transition="none";
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

