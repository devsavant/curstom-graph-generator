const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
// ctx.fillRect(0,0,400,400)

const images = {
    default: '35.svg',
    triangle: 'https://www.pngkit.com/png/full/5-52947_burgundy-triangle-shape-clipart-triangle.png'
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

function drawTriangle(){
    const [x,y]= [80, 200]
    return new Promise((res,rej)=>{
        const img = new Image()
        img.src = images.triangle
        img.onload = () => {
            ctx.save();
            ctx.beginPath();
            ctx.translate( x+canvas.width/2, y+canvas.height/2 );
            ctx.rotate(0*Math.PI/180);
            ctx.drawImage(img, -canvas.width/2,-canvas.width/2, 80,80)
            ctx.restore();
            res(true)
        }
        
    })

}

function drawCircle(){
    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.arc(canvas.width/2, (canvas.height/2)+12, 80, 0, 2*Math.PI,false)
    ctx.fill()
    ctx.closePath()
}

async function init(){
    await drawDefaultImage()
    await drawTriangle()
    drawCircle()
}

init()
