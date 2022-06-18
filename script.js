console.log("loaded!");

const screen=document.querySelector("#screen");
const btn_makedisplay=document.querySelector("button.makeDisplay");
const btn_makeRainbow=document.querySelector("button.makeRainbow");
let penColor=0;
let penLight=0;

let isMouseDown=false;
let isRainbow=false;

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
                if(isRainbow)
                {
                    e.target.style.backgroundColor=`hsl(${penColor},100%,${penLight}%)`;
                }
                else
                {
                    e.target.style.backgroundColor='black';
                }
                penColor=Math.random()*360;
                penLight=Math.random()*100;
                console.log(`hsl(${penColor},100%,${penLight})`);
                console.log("pixel color:"+e.target.style.backgroundColor);
            }
           
        })
        screen.appendChild(pixel);
    }
}

function promptSideNum()
{
    return prompt("Number of pixels per side?(100 max)");
}

btn_makedisplay.addEventListener("mouseup",(e)=>{
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

btn_makeRainbow.addEventListener("click",(e)=>{
    if(isRainbow)
    {
        e.target.textContent="Rainbow";
        isRainbow=false;
    }
    else
    {
        e.target.textContent="Black";
        isRainbow=true;
    }
    
})