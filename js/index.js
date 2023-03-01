let slideContainer = document.getElementById('image-slider-slide-container');
let leftArrow = document.getElementById('left');
let rightArrow = document.getElementById('right');

let imageSliderArray = Array.from(slideContainer.children);
let totalCount = imageSliderArray.length;
let activeCounter = 0;

console.log(imageSliderArray);
console.log(totalCount);
console.log(activeCounter);

function hider(countToShow){
    console.log("hider ",countToShow);
    imageSliderArray.forEach(function(item,index){
        if(index != countToShow){
            item.setAttribute('hidden','true');
        }else{
            item.removeAttribute('hidden');
        }
    })
}

leftArrow.addEventListener('click',function(){
    if(activeCounter >  0 ){
        activeCounter -= 1;
        hider(activeCounter);
        console.log(activeCounter);
        
    }else{
        // console.log(image-sliderArray[0].removeAttribute('hidden'));
        activeCounter = 0;
        hider(activeCounter);
        console.log("end of start");
    }
})

rightArrow.addEventListener('click',function(){
    if(activeCounter <  totalCount - 1 ){
        activeCounter += 1;
        hider(activeCounter);
        console.log(activeCounter)
    }else{
        // console.log(image-sliderArray[activeCounter].removeAttribute('hidden'));
        activeCounter = totalCount - 1;
        hider(activeCounter);
        console.log("end of end");
    }
})