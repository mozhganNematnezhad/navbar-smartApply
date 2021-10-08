let dropdown_C = document.querySelector("#custom-main-dropdown-menu-C");
let navItem_C = document.querySelectorAll(".nav-item")[0];

let dropdown_A = document.querySelector("#custom-main-dropdown-menu-A");
let navItem_A = document.querySelectorAll(".nav-item")[1];

let dropdown_N = document.querySelector("#custom-main-dropdown-menu-N");
let navItem_N = document.querySelectorAll(".nav-item")[2];

// کانادا
navItem_C.addEventListener("mouseover", function () {
  dropdown_C.style.display = "block";
});

navItem_C.addEventListener("mouseout", function () {
  dropdown_C.style.display = "none";
});

// استرالیا
navItem_A.addEventListener("mouseover", function () {
  dropdown_A.style.display = "block";
});

navItem_A.addEventListener("mouseout", function () {
  dropdown_A.style.display = "none";
});

// نیوزلند
navItem_N.addEventListener("mouseover", function () {
  dropdown_N.style.display = "block";
});

navItem_N.addEventListener("mouseout", function () {
  dropdown_N.style.display = "none";
});

// برای تعییر سایز   منوی دراپ دووون  کانادا

  function myDropdown() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    document.querySelector("#custom-main-dropdown-menu-C").style.width =
      w - 70 + "px";
  }

  window.addEventListener("resize", myDropdown);



// mobile-wrapper
// Closes the sidebar menu

function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
  // document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
 
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

//برای کانادا هست که اون دراپش در حالت موبایل باز میشه

//
let navItemC = document.querySelector("#nav-item_C");
let subMenu = document.querySelector("#sub__menu");
let iconC = document.querySelector(".icon__C ");

// منظور از فلگ یک متغییر با مقدار بولین هست.
// دو حالت داره یا true یا  false
// بین این دوحالت با کلیک کردن سوییچ میکنیم
// مثلا میگیم اگ فالس بود ینی منو بسته هست پس بازش کن
// اگع ترو بود ینی باز هست پس ببندش
// و حالت فلگ رو برعکس میکنیم

//  اول بطور پیش فرض فالس هست
// یعنی منو بسته هست
// یکبار که کلیک میشه منو باز میشه و فلگ هم ترو
// دوباره بسته ک میشه فلگ فالس میشه

// تو شرط ها اگ دقت کنید گفتیم اگ فالس بود بیاد دیسپلی رو بلاک کنه
// منظور از فالس بودن اینه ک اگه منو بسته بود بیاد بازش کنه
// و وقتی که بازش میکنه فلگ ترو میشه
// و باز گفتیم اگ ترو بود بیاد دیسپلی رو نان کنه
// یعنی اگه زیرمنو باز بود بیاد ببنده

let flag = false;
navItemC.addEventListener("click", function () {
  if (flag == false) {
    subMenu.style.opacity = 1;
    subMenu.style.display = "block";
    iconC.style.transform = "rotate(-90deg)";
    flag = true;
  } else if (flag == true) {
    subMenu.style.opacity = 0;
    iconC.style.transform = "rotate(0deg)";
    setTimeout(function () {
      subMenu.style.display = "none";
    }, 1000);
    flag = false;
  }
});

// منوی شرایط محصول

subMenuShariyet = document.querySelector("#sub__menu_shariyet");
listGroupMobile = document.querySelector("#list-group-mobile");
let iconmobileS = document.querySelector(".icon__S");

let flagShariyet = false;
subMenuShariyet.addEventListener("click", function () {
  if (flagShariyet == false) {
    listGroupMobile.style.opacity = 1;
    listGroupMobile.style.display = "block";
    iconmobileS.style.transform = "rotate(-90deg)";
    flagShariyet = true;
  } else if (flagShariyet == true) {
    listGroupMobile.style.opacity = 0;
    iconmobileS.style.transform = "rotate(0deg)";
    setTimeout(function () {
      listGroupMobile.style.display = "none";
    }, 1000);
    flagShariyet = false;
  }
});

// منوی دانشگاه و کالج ها

universityCollage = document.querySelector("#university_collage");
listGroupMobileUni = document.querySelector("#list-group-mobileUNI");
iconUni = document.querySelector(".icon_uni");

let flagUniversity = false;
universityCollage.addEventListener("click", function () {
  if (flagUniversity == false) {
    listGroupMobileUni.style.opacity = 1;
    listGroupMobileUni.style.display = "block";
    iconUni.style.transform = "rotate(-90deg)";
    flagUniversity = true;
  } else if (flagUniversity == true) {
    listGroupMobileUni.style.opacity = 0;
    iconUni.style.transform = "rotate(0deg)";
    setTimeout(function () {
      listGroupMobileUni.style.display = "none";
    }, 1000);
    flagUniversity = false;
  }
});

//  رشته های تحصیلی

major = document.querySelector("#major");
listGroupMobileMajor = document.querySelector("#list-group-mobilemajor");
iconM = document.querySelector(".icon_M");

