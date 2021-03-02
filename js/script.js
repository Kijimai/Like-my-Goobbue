const loveMe = document.querySelector('.loveMe')
const times = document.getElementById('clickTimes')
const plural = document.querySelector('.plural')
const randomHeartNum = Math.floor(Math.random() * 6) + 1
const body = document.querySelector('body')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if((new Date().getTime() - clickTime) < 800) {
      createHeart(e)
      clickTime = 0
    } else {
      clickTime = new Date().getTime()
    }
  }
})

const createHeart = (e) => {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  const x = e.clientX
  const y = e.clientY

  const leftOffset = e.target.offsetLeft
  const topOffset = e.target.offsetTop

  const xInside = x - leftOffset
  const yInside = y - topOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  loveMe.appendChild(heart)

  times.innerHTML = ++timesClicked

  if (timesClicked > 1) {
    plural.textContent = 'times'
  } else {
    plural.textContent = 'time'
  }
  setTimeout(() => heart.remove(), 1500) 
}



//****** NEEDS REWORK *******/

// const randomizedHeart = () => {
//   const randomX =  Math.floor(Math.random() * 1920)
//   const randomY =  Math.floor(Math.random() * 1080)
//   const randomHeart = document.createElement('i')
//   randomHeart.classList.add('fas')
//   randomHeart.classList.add('fa-heart')

//   randomHeart.style.top = `${randomX}px`
//   randomHeart.style.left = `${randomY}px`

//   body.appendChild(randomizedHeart)
//   setTimeout(() => randomHeart.remove(), 1500)
// }

// const randomizedHeart2 = () => {
//   const randomX =  Math.floor(Math.random() * 1920)
//   const randomY =  Math.floor(Math.random() * 1080)
//   const randomHeart = document.createElement('i')
//   randomHeart.classList.add('fas')
//   randomHeart.classList.add('fa-heart')

//   randomHeart.style.top = `${randomX}px`
//   randomHeart.style.left = `${randomY}px`

//   body.appendChild(randomizedHeart)
//   setTimeout(() => randomHeart.remove(), 1500)
// }

  // randomizedHeart()
  // randomizedHeart2()