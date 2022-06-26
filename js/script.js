/////// Enable tooltip of Bootstrap5
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

/////// Prevent closing from click inside dropdown
document.querySelectorAll(".dropdown-menu").forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
// end querySelectorAll

function numberFormat(val) {
  // remove sign if negative
  var sign = 1;
  if (val < 0) {
    sign = -1;
    val = -val;
  }
  // trim the number decimal point if it exists
  let num = val.toString().includes(".")
    ? val.toString().split(".")[0]
    : val.toString();
  let len = num.toString().length;
  let result = "";
  let count = 1;

  for (let i = len - 1; i >= 0; i--) {
    result = num.toString()[i] + result;
    if (count % 3 === 0 && count !== 0 && i !== 0) {
      result = "." + result;
    }
    count++;
  }

  // add number after decimal point
  if (val.toString().includes(".")) {
    result = result + "," + val.toString().split(".")[1];
  }
  // return result with - sign if negative
  return sign < 0 ? "-" + result : result;
}

document.querySelector('.btn-dat-hang').addEventListener('click', function () {
  this.remove();
})

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoPlay: 3000,
    mouseDrag: true,
    center: true,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 3,
        nav: false,
      },
      1024: {
        items: 6,
        nav: false,
      },
      1440: {
        items: 8,
        nav: false,
      },
    },
  });

  $(".code-attr").click(function () {
    $(".attr-desc").text("Chi tiết biến thể có thuộc tính là " + $(this).val());
    $(".price-attr").html(
      numberFormat(parseInt($(".price-attr").text()) + 999967) + "<sup>đ</sup>"
    );
    $(".price-old-attr").html(
      numberFormat(parseInt($(".price-old-attr").text()) + 999967) +
        "<sup>đ</sup>"
    );
  });

  
  $('.ship-to-other').click(function () {
    if ($('.ship-to-other').is(':checked')) {
      $('.col-buyer').removeClass('col-12');
      $('.col-buyer').addClass('col-6');
      $('.checkout-fieldlabel').text("Thông tin thanh toán");
    } else {
      $('.col-buyer').removeClass('col-6');
      $('.col-buyer').addClass('col-12');
      $('.checkout-fieldlabel').text("Thông tin thanh toán và nhận hàng");
    }
  });
});
