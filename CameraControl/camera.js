let z=10
let x=0;
let heading=0;
let headingDelta=Math.PI/60;
function keyup(event){
    let key=event.key;

    if(key=="ArrowUp"){
        z-=Math.cos(heading)
        x-=Math.sin(heading)
    }
    else if(key== "ArrowDown"){
        z+=Math.cos(heading)
        x+=Math.sin(heading)
    }
    else if(key=='ArrowLeft'){
        heading+=headingDelta;
    }
    else if(key=='ArrowRight'){
        heading -=headingDelta;
    }
    let viewpoint=document.getElementById('camviewpoint')
    viewpoint.setAttribute('position',x+' 10 ' +z)
    viewpoint.setAttribute('orientation','0 1 0 '+heading)
}