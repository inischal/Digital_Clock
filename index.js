const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minutes')
const secondEl = document.getElementById('seconds')
const ampmEl = document.getElementById('ampm')
const milliEl = document.getElementById('milliseconds')

function updateClock() {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ms = new Date().getMilliseconds()
  let ampm = 'AM'

  if (h > 12) {
    h = h - 12
    ampm = 'PM'
  }

  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s

  hourEl.innerText = h
  minuteEl.innerText = m
  secondEl.innerText = s
  milliEl.innerText = ms

  ampmEl.innerText = ampm
  setTimeout(() => {
    updateClock()
  }, 10)
}
updateClock()
