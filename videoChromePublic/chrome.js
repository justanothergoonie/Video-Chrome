let videosData = [{
		name: 'City Arial fly over',
		video: 'video/Rain_on_Window_2__Rack_Focus.mp4',
		thumb: 'img/city.png',
	},
	{
		name: 'Earth from ISS',
		video: 'video/earth.mp4',
		thumb: 'img/earth.png',
	},
	{
		name: 'Rain',
		video: 'video/rain.mp4',
		thumb: 'img/rain.png',
	},
	{
		name: 'VU Meters',
		video: 'video/vu.mp4',
		thumb: 'img/vu.png',
	},
]


let videoElement = document.querySelector('video') // ideally, this would be more specific. What if there was more than one video tag on the page?
let ppButton = document.querySelector('.play-pause')
let quietOrNotBtn = document.querySelector('.mute-unmute')
let bigorSmallBtn = document.querySelector('.full-screen')
let backFifteen = document.querySelector('.back-15')
let fwdFifteen = document.querySelector('.forward-15')
let barOfProgresion = document.querySelector('.progress-bar')
let timePlayed = document.querySelector('.time')
let listOfVids = document.querySelector('.playlist')

videoElement.loop = true

let pauseOrPlay = function () {
	if (videoElement.paused) {
		videoElement.play()
	} else {
		videoElement.pause()
	}
}

ppButton.addEventListener('click', pauseOrPlay)
ppButton.classList.add('button')
videoElement.addEventListener('click', pauseOrPlay)
window.addEventListener('keyup', function(){
	if (event.code === "Space"){
		pauseOrPlay()
	}
})

quietOrNotBtn.addEventListener('click', function(){
	if(videoElement.muted){
		videoElement.muted = false
	} else {
		videoElement.muted = true
	}
})

bigorSmallBtn.addEventListener('click', function(){
	videoElement.requestFullscreen()
})

let minusFifteen = function(){
	videoElement.currentTime -= 15
}

backFifteen.addEventListener('click', minusFifteen)
window.addEventListener('keyup', function(){
	if (event.code === "ArrowLeft"){
		minusFifteen()
	}
})

let plusFifteen = function(){
	videoElement.currentTime += 15
}

fwdFifteen.addEventListener('click', plusFifteen)
window.addEventListener('keyup', function(){
	if (event.code === "ArrowRight"){
		plusFifteen()
	}
})

barOfProgresion.style.width = '100%'
setInterval(function(){
	barOfProgresion.style.width = videoElement.currentTime/videoElement.duration * 100 + '%'
	timePlayed.innerHTML = Math.floor(videoElement.currentTime) + ' of ' + Math.floor(videoElement.duration)
}, 100)


for (var i = 0; i < videosData.length; i++) {
	let vidURL = videosData[i].video
	let vidThumb = document.createElement('img')
	listOfVids.appendChild(vidThumb)
	vidThumb.setAttribute('src', videosData[i].thumb)
	vidThumb.setAttribute('title', videosData[i].name)
		vidThumb.addEventListener('click', function(){
		console.log(i)

		videoElement.setAttribute('src', vidURL)
	})
}



// videosData.forEach(function(vidData) {
// 	let vidThumb = document.createElement('img')
// 	listOfVids.appendChild(vidThumb)
// 	vidThumb.setAttribute('src', vidData.thumb)
// 	vidThumb.setAttribute('title', vidData.name)
// 	vidThumb.addEventListener('click', function(){
// 		console.log(vidData)
// 		videoElement.setAttribute('src', vidData.video)
// 	})
// })



















