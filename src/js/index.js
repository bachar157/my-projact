import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '../sass/style.scss';
import '../css/style.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/popper';
import '@fortawesome/fontawesome-free/js/all'

$(document).ready(function () {
    $("#myBtn").on("click", function () {
        read();
    });
 
    $(".reply").click(function () {
        $(this).parents("div.row").next("div.card").toggle();
    });
  });
 
  function read() {
     var dots = document.getElementById("dots");
     var morText = document.getElementById("more");
     var btnText = document.getElementById("myBtn");
 
     if (dots.style.display === "none") {
         dots.style.display = "inline";
         btnText.innerHTML = "عرض المزيد";
         morText.style.display = "none";
     }
     else {
         dots.style.display = "none";
         btnText.innerHTML = "عرض عناصر اقل"
         morText.style.display = "inline";
     }
  }

  $(document).ready(function () {
    $(".first-list-element").addClass("active");

    $(".nav-item").click(function () {
       $(".nav-item").removeClass("active");
       $(this).addClass("active");
    });

    $("#toggler").click (function (event) {
        $('#wrap').toggleClass('toggled');
    });
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// إضافة فترة زمنية مقدارها 800 ميلي ثانية عند التنقل بين عناصر القائمة
// تم إنقاص مقدار 90 بكسل من مكان التنقل حتى يتناسب مع مكان كل قسم 



$(document).ready (function () {
  $('a.scroll').on('click', function (event) {
    var hash = this.hash

    $('html, body').animate(
      { scrollTop: $(hash).offset().top - 90 },
      800,
      function () {}
    )
  });

  //if (checkVisible($('#statistics'))) {
    $('.circle')
      .circleProgress({
        startAngle: -Math.PI / 2,
        fill: '#0575e6'
      })
      .on('circle-animation-progress', function (event, progress, stepValue) {
        $(this)
          .find('span')
          .html(Math.round(stepValue * 100) + '%')
      })
 // }
});



$(document).ready (function(){
  $("a.scroll").on('click', function(event) {

       var hash = this.hash;

       $('html, body').animate({scrollTop: $(hash).offset().top - 100}, 800, function(){});
   
   });
   $('.timer').countTo();

   $(function () {
    $("#commentForm").validate();
});
});