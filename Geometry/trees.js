function addTrees(z){
    let scene=document.getElementById('scene');
    let mainTransform=document.getElementById('mainTransform')
    // let mainRotation=document.getElementById('mainRotation')
    let mainGroup=document.getElementById('city');
    let treeTransform=document.createElement('Transform');
    treeTransform.setAttribute('translation','-485 25 '+z);
    let treeGrp=document.createElement('group');

    // Trunk
    let trunkShape=document.createElement('shape');
    let trunkAppearance=document.createElement('appearance')
    let trunkMaterial=document.createElement('material')
    trunkMaterial.setAttribute('diffuseColor', '#5d4a36')
    let trunk=document.createElement('cylinder')
    trunk.setAttribute('radius','5')
    trunk.setAttribute('height','50')
    trunkAppearance.append(trunkMaterial)
    trunkShape.append(trunkAppearance)
    trunkShape.append(trunk)
    treeGrp.append(trunkShape)

    //top
    let coneTransform=document.createElement('transform')
    coneTransform.setAttribute('translation', '0 70 0')
    let coneShape=document.createElement('shape')
    let coneAppearance=document.createElement('appearance')
    let img=document.createElement('ImageTexture');
    img.setAttribute('url','res/tree.png')
    let cone=document.createElement('cone')
    cone.setAttribute('bottomRadius','30')
    cone.setAttribute('side','true')
    cone.setAttribute('solid','false')
    // cone.setAttribute('topRadius','1')
    cone.setAttribute('height','100')
    coneAppearance.append(img)
    coneShape.append(coneAppearance)
    coneShape.append(cone)
    coneTransform.append(coneShape)
    treeGrp.append(coneTransform)
    treeTransform.append(treeGrp)
    mainGroup.append(treeTransform)
    // mainRotation.append(mainGroup)
    mainTransform.append(mainGroup)
    scene.append(mainTransform)
}
function addTreesHorizontal(x){
    let scene=document.getElementById('scene');
    let mainTransform=document.getElementById('mainTransform')
    // let mainRotation=document.getElementById('mainRotation')
    let mainGroup=document.getElementById('city');
    let treeTransform=document.createElement('Transform');
    treeTransform.setAttribute('translation',x+' 30 -150');
    let treeGrp=document.createElement('group');

    // Trunk
    let trunkShape=document.createElement('shape');
    let trunkAppearance=document.createElement('appearance')
    let trunkMaterial=document.createElement('material')
    trunkMaterial.setAttribute('diffuseColor', '#5d4a36')
    let trunk=document.createElement('cylinder')
    trunk.setAttribute('radius','5')
    trunk.setAttribute('height','50')
    trunkAppearance.append(trunkMaterial)
    trunkShape.append(trunkAppearance)
    trunkShape.append(trunk)
    treeGrp.append(trunkShape)

    //top
    let coneTransform=document.createElement('transform')
    coneTransform.setAttribute('translation', '0 70 0')
    let coneShape=document.createElement('shape')
    let coneAppearance=document.createElement('appearance')
    let img=document.createElement('ImageTexture');
    img.setAttribute('url','res/tree.png')
    let cone=document.createElement('cone')
    cone.setAttribute('bottomRadius','30')
    cone.setAttribute('topRadius','1')
    cone.setAttribute('height','100')
    coneAppearance.append(img)
    coneShape.append(coneAppearance)
    coneShape.append(cone)
    coneTransform.append(coneShape)
    treeGrp.append(coneTransform)
    treeTransform.append(treeGrp)
    mainGroup.append(treeTransform)
    // mainRotation.append(mainGroup)
    mainTransform.append(mainGroup)
    scene.append(mainTransform)
}
