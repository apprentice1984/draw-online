const lineWidth = document.querySelector('.lineWidth')

const canvas = document.getElementById('canvas')
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')
const color = document.getElementById('color')
const clearCanvas = document.getElementById('clear')

const ctx = canvas.getContext('2d')

let x = 0,
  y = 0
let start = false
let size = 10
let strokeColor = '#000'

canvas.addEventListener('mousedown', (e) => {
  start = true
  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
  ctx.closePath()
  start = false
  x = 0
  y = 0
})

canvas.addEventListener('mousemove', (e) => {
  if (start) {
      const x2 = e.offsetX
      const y2 = e.offsetY
      drawCircle(x2, y2)
      drawLine(x, y, x2, y2)
       x = x2
       y = y2
  }
})

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = strokeColor
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = strokeColor
  ctx.lineWidth = size * 2
  ctx.stroke()
}
decrement.addEventListener('click', () => {
  if (size <= 5) {
    size = 5
    return
  }
  size -= 5
  lineWidth.innerHTML = size
})

increment.addEventListener('click', () => {
  if (size >= 30) {
    size = 30
    return
  }
  size += 5
  lineWidth.innerHTML = size
})

color.addEventListener('change', (e) => {
  strokeColor = e.target.value
})

clearCanvas.addEventListener('click', (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})
