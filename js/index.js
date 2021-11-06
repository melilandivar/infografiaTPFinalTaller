 const controller = document.querySelector('input[type=range]');
const radialProgress = document.querySelector('.RadialProgress');

const setProgress = (progress) => {
  const value = `${progress}`;
  radialProgress.style.setProperty('--progress', value)
  radialProgress.innerHTML = value
  radialProgress.setAttribute('aria-valuenow', value)
}

setProgress(controller.value)
controller.oninput = () => {
  setProgress(controller.value)
}




var values = [1,3,5,10,20,50,100];    //values to step to

var input = document.getElementById('input'),
   output = document.getElementById('output');

input.oninput = function(){
    output.innerHTML = values[this.value];
};
input.oninput(); //set default value 

function toggleSteps(element) {
  var minutes = parseInt(element.value);
  if (minutes > 10) {
      element.step = 10;
  } else {
      element.step = 1;
  }
}