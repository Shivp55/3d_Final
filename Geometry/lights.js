function addLights(z){
    let scene=document.getElementById('scene');
    let mainTransform=document.getElementById('mainTransform')
    // let mainRotation=document.getElementById('mainRotation')
    let mainGroup=document.getElementById('city');
    let lightTransform=document.createElement('Transform')
    lightTransform.setAttribute('translation','-180 50 '+z)
    let lightGroup=document.createElement('group')

    //cylinder
    let cylinderShape=document.createElement('shape')
    let cylinderAppearance=document.createElement('appearance')
    let cylinderMaterial=document.createElement('material')
    cylinderMaterial.setAttribute('diffuseColor','#b1b1b1')
    let cylinder=document.createElement('cylinder')
    cylinder.setAttribute('height','90')
    cylinder.setAttribute('radius','2.5')
    cylinderAppearance.append(cylinderMaterial)
    cylinderShape.append(cylinderAppearance)
    cylinderShape.append(cylinder)
    lightGroup.append(cylinderShape)


    //cylinder2
    let cylinderTransform=document.createElement('transform')
    cylinderTransform.setAttribute('translation','-10 65 0')
    cylinderTransform.setAttribute('rotation','0 0 1 0.5')
    let cylinderRotShape=document.createElement('shape')
    let cylinderRotAppearance=document.createElement('appearance')
    let cylinderRotMaterial=document.createElement('material')
    cylinderRotMaterial.setAttribute('diffuseColor','#b1b1b1')
    let cylinderRot=document.createElement('cylinder')
    cylinderRotAppearance.append(cylinderRotMaterial)
    cylinderRotShape.append(cylinderRotAppearance)
    cylinderRot.setAttribute('height','50')
    cylinderRot.setAttribute('radius','2.5')

    //box
    let boxTransform=document.createElement('transform')
    boxTransform.setAttribute('translation','-30 85 0')
    boxTransform.setAttribute('rotation','0 0 1 -0.3')
    let boxShape=document.createElement('shape')
    let boxAppearance=document.createElement('appearance')
    let boxMaterial=document.createElement('material')
    boxMaterial.setAttribute('diffuseColor','#fff')
    let box=document.createElement('box')
    box.setAttribute('size','20 5 8')
    boxAppearance.append(boxMaterial)
    boxShape.append(box)
    boxShape.append(boxAppearance)
    boxTransform.append(boxShape)





    let lampLight=document.createElement('pointlight')
    lampLight.setAttribute('ambientIntensity','1')
    lampLight.setAttribute('color','#fff')
    lampLight.setAttribute('shadowIntensity','0.5')
    lampLight.setAttribute('cutOffAngle','1.785398')
    lampLight.setAttribute('direction','-30 5 1.7')
    lampLight.setAttribute('on','true')
    lampLight.setAttribute('radius','70')
    cylinderRotShape.append(cylinderRot)
    boxTransform.append(lampLight)
    cylinderTransform.append(cylinderRotShape)
    lightGroup.append(boxTransform)
    lightGroup.append(cylinderTransform)
    lightTransform.append(lightGroup)
    mainGroup.append(lightTransform)
    mainTransform.append(mainGroup)
    scene.append(mainTransform)
}
function addLights_OtherSide(z){
    let scene=document.getElementById('scene');
    let mainTransform=document.getElementById('mainTransform')
    // let mainRotation=document.getElementById('mainRotation')
    let mainGroup=document.getElementById('city');
    let lightTransform=document.createElement('Transform')
    lightTransform.setAttribute('translation','-440 50 '+z)
    let lightGroup=document.createElement('group')

    //cylinder
    let cylinderShape=document.createElement('shape')
    let cylinderAppearance=document.createElement('appearance')
    let cylinderMaterial=document.createElement('material')
    cylinderMaterial.setAttribute('diffuseColor','#aeb1b8')
    let cylinder=document.createElement('cylinder')
    cylinder.setAttribute('height','90')
    cylinder.setAttribute('radius','2.5')
    cylinderAppearance.append(cylinderMaterial)
    cylinderShape.append(cylinderAppearance)
    cylinderShape.append(cylinder)
    lightGroup.append(cylinderShape)


    //cylinder2
    let cylinderTransform=document.createElement('transform')
    cylinderTransform.setAttribute('translation','10 65 0')
    cylinderTransform.setAttribute('rotation','0 0 1 -0.5')
    let cylinderRotShape=document.createElement('shape')
    let cylinderRotAppearance=document.createElement('appearance')
    let cylinderRotMaterial=document.createElement('material')
    cylinderRotMaterial.setAttribute('diffuseColor','#fff')
    let cylinderRot=document.createElement('cylinder')
    cylinderRotAppearance.append(cylinderRotMaterial)
    cylinderRotShape.append(cylinderRotAppearance)
    cylinderRot.setAttribute('height','50')
    cylinderRot.setAttribute('radius','2.5')

    //box
    let boxTransform=document.createElement('transform')
    boxTransform.setAttribute('translation','30 85 0')
    boxTransform.setAttribute('rotation','0 0 1 0.3')
    let boxShape=document.createElement('shape')
    let boxAppearance=document.createElement('appearance')
    let boxMaterial=document.createElement('material')
    boxMaterial.setAttribute('diffuseColor','#fff')
    let box=document.createElement('box')
    box.setAttribute('size','20 5 8')
    boxAppearance.append(boxMaterial)
    boxShape.append(box)
    boxShape.append(boxAppearance)
    boxTransform.append(boxShape)





    let lampLight=document.createElement('pointlight')
    lampLight.setAttribute('ambientIntensity','0.8')
    lampLight.setAttribute('color','#fff')
    lampLight.setAttribute('shadowIntensity','0.1')
    lampLight.setAttribute('cutOffAngle','1.785398')
    lampLight.setAttribute('direction','-30 5 1.7')
    lampLight.setAttribute('on','true')
    lampLight.setAttribute('radius','70')
    cylinderRotShape.append(cylinderRot)
    boxTransform.append(lampLight)
    cylinderTransform.append(cylinderRotShape)
    lightGroup.append(boxTransform)
    lightGroup.append(cylinderTransform)
    lightTransform.append(lightGroup)
    mainGroup.append(lightTransform)
    mainTransform.append(mainGroup)
    scene.append(mainTransform)
}