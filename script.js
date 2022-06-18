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
        pixel.style.width=(50/sideNum)+"em";
        pixel.style.height=(50/sideNum)+"em";
        pixel.addEventListener("mouseover",(e)=>{
            if(isMouseDown)
            {
                if(isRainbow)
                {
                    if(e.target.classList.contains("colored"))
                    {
                        let light=e.target.getAttribute("light");
                        let color=e.target.getAttribute("color");
                        light-=10;
                        if(light<0){light=0;}
                        e.target.style.backgroundColor=`hsl(${color},100%,${light}%)`;
                        e.target.setAttribute("light",light);
                        e.target.setAttribute("color",color);
                    }
                    else
                    {
                        e.target.style.backgroundColor=`hsl(${penColor},100%,${penLight}%)`;
                        e.target.setAttribute("light",penLight);
                        e.target.setAttribute("color",penColor);
                    }
                    
                }
                else
                {
                    e.target.style.backgroundColor='black';
                }
                penColor=Math.round(Math.random()*360);
                penLight=Math.round(Math.random()*100);
                e.target.classList.add("colored");
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