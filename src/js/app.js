import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(".popup__show").click(function () {
  var popup_id = $("#" + $(this).attr("rel"));
  $(popup_id).show();
});

$(".popup__close").click(function () {
  $(".popup").hide();
});

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/
