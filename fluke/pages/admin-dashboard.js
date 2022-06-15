// let list = document.querySelectorAll('.navigation li');
// function activeLink() {
//     list.forEach((item) => 
//     item.classList.remove('hovered'));
//     this.classList.add('hovered');
// }
// list.forEach((item) => 
// item.addEventListener('mouseover', activeLink));

// let toggle = document.querySelector('.toggle');
// let navigation = document.querySelector('.navigation');
// let main = document.querySelector('.main');

// toggle.onclick = function() {
//     navigation.classList.toggle('active');
// }

var xValues = ["PIG SAW", "PIG BARROW", "PIG MALE", "PIG BOAT TAINT"];
var yValues = [4260, 3970, 3454, 2390];
var barColors = [
  "lightblue",
  "orange",
  "yellow",
  "purple"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "PIG CLASSIFICATION (230,900 Sales)"
    }
  }
});