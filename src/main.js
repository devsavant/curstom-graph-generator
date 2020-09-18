// const canvas = document.querySelector('#canvas')
const canvas = document.createElement('canvas')
canvas.width = 400
canvas.height = 400
const ctx = canvas.getContext('2d')
// ctx.fillRect(0,0,400,400)

const images = {
    default: '35.svg',
    triangle: 'equi.png'
}

function drawDefaultImage(){
    return new Promise((res,rej)=>{
        const img = new Image()
        img.src = images.default
        img.onload = () => {
            ctx.drawImage(img, 0,0)
            res(true)
        }
        
    })
  
}


async function drawRotated(degrees=45, drawFunc){
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(canvas.width/2,canvas.height/2);
    ctx.rotate(degrees*Math.PI/180);
    // var angleToScale = degrees - 90;
    // var imgRatio = image.height/image.width;

    // if(imgRatio < 1) angleToScale += 90
    // if(angleToScale % 180 == 0)
    //     ctx.scale(ratio, ratio);
    console.log(degrees) // 123 = -10
    // let w = (-canvas.width/2) + 0.14*degrees + 1.41
    // let h = (-canvas.height/2) -0.05*degrees - 0.47


    let w = (-canvas.width/2) + 12
    let h = (-canvas.height/2) - 5
    if(degrees>69.8 && degrees<176.3){ // > 50
        w = (-canvas.width/2) + 18
        h = (-canvas.height/2) - 15
    }
    if(degrees>176.4){ // > 70
        w = (-canvas.width/2) + 10
        h = (-canvas.height/2) - 20
    }
    ctx.translate(w,h);
    // ctx.drawImage(image, xImgOffset, yImgOffset, image.width, image.height);
    await drawFunc()
    ctx.restore();
}

function drawTriangle(x=80,y=200){
    return new Promise((res,rej)=>{
        const img = new Image()
        img.src = images.triangle
        img.onload = () => {
            // ctx.save();
            // ctx.beginPath();
            // ctx.translate( x+canvas.width/2, y+canvas.height/2 );
            // ctx.rotate(0*Math.PI/180);
            ctx.drawImage(img, x,y, 80,80)
            // ctx.restore();
            // ctx.closePath()
            res(true)
        }
        
    })

}

function drawCircle(){
    ctx.fillStyle = "grey"
    ctx.beginPath()
    ctx.arc(canvas.width/2, (canvas.height/2)+12, 80, 0, 2*Math.PI,false)
    ctx.fill()
    ctx.closePath()
}

function getImage() {
    const fullQuality = canvas.toDataURL("image/png");
    const img = document.createElement('img')
    img.setAttribute('crossOrigin', 'anonymous')
    img.src = fullQuality
    document.body.appendChild(img)
    return fullQuality
}

async function init(deg=0){
    await drawDefaultImage()
    // await rotateElement(drawTriangle)
    // await drawTriangle()
    await drawRotated(deg,drawTriangle)
    drawCircle()
    return getImage()
}

// 0 => 0deg
// 100 => 258deg

function calculateDeg(num){
    if(num>98) num = 98
    return 2.66*num - 10
}

function getGraph(number) {
    let deg = calculateDeg(number)
    return init(deg) 
    .then(base64=>base64)
}

// let base64Img = getGraph(85)

getGraph(100).then(data=>console.log(data))

// 1.- probar canvas en mem **
// 1.1.- Tabla de valores
// 2.- remote images
// 3.- Class / main function
// 4.- publish in cdn