let flagmajor = false;
major.addEventListener("click", function () {
  if (flagmajor == false) {
    listGroupMobileMajor.style.opacity = 1;
    listGroupMobileMajor.style.display = "block";
    iconM.style.transform = "rotate(-90deg)";
    flagmajor = true;
  } else if (flagmajor == true) {
    listGroupMobileMajor.style.opacity = 0;
    iconM.style.transform = "rotate(0deg)";
    setTimeout(function () {
      listGroupMobileMajor.style.display = "none";
    }, 1000);
    flagmajor = false;
  }
});

//  استان و سهرهاا

town = document.querySelector("#town");
listGroupMobileTown = document.querySelector("#list-group-mobileTown");
iconT = document.querySelector(".icon_t");

let flagTown = false;
town.addEventListener("click", function () {
  if (flagTown == false) {
    listGroupMobileTown.style.opacity = 1;
    listGroupMobileTown.style.display = "block";
    iconT.style.transform = "rotate(-90deg)";
    flagTown = true;
  } else if (flagTown == true) {
    listGroupMobileTown.style.opacity = 0;
    iconT.style.transform = "rotate(0deg)";
    setTimeout(function () {
      listGroupMobileTown.style.display = "none";
    }, 1000);
    flagUniversity = false;
  }
});

// شرایط زندگی

let lifs = document.querySelector("#lifs");
let listGroupMobilelifs = document.querySelector("#list-group-mobilelifs");
let iconl = document.querySelector(".icon_L");

let flagLifs = false;
lifs.addEventListener("click", function () {
  if (flagLifs == false) {
    listGroupMobilelifs.style.opacity = 1;
    listGroupMobilelifs.style.display = "block";
    iconl.style.transform = "rotate(-90deg)";
    flagLifs = true;
  } else if (flagTown == true) {
    listGroupMobilelifs.style.opacity = 0;
    iconl.style.transform = "rotate(0deg)";
    setTimeout(function () {
      listGroupMobilelifs.style.display = "none";
    }, 1000);
    flagLifs = false;
  }
});

//  استرالیا

let navItemA = document.querySelector("#nav-item_A");
let subMenuA = document.querySelector("#sub__menu-A");
let iconA = document.querySelector(".icon__A ");

let flagosteralia = false;
navItemA.addEventListener("click", function () {
  if (flagosteralia == false) {
    subMenuA.style.opacity = 1;
    subMenuA.style.display = "block";
    iconA.style.transform = "rotate(-90deg)";
    flagosteralia = true;
  } else if (flagosteralia == true) {
    subMenuA.style.opacity = 0;
    iconA.style.transform = "rotate(0deg)";
    setTimeout(function () {
      subMenuA.style.display = "none";
    }, 1000);
    flagosteralia = false;
  }
});

// زیر منوی استرالییا

let navitemA = document.querySelector("#sub__menu_A");
let listGroupMobileA = document.querySelector("#list-group-mobile__A");
let iconAA = document.querySelector(".icon__AA");

let flagsubOS = false;
navitemA.addEventListener("click", function () {
  if (flagsubOS == false) {
    listGroupMobileA.style.opacity = 1;
    listGroupMobileA.style.display = "block";
    iconAA.style.transform = "rotate(-90deg)";
    flagsubOS = true;
  } else if (flagsubOS == true) {
    listGroupMobileA.style.opacity = 0;
    iconAA.style.transform = "rotate(0deg)";
    setTimeout(function () {
      listGroupMobileA.style.display = "none";
    }, 1000);
    flagsubOS = false;
  }
});

// نیوزلند

let navitemN = document.querySelector("#nav-item_N");
let subMenuN = document.querySelector("#sub__menu-N");
let iconN = document.querySelector(".icon__N");

let flagNewZealand = false;
navitemN.addEventListener("click", function () {
  if (flagNewZealand == false) {
    subMenuN.style.opacity = 1;
    subMenuN.style.display = "block";
    iconN.style.transform = "rotate(-90deg)";
    flagNewZealand = true;
  } else if (flagNewZealand == true) {
    subMenuN.style.opacity = 0;
    iconN.style.transform = "rotate(0deg)";
    setTimeout(function () {
      subMenuN.style.display = "none";
    }, 1000);
    flagNewZealand = false;
  }
});

// زیر منوی نیوزلند

let navitemNN = document.querySelector("#sub__menu_N");
let listGroupMobileN = document.querySelector("#list-group-mobile__N");
let iconNN = document.querySelector(".icon__NN");

let flagsubNew = false;
navitemNN.addEventListener("click", function () {
  if (flagsubNew == false) {
    listGroupMobileN.style.opacity = 1;
    listGroupMobileN.style.display = "block";
    iconNN.style.transform = "rotate(-90deg)";
    flagsubNew = true;
  } else if (flagsubNew == true) {
    listGroupMobileN.style.opacity = 0;
    iconNN.style.transform = "rotate(0deg)";
    setTimeout(function () {
      listGroupMobileN.style.display = "none";
    }, 1000);
    flagsubNew = false;
  }
});

