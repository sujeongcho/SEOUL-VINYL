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

  // tab
  function tab() {
    if (window.innerWidth < 1024) {
      $menu.classList.add("hidden");
    } else {
      $menu.classList.remove("hidden");
    }
  }

  // 모바일
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

  // 바이닐 생성
  const vinyl = [
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
    { title: "queen 보헤미안 랩소디 O.S.T", singer: "queen", price: "48,500원" },
    { title: "바닐라 스카이 영화음악 (Vanilla Sky OST)", singer: "Vanilla Sky", price: "58,500원" },
    { title: "Tako Tsubo", singer: "L'imperatrice", price: "44,000원" },
    { title: "How To Let Go", singer: "Sigrid", price: "36,500원" },
    { title: "Music : Songs From And Inspired By The Motion Picture", singer: "Sia", price: "31,000원" },
    { title: "2집 Hot Pink", singer: "Doja Cat", price: "37,500원" },
    { title: "Prep", singer: "Prep", price: "40,000원" },
    { title: "Christmas", singer: "Michael Bublé", price: "36,000원" },
    { title: " skiptracing vinyl", singer: "Mild High Club", price: "31,500원" },
    { title: "色彩感覚", singer: "Tomoko Aran", price: "49,000원" },
    { title: "Paradise Beach", singer: "Miki Matsubara", price: "47,500원" },
    { title: "crepuscular", singer: "KIRINJI", price: "55,000원" },
    { title: "miss.G", singer: "Naoko Gushima", price: "55,000원" },
    { title: " AUTOBAHN", singer: "INOKASIRA RANGERS", price: "27,500원" },
    { title: "Street Sensation", singer: "Kinokuniya Band", price: "50,000원" },
    { title: "이웃집 토토로 사운드 북", singer: "Hisaishi Joe", price: "60,000원" },
    { title: "A Letter From Slowboat Vinyl", singer: "Fukui Ryo", price: "39,000원" },
    { title: "Boku No Naka No Shounen", singer: "Yamashita Tatsuro", price: "77,000원" },
    { title: "Relief 72 Hours Vinyl", singer: "Yurie Kokubu", price: "77,000원" },
    { title: "벼랑 위의 포뇨 이미지 앨범", singer: "Hisaishi Joe", price: "50,000원" },
    { title: "You Should Be Here", singer: "Kehlani", price: "34,500원" },
    { title: "WINTER CITY", singer: "김아름", price: "49,000원" },
    { title: "Malibu Lp", singer: "Anderson Paak", price: "44,500원" },
    { title: "The Diary Of Alicia Keys vinyl", singer: "Alicia Keys", price: "39,500원" },
    { title: "Head In The Clouds", singer: "88rising", price: "47,500원" },
    { title: "A Fever You Can't Sweat Out", singer: "Panic! At The Disco", price: "37,500원" },
    { title: "TOTO", singer: "TOTO", price: "30,000원" },
    { title: "Yellow Submarine vinyl", singer: "beatles", price: "38,500원" },
    { title: "love me love me not", singer: "honne", price: "43,000원" },
    { title: "Modern Life Is Rubbish", singer: "Blur", price: "35,000원" },
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
    { title: "queen 보헤미안 랩소디 O.S.T", singer: "queen", price: "48,500원" },
    { title: "바닐라 스카이 영화음악 (Vanilla Sky OST)", singer: "Vanilla Sky", price: "58,500원" },
    { title: "Tako Tsubo", singer: "L'imperatrice", price: "44,000원" },
    { title: "How To Let Go", singer: "Sigrid", price: "36,500원" },
    { title: "Music : Songs From And Inspired By The Motion Picture", singer: "Sia", price: "31,000원" },
    { title: "2집 Hot Pink", singer: "Doja Cat", price: "37,500원" },
    { title: "Prep", singer: "Prep", price: "40,000원" },
    { title: "Christmas", singer: "Michael Bublé", price: "36,000원" },
    { title: " skiptracing vinyl", singer: "Mild High Club", price: "31,500원" },
    { title: "色彩感覚", singer: "Tomoko Aran", price: "49,000원" },
    { title: "Paradise Beach", singer: "Miki Matsubara", price: "47,500원" },
    { title: "crepuscular", singer: "KIRINJI", price: "55,000원" },
    { title: "miss.G", singer: "Naoko Gushima", price: "55,000원" },
    { title: " AUTOBAHN", singer: "INOKASIRA RANGERS", price: "27,500원" },
    { title: "Street Sensation", singer: "Kinokuniya Band", price: "50,000원" },
    { title: "이웃집 토토로 사운드 북", singer: "Hisaishi Joe", price: "60,000원" },
    { title: "A Letter From Slowboat Vinyl", singer: "Fukui Ryo", price: "39,000원" },
    { title: "Boku No Naka No Shounen", singer: "Yamashita Tatsuro", price: "77,000원" },
    { title: "Relief 72 Hours Vinyl", singer: "Yurie Kokubu", price: "77,000원" },
    { title: "벼랑 위의 포뇨 이미지 앨범", singer: "Hisaishi Joe", price: "50,000원" },
    { title: "You Should Be Here", singer: "Kehlani", price: "34,500원" },
    { title: "WINTER CITY", singer: "김아름", price: "49,000원" },
    { title: "Malibu Lp", singer: "Anderson Paak", price: "44,500원" },
    { title: "The Diary Of Alicia Keys vinyl", singer: "Alicia Keys", price: "39,500원" },
    { title: "Head In The Clouds", singer: "88rising", price: "47,500원" },
    { title: "A Fever You Can't Sweat Out", singer: "Panic! At The Disco", price: "37,500원" },
    { title: "TOTO", singer: "TOTO", price: "30,000원" },
    { title: "Yellow Submarine vinyl", singer: "beatles", price: "38,500원" },
    { title: "love me love me not", singer: "honne", price: "43,000원" },
    { title: "Modern Life Is Rubbish", singer: "Blur", price: "35,000원" },
  ];

  let page = 1; //페이지

  // 아이템 리스트 생성
  function makeItem() {
    const $itemLIst = document.querySelector(".item_list-row");
    $itemLIst.innerHTML = null;

    for (let i = page * 20 - 20; i < page * 20; i++) {
      const $item = document.createElement("div");
      const $itemContents = document.createElement("div");
      const $imgHeart = document.createElement("div");
      const div = document.createElement("div");

      const $itemImg = document.createElement("img");
      const $heartIcon = document.createElement("i");

      div.className = "item_list_item";
      $item.className = "item";
      $itemImg.id = "item_img";
      $imgHeart.className = "img-heart";
      $heartIcon.classList.add("fa-regular", "fa-heart", "toggle-heart");
      $itemContents.className = "item_contents";

      $itemImg.src = `img/vinylCover/vinyl${i + 1}.png`;

      $imgHeart.append($itemImg);
      $imgHeart.append($heartIcon);

      $itemContents.innerHTML = `
      <ul>
        <li id="item_title">${vinyl[i].title}</li>
        <li id="item_name">${vinyl[i].singer}</li>
        <li id="item_price">\ ${vinyl[i].price}</li>
      </ul>
      `;

      div.append($imgHeart);
      div.append($itemContents);

      $item.append(div);

      $itemLIst.append($item);
    }

    like();
    pageSelected();
    scrollTo(0, 0);
  }

  window.addEventListener("onload", makeItem());

  // 좋아요
  function like() {
    const $heart = document.querySelectorAll(".toggle-heart");
    for (let i = 0; i < $heart.length; i++) {
      $heart[i].addEventListener("click", (e) => {
        $heart[i].classList.toggle("fa-regular");
        $heart[i].classList.toggle("fa-solid");
      });
    }
  }

  // 페이징
  
  const $pageDiv = document.querySelector(".page");
  for (let i = 1; i <= Math.ceil(vinyl.length/20); i++) {
    const $pageSpan = document.createElement("span");
    $pageSpan.classList.add("pageSpan");
    $pageSpan.innerHTML = `${i}`;
    $pageDiv.append($pageSpan);
    pageSelected();
  }

  function pageSelected() {
    const $pageList = document.querySelectorAll(".pageSpan");
    $pageList.forEach((ele) => {
      const selected = parseInt(ele.innerHTML);
      ele.classList.toggle("selected", page === selected);
    });
  }

  $pageDiv.addEventListener("click", (e) => {
    const $span = document.querySelectorAll(".pageSpan");
    page = parseInt(e.target.innerHTML);
    makeItem();
  });

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
})();
