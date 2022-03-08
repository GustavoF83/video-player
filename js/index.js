const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click',handleplay)
$pause.addEventListener('click',handlepause)
$backward.addEventListener('click',handlebackward)
$forward.addEventListener('click',handleforward)
const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata',handleLoaded)
$video.addEventListener('timeupdate',handleTimeUpdate)
$progress.addEventListener('input',handleInput)

function handleplay() {
    $video.play()
    $play.hidden = true;
    $pause.hidden = false;
    console.log ('Le diste al play')
}

function handlepause() {
    $video.pause()
    $play.hidden = false;
    $pause.hidden = true;
    console.log ('Le diste pause al video')
}

function handlebackward() {
   // $video.currentTime = $video.currentTime - 10
   $video.currentTime -= 10
    console.log ('Atrasaste 10 segundos',$video.currentTime)
}

function handleforward() {
    $video.currentTime = $video.currentTime + 10
    console.log ('Adelantaste 10 segundos',$video.currentTime)
}

function handleLoaded() {
    $progress.max = $video.duration
    console.log('se ha cargado el video',$video.duration)
}

function handleTimeUpdate() {
    $progress.value =  $video.currentTime
    //console.log('Progreso del video',$video.currentTime)
}

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}
