function main(){
    for(let z=-500; z<500; z+=80)
        addTrees(z);
    for(let x=-100; x<400; x+=80)
        addTreesHorizontal(x);
    for(let x=-100; x<500; x+=80)
        for(let z=200; z<500; z+=80)
            addTowers(x,z);
    for(let x=-100; x<500; x+=80)
        for(let z=-200; z>-500; z+=-80)
            addTowers(x,z);
    for(let z=480; z>100; z+=-90)
        addLights(z);
    for(let z=-130; z>-500; z+=-90)
        addLights(z);
    for(let z=480; z>-500; z+=-150)
        addLights_OtherSide(z);

    document.addEventListener('keyup',keyup);

}