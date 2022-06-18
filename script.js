console.log("loaded!");

const screen=document.querySelector("#screen");
const btn=document.querySelector("button");

function populateScreen(sideNum)
{
    for(let i=0;i<sideNum;i++)
    {
        let pixel=document.createElement("div");
        pixel.classList.add("pixel");
        screen.appendChild(pixel);
    }
}

function promptSideNum()
{
    return prompt("Number of pixels per side?");
}

btn.addEventListener("mouseup",(e)=>{
    let sideNum=promptSideNum();
    populateScreen(sideNum);
})