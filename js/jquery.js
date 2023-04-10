$(function () {
  // FADE OUT PRELOADER ON LOAD
  $(window).on("load", function () {
    $("#preloader").fadeOut("slow");
  });
  //   FADE IN HELP DIALOG
  $("#help_icon").on("click", function () {
    $(".help_dialog").fadeIn();
    $(".overLay").fadeIn();
  });
  //   FADE OUT HELP DIALOG
  $(".help_close").on("click", function () {
    $(".help_dialog").fadeOut();
    $(".overLay").fadeOut();
  });
  //   FADE IN RESOUECE DIALOG
  $("#resourse_icon").on("click", function () {
    $(".resourse_dialog").fadeIn();
    $(".overLay").fadeIn();
  });
  //   FADE OUT RESOUECE DIALOG
  $(".resourse_close").on("click", function () {
    $(".resourse_dialog").fadeOut();
    $(".overLay").fadeOut();
  });

  // MAKE PAGE CONTENT SCALABLE
  let el = $(".page_warpper");
  let elHeight = el.outerHeight();
  let elWidth = el.outerWidth();

  function doResize() {
    let scale;

    scale = Math.min(
      $(window).width() / elWidth,
      $(window).height() / elHeight
    );

    // MAKE SCALE LESS THAN 1 ON ALL SCREENS 
    scale<1?scale:scale=.95

    el.css({
      transform: "translate(-50%, 0%) " + "scale(" + scale + ")",
    });
  }
  doResize();
  //   FIRE <doResize> FUNCTION ON RESIZE
  $(window).on("resize", doResize);

});
