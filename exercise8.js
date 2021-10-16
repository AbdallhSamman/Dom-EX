function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    let squar=document.querySelector('#colors')
    let select=document.querySelector('#selected')
    for(let i=0;i<colors.length;i++){
    let newE=document.createElement('div')
    squar.appendChild(newE)
    newE.style.background=colors[i]
    newE.setAttribute('class','choice')
    }
    squar.addEventListener('click',function(h){
        select.innerHTML=h.target.style.background
        select.style.background=h.target.style.background
    }
    )
}

window.onload = function () {
    initGrid();
}
