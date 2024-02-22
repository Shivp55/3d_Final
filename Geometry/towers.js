function addTowers(x,z){
    let scene=document.getElementById('scene');
    let mainTransform=document.getElementById('mainTransform')
    // let mainRotation=document.getElementById('mainRotation')
    let mainGroup=document.getElementById('city');
    let streetTransform=document.createElement('transform')
    streetTransform.setAttribute('translation',x+' 130 ' +z)
    // scene.append(streetTransform)

    //Towers
    let towerShape=document.createElement('shape')
    let towerAppearance=document.createElement('appearance')
    let towerMaterial=document.createElement('material')
    towerMaterial.setAttribute('diffuseColor','1 0 0')
    let tower=document.createElement('box')
    let towerImg=document.createElement('ImageTexture')
    towerImg.setAttribute('url','res/tower_texture.jpg')
    towerImg.setAttribute('repeatT','true')
    tower.setAttribute('size','50 250 50')

    //roof
    let roofTransform=document.createElement('transform')
    roofTransform.setAttribute('translation','0 150 0')
    let roofShape=document.createElement('shape')
    let roofAppearance=document.createElement('appearance')
    let roofImg=document.createElement('ImageTexture')
    roofImg.setAttribute('url','res/roof.jpg')
    // let roofMaterial=document.createElement('material')
    // roofMaterial.setAttribute('diffuseColor','0 10 0')
    let cone=document.createElement('cone')
    cone.setAttribute('bottomRadius','30')
    cone.setAttribute('topRadius','1')
    cone.setAttribute('height','50')
    roofShape.append(cone)
    roofAppearance.append(roofImg)
    roofShape.append(roofAppearance)
    roofTransform.append(roofShape)

    //Append
    towerAppearance.append(towerImg)
    towerAppearance.append(towerMaterial)
    towerShape.append(towerAppearance)
    towerShape.append(tower)
    streetTransform.append(roofTransform)
    streetTransform.append(towerShape)
    mainGroup.append(streetTransform)
    mainTransform.append(mainGroup)
    scene.append(mainTransform)
}