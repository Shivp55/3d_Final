let startTimeMilliseconds=-1
let rotationRadsPerSecond=2 * Math.PI;

function updateModel(timeStampMilliseconds) {
    if (startTimeMilliseconds == -1)
        startTimeMilliseconds = timeStampMilliseconds
    let frameTimeMillis = timeStampMilliseconds - startTimeMilliseconds;
    let angle = (frameTimeMillis / 20000) * rotationRadsPerSecond;
    document.getElementById('mainTransform').setAttribute('rotation', '0 1 0 ' + angle);
    window.requestAnimationFrame(updateModel)
}