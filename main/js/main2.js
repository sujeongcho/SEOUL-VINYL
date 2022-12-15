(function () {
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
  const $clickMenu = document.querySelectorAll(".click_menu");
  const $mobileMenu = document.querySelector(".mobile_menu");
  const $mobile_menu_list = document.querySelector(".mobile_menu_list");
  const $xMark = document.querySelector(".x_mark");
  const $container = document.querySelector(".contents");

  const $plusIcon = document.querySelectorAll(".plus_icon");
  const $mobileOption = document.querySelectorAll(".mobile_menu_option");
  const $plus = document.querySelectorAll(".plus");

  for (let i = 0; i < $clickMenu.length; i++) {
    $clickMenu[i].addEventListener("click", (e) => {
      $mobileMenu.classList.remove("hidden");
      $mobileMenu.classList.add("fade-in");
      $container.classList.add("blur");

      for (let j = 0; j < $mobileOption.length; j++) {
        $mobileOption[j].classList.add("hidden");
        $plus[j].classList.toggle("fa-plus", true);
        $plus[j].classList.toggle("fa-minus", false);
      }
    });
  }

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

  // 메인 바이닐 리스트
  const vinylObj = [
    {
      title: "Vince Guaraldi",
      singer: "A Charlie Brown Christmas",
      text: "크리스마스 캐롤 앨범의 스테디 셀러이자 베스트 셀러 앨범으로, <br><br>크리스마스 TV 스페셜 애니매이션으로 기획된 [찰리 브라운 크리스마스]의 음악!",
      mood: "#CHRISTMAS",
    },
    {
      title: "Seven EP",
      singer: "Men I Trust",
      text: `몽환적이면서도 레트로한 사운드로 많은 사랑을 받고 있는 몬트리올 출신 드림팝 밴드 Men I Trust의 대표 앨범 중 하나인 [SEVEN] <br><br> 따듯한 햇살을 맞으며 기분 좋은 안락함을 안겨줍니다. <br><br> 포근한 침대에서도 산뜻한 바람을 맞으면서도 좋은 파트너가 되어줄 거에요!`,
      mood: "#CHILL",
    },
    {
      title: "REPEATED VIEWING",
      singer: " THE BEACH HOUSE",
      text: `이 앨범은 1978 새턴상 최고의 공포 영화상 수상작인 위커맨(1973)의 촬영지 근처 해변을 숙취에 시달리며 산책하던 중 발견된 폐가에서 영감을 얻었습니다. <br><br> 어쩐지 긴장감이 느껴지는 영화 속 주인공이 되고싶을 때 이 LP를 들어보면 어떨까요?`,
      mood: "#DARK",
    },
    {
      title: "I CARE BECAUSE YOU DO",
      singer: "APHEX TWIN",
      text: `테크노와 앰비언트 장르의 레전드 에이펙스 트윈이 본격적으로 IDM 사운드를 구사하기 시작한 앨범으로 음지에 묻혀있던 IDM이라는 장르를 처음으로 각인시킨 앨범이라고 할 수 있습니다. <br><br> 아날로그 시스템을 통해 녹음한 마지막 앨범으로, 희소한 가치를 지니고 있죠. <br><br> 어딘가 집중하고 싶거나 나만의 리듬을 유지하고 싶을 때 이 앨범을 들어보세요.`,
      mood: "#FOCUS",
    },
    {
      title: "Yeezus LP",
      singer: "KANYE WEST",
      text: `맥시멀리즘을 추구하던 칸예가 이전의 스타일과는 전혀 다른 완전히 파격적인 변신을 선보인 앨법입니다.<br><br> 전작에서는 수없이 많은 샘플들과 중첩된 사운드를 통해 그야말로 '빵빵한' 사운드를 들려주었다면, 이 앨범을 통해서는 간결하된 정제되지 않은 듯한 느낌을 줍니다.<br><br> 진한 데킬라 한잔에 선글라스를 써줘야할 것 같은 기분. 아시죠?`,
      mood: "#HIPHOP",
    },
  ];

  let vinylNum = 0;

  window.addEventListener("onload", changeVinylImg(vinylNum));

  // 바이닐 이미지 바꾸기
  function changeVinylImg(i) {
    const $vinylImg = document.querySelector(".main_vinyl_img");
    $vinylImg.innerHTML = null;
    const img = document.createElement("img");
    img.src = `img/vinylimg/vinylimg${i}.png`;
    img.id = "vinyl";
    $vinylImg.append(img);

    changeVinyEx(i);
  }

  function changeVinyEx(i) {
    const $vinylContents = document.querySelector(".main_contents_left");
    $vinylContents.innerHTML = `
      <div>
      <h1 id="main_vinyl_num">0${i + 1}.</h1>
      <h1 id="main_vinyl_mood">${vinylObj[i].mood}</h1>
                  <h1 id="main_vinyl_title">[${vinylObj[i].title}]</h1>
                  <h1 id="main_vinyl_singer">${vinylObj[i].singer}</h1>
                  <h1 id="main_vinyl_text">
                  ${vinylObj[i].text}
                  </h1>
                  <button id="viewmore">VIEW MORE ></button>
                  </div>
      `;
  }

  // play 버튼 클릭 이벤트
  const $preBtn = document.querySelector("#pre");
  const $preStop = document.querySelector("#stop");
  const $preNext = document.querySelector("#next");

  $preBtn.addEventListener("click", (e) => {
    if (vinylNum) {
      vinylNum -= 1;
    } else {
      vinylNum = 4;
    }

    changeVinylImg(vinylNum);
  });

  $preNext.addEventListener("click", (e) => {
    if (vinylNum < 4) {
      vinylNum += 1;
    } else {
      vinylNum = 0;
    }

    changeVinylImg(vinylNum);
    changeVinyEx(vinylNum);
  });

  // new swiper
  var swiper = new Swiper(".new_Swiper", {
    768: {
      spaceBetween: 35, // 슬라이드 사이 여백
      slidesPerView: 3, // 한 슬라이드에 보여줄 갯수
    },

    slidesPerView: 1, // 한 슬라이드에 보여줄 갯수
    spaceBetween: 20, // 슬라이드 사이 여백
    autoplay: {
      //자동슬라이드 (false-비활성화)
      delay: 2500, // 시간 설정
    },

    loop: true, // 슬라이드 반복 여부

    loopAdditionalSlides: 1,
    // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정

    navigation: {
      // 버튼
      nextEl: "#new_next_btn",
      prevEl: "#new_pre_btn",
    },
  });

  //지도
  var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(37.5410317, 126.987216), // 지도의 중심좌표
      level: 1, // 지도의 확대 레벨
    };

  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
  var map = new kakao.maps.Map(mapContainer, mapOption);

  // 마커가 표시될 위치입니다
  var markerPosition = new kakao.maps.LatLng(37.5410317, 126.987216);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  function zoomIn() {
    // 현재 지도의 레벨을 얻어옵니다
    var level = map.getLevel();

    // 지도를 1레벨 내립니다 (지도가 확대됩니다)
    map.setLevel(level - 1);

    // 지도 레벨을 표시합니다
    displayLevel();
  }

  function zoomOut() {
    // 현재 지도의 레벨을 얻어옵니다
    var level = map.getLevel();

    // 지도를 1레벨 올립니다 (지도가 축소됩니다)
    map.setLevel(level + 1);

    // 지도 레벨을 표시합니다
    displayLevel();
  }

  // best 굿즈 리스트
  const bestGoods = [
    { title: "poster", info: "ver.1", price: "10,000원" },
    { title: "poster", info: "ver.2", price: "10,000원" },
    { title: "서울 바이닐 맨투맨", info: "ORANGE", price: "35,000원" },
    { title: "서울 바이닐 맨투맨", info: "BLACK", price: "35,000원" },
    { title: "서울 바이닐 맨투맨", info: "WHITE", price: "35,000원" },
    { title: "서울 바이닐 머그컵", info: "WHITE", price: "13,000원" },
    { title: "서울 바이닐 머그컵", info: "ORANGE", price: "13,000원" },
    { title: "서울 바이닐 맨투맨", info: "ORANGE", price: "35,000원" },
    { title: "서울 바이닐 맨투맨", info: "BLACK", price: "35,000원" },
    { title: "서울 바이닐 맨투맨", info: "WHITE", price: "35,000원" },
    { title: "서울 바이닐 머그컵", info: "WHITE", price: "13,000원" },
    { title: "서울 바이닐 머그컵", info: "ORANGE", price: "13,000원" },
  ];

  const $best_item_list = document.querySelector(".best_item_list");
  for (let i = 0; i < bestGoods.length; i++) {
    const $best_item = document.createElement("div");
    $best_item.className = "best_item";
    $best_item.innerHTML = `
    <img src="../img/goods/goods${i}.png" alt="" class="best_item_img" />
                  <h1 class="best_item_title">${bestGoods[i].title}</h1>
                  <h1 class="best_item_singer">${bestGoods[i].info}</h1>
                  <h1 class="best_item_price">${bestGoods[i].price}</h1>
    `;
    $best_item_list.append($best_item);
  }

  // new

  const newArr = [
    { title: "3집 Vol. 2 삐따기", singer: "강산에", price: "39,500원" },
    { title: "Everyday Is Christmas", singer: "Sia", price: "38,500원" },
    { title: "2집", singer: "김광석", price: "45,000원" },
    { title: "Last Good-Bye", singer: "Tomoko Aran", price: "49,000원" },
    { title: "Night Lights", singer: "Gerry Mulligan", price: "52,500원" },
    { title: "2 [발매 10주년 기념반 2LP, Bonus Track]", singer: "Mac DeMarco", price: "51,000원" },
    { title: "Getz / Gilberto (Verve)", singer: "Stan Getz & Joao Gilberto", price: "47,500원" },
    { title: "Jazz Brazil", singer: "[180g LP] [게이트폴드 슬리브]", price: "33,500원" },
    { title: "Explorations LP", singer: "Bill Evans Trio", price: "31,000원" },
    { title: "동백꽃 필 무렵 드라마 OST", singer: "[컬러 LP]", price: "43,000원" },
  ];

  const $new_item_list = document.querySelector(".new_item_list");
  for (let i = 0; i < newArr.length; i++) {
    const $new_item = document.createElement("div");
    $new_item.classList.add("new_item", "swiper-slide");
    $new_item.innerHTML = `
    <img src="../img/vinylCover/vinyl${i + 1}.png" alt="" />
    <div class="new_item_ex hidden">
      <h1 id="new_title">${newArr[i].title}</h1>
      <h1 id="new_singer">${newArr[i].singer}</h1>
      <h1 id="new_price">${newArr[i].price}</h1>
    `;

    $new_item_list.append($new_item);
  }

  const $new_item_img = document.querySelectorAll(".new_item");
  const $new_item_ex = document.querySelectorAll(".new_item_ex");

  for (let i = 0; i < $new_item_img.length; i++) {
    $new_item_img[i].addEventListener("mouseover", (e) => {
      $new_item_ex[i].classList.remove("hidden");
    });
    $new_item_img[i].addEventListener("mouseout", (e) => {
      $new_item_ex[i].classList.add("hidden");
    });
  }
})();
