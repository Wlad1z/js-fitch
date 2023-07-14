let id = null,
    count = 4;

function titul_progress(e) {
    count++;
    let element = document.getElementById('hr-' + e),
        img = document.getElementById('img-' + e),
        width = 0;
    for (let i = 1; i < 4; i++) {
        if (i !== e){
            document.getElementById('hr-' + i).style.width = 0;
        }
    }

  id = setInterval(progressStatus, 50);

  function progressStatus() {
    if (width >= 28) {
        clearInterval(id);
        element.style.width = 0;
        img.style.zIndex = 1;
        count++;
        e++;
        if (e > 3) {
            titul_progress(1);
            let img1 = document.getElementById('img-1'),
            img2 = document.getElementById('img-2');
            img2.style.zIndex = 2;
            img1.style.zIndex = 3;
        } else {
            titul_progress(e);
        }
    } else {
        width = width + 0.5;
        element.style.width = width + '%';
        img.style.zIndex = count;
    }
  }
}
titul_progress(1)

function startProgress(e) {
    if (id) {
        clearInterval(id);
    }
    titul_progress(e);
}


function click_planer() {
    startProgress(1);
}
function click_calendar() {
    startProgress(2);
}
function click_notes() {
    startProgress(3);
}

let ulElements = [];
let ulOffsetTops = [];
let img2Landings = [];

for (let i = 1; i < 4; i++) {
    ulElements[i] = document.getElementById('ul-' + i);
    ulOffsetTops[i] = (ulElements[i].offsetTop);
    img2Landings[i] = document.getElementById('landing-2-img-' + i);
    console.log(ulElements[i], ulOffsetTops[i], img2Landings[i]);
}

window.addEventListener('scroll', function() {
    let windowCenter = window.innerHeight /2 + window.scrollY;  
    console.log(windowCenter);
    if (windowCenter <= (ulOffsetTops[1]+150) ){
        addRemoveClasses(1);
        stopScroll();
    } else if (windowCenter <= (ulOffsetTops[2]) ){
        addRemoveClasses(2)
    } else if (windowCenter <= (ulOffsetTops[3]-150) ) {
        addRemoveClasses(3)
    };  
    if (windowCenter >= (ulOffsetTops[3]-150) ) {
        addRemoveClasses(3)
    };  
});


function addRemoveClasses(e) {
    for (let i = 1; i < 4; i++) {
        if (e !== i) {
            ulElements[i].classList.add('hidden');
            img2Landings[i].style.zIndex = 1;
        } else {
            ulElements[i].classList.remove('hidden');
            img2Landings[i].style.zIndex = 4;
        }
    }
}


