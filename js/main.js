  $(document).ready(function () {

      var button = $(".mobile");
      var nav = $(".nav");
      
      button.on("click", function () {
          nav.toggleClass("mobile-fusion")
      });
  });
