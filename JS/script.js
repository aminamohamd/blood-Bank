

// toggle sidebar
function showSidebar() {
    var el = document.getElementById("wrapper");
    el.classList.toggle("toggled"); 
}
// line chart
document.addEventListener("DOMContentLoaded", () => {
    new Chart(document.querySelector('#lineChart'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sept','Oct','Nov','Des'],
        datasets: [{
          label: 'No. of Donater',
          data: [50, 20, 40, 31, 32, 22, 10,50, 20, 40, 31, 32],
          fill: true,
          borderColor: ' #FF4136',
          tension: 1
        },
        {
          label: 'No. of Request',
          data: [65, 59, 50, 81, 56, 55, 40,65, 59, 60, 81, 56],
          fill: true,
          borderColor: ' rgb(143,57,20)',
          tension: 1

        }
      ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });

//   pie chart
document.addEventListener("DOMContentLoaded", () => {
    new Chart(document.querySelector('#chart'), {
      type: 'doughnut',
      data: {
        labels: ['A+', 'A-' , 'B+' , 'B-' , 'AB+' , 'AB-' , 'O+' , 'O-'],
          datasets: [{
            data: [30, 40, 20, 50, 80, 90, 20 , 5],
            backgroundColor: ["#0074D9", "#FF4136", "#2ECC40",
            "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00",
            "#001f3f"]
          }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });