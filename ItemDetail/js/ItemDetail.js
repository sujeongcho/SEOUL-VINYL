var count = 1;
var countEl = document.getElementById("count");
var total_count = document.getElementById("total_count");
var total_count_view = document.getElementById("total_count_view");

function plus(){
    count++;
    countEl.value = count;
    total_count_view.value = (total_count.value * countEl.value).toLocaleString();
}
function minus(){
    if(count > 1){
        count--;
        countEl.value = count;
        total_count_view.value = (total_count.value * countEl.value).toLocaleString();
    }
}

  // 메뉴
  const $desktop = document.querySelector(".desktop");
  const $mobile = document.querySelector(".mobile");
  const $selectList = document.querySelector(".select_list");
  const $menu = document.querySelector(".menu");
  const $bottomMenu = document.querySelector(".menu_bottom");

  window.addEventListener("resize", (e) => {
    mobile();
    tab();
  });

  // tab size
  function tab() {
    if (window.innerWidth < 1024) {
      $menu.classList.add("hidden");
    } else {
      $menu.classList.remove("hidden");
    }
  }

  // 모바일 size
  function mobile() {
    if (window.innerWidth < 768) {
      $bottomMenu.classList.remove("hidden");
      $mobile.classList.remove("hidden");

      $desktop.classList.add("hidden");
      $selectList.classList.add("hidden");
    } else {
      $bottomMenu.classList.add("hidden");
      $mobile.classList.add("hidden");

      $desktop.classList.remove("hidden");
      $selectList.classList.remove("hidden");
    }
  }

  // 메뉴 보이게 하기
  const $menuList = document.querySelectorAll(".menu_list");
  const $meniItem = document.querySelectorAll(".menu_contents");
  for (let i = 0; i < $menuList.length; i++) {
    $menuList[i].addEventListener("mouseover", (e) => {
      $meniItem[i - 1].classList.remove("hidden");
      $meniItem[i - 1].classList.add("menu_vis");
    });

    $menuList[i].addEventListener("mouseout", (e) => {
      $meniItem[i - 1].classList.add("hidden");
    });
  }

  // tab menu
  const menuItems = document.querySelectorAll(".tab-menu__item");

  let previousSelectedItem = menuItems[0];

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      previousSelectedItem?.classList.remove("tab-menu__active");
      previousSelectedItem = item;
      item.classList.add("tab-menu__active");
    });
  });

  // mobile menu
  const $clickMenu = document.querySelector(".click_menu");
  const $mobileMenu = document.querySelector(".mobile_menu");
  const $mobile_menu_list = document.querySelector(".mobile_menu_list");
  const $xMark = document.querySelector(".x_mark");
  const $container = document.querySelector(".contents");

  const $plusIcon = document.querySelectorAll(".plus_icon");
  const $mobileOption = document.querySelectorAll(".mobile_menu_option");
  const $plus = document.querySelectorAll(".plus");

  $clickMenu.addEventListener("click", (e) => {
    $mobileMenu.classList.remove("hidden");
    $mobileMenu.classList.add("fade-in");
    $container.classList.add("blur");

    for (let i = 0; i < $mobileOption.length; i++) {
      $mobileOption[i].classList.add("hidden");
      $plus[i].classList.toggle("fa-plus", true);
      $plus[i].classList.toggle("fa-minus", false);
    }
  });

  $xMark.addEventListener("click", (e) => {
    $mobileMenu.classList.add("hidden");
    $mobileMenu.classList.remove("fade-in");
    $container.classList.remove("blur");
  });

  function selectedOption(i) {
    $mobileOption.forEach((ele) => {
      const selectedEle = ele.id;
      ele.classList.toggle("hidden", selectedEle !== `menu_${i}`);
    });

    $plus.forEach((ele) => {
      const selectedEle = parseInt(ele.dataset.id);
      ele.classList.toggle("fa-plus", selectedEle !== i);
      ele.classList.toggle("fa-minus", selectedEle === i);
    });
  }

  for (let i = 0; i < $plusIcon.length; i++) {
    $plusIcon[i].addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-minus")) {
        console.log(e.target.dataset.id);
        const $m = document.querySelector(`#menu_${e.target.dataset.id}`);
        $m.classList.add("hidden");
        e.target.classList.add("fa-plus");
        e.target.classList.remove("fa-minus");
        return;
      }

      selectedOption(i);
    });
  }
  //검색
  const $search = document.querySelector(".search");
  const $topList = document.querySelectorAll(".top_list");
  const $searchLi = document.querySelector(".sesarch_li");
  const $searchInput = document.createElement("input");
  const $xIcon = document.createElement("i");

  $search.addEventListener("click", (e) => {
    for (let i = 0; i < $topList.length; i++) {
      $topList[i].classList.add("hidden");
    }
    $searchInput.type = "text";
    $searchInput.className = "search_input";
    $searchLi.append($searchInput);
    $xIcon.classList.add("fa-solid", "fa-xmark");
    $searchLi.append($xIcon);
    $xIcon.classList.remove("hidden");

    $xIcon.addEventListener("click", (e) => {
      for (let i = 0; i < $topList.length; i++) {
        $topList[i].classList.remove("hidden");
      }

      $searchInput.classList.add("hidden");
      e.target.classList.add("hidden");
    });
  });
