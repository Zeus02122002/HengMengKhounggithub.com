
let menuEnglish = [
     {'menu':'Moives' , 'link' : 'http://127.0.0.1:5500/assigment/index.html',},
     {'menu':'cinema' , 'link' : 'http://127.0.0.1:5500/assigment/cinema.html'},
     {'menu':'promotion' , 'link' : 'http://127.0.0.1:5500/assigment/promotion.html'},
     {'menu':"new & activity" , 'link' : 'http://127.0.0.1:5500/assigment/new.html'},
     {'menu':'contacts us' , 'link' : 'http://127.0.0.1:5500/assigment/contact.html'},
  ];
  let menuKhmer = [
    {'menu_kh':'ភាពយន្ត' , 'link' : 'http://127.0.0.1:5500/assigment/index.html' },
    {'menu_kh':'រោងភាពយន្ត' ,'link' :'http://127.0.0.1:5500/assigment/cinema.html' },
    {'menu_kh':'ប្រូម៉ូសិន' , 'link' : 'http://127.0.0.1:5500/assigment/promotion.html'},
    {'menu_kh':'ពត័មាននិង​សកម្មភាព', 'link' : 'http://127.0.0.1:5500/assigment/new.html'},
    {'menu_kh':'ទំនាក់ទំនងយើងខ្ញុំ', 'link' : 'http://127.0.0.1:5500/assigment/contact.html'},
  ];
  let  listMenu = document.querySelector(".navigation > .box_menu > .menu");
  let  iconBar = document.querySelector(".navigation > .icon_bar > i ");
  let  boxMenu = document.querySelector(".navigation > .box_menu");
  const btnSearch = document.querySelectorAll(".search");
  const btnChangeLanguage = document.querySelector(".menu_right > .language");
    //  =============post list  to menu
   window.addEventListener("DOMContentLoaded" , function(){
    let item = '';
    for (let i = 0  ; i < menuEnglish.length  ; i++){
       item += `
       <li><a href = '${menuEnglish[i]['link']}'  class="sub_active">${menuEnglish[i]['menu']}</a></li>
       `;
    }
     listMenu.innerHTML = item; 
   });
     //============== change langauge menu list to khmer 
         
     btnChangeLanguage.addEventListener("click" , function(){
          let checkLanguage = listMenu.classList.contains("khmer_active");
          let item = '' ;
          if(checkLanguage){
            listMenu.classList.remove('khmer_active');
            for (let i = 0  ; i < menuEnglish.length  ; i++){
                item += `
                <li><a href = '${menuEnglish[i]['link']}' class="su b_active">${menuEnglish[i]['menu']}</a></li>
                `;
             }
              listMenu.innerHTML = item; 
              btnChangeLanguage.innerHTML = 'EN';
              btnChangeLanguage.classList.remove('font_language');
          } else{
            listMenu.classList.add('khmer_active');
            for (let i = 0  ; i < menuKhmer.length  ; i++){
               item += `
               <li><a href = '${menuKhmer[i]['link']}' >${menuKhmer[i]['menu_kh']}</a></li>
               `;

            }
             listMenu.innerHTML = item; 
             btnChangeLanguage.innerHTML = 'ខ្មែរ';
             btnChangeLanguage.classList.add('font_language');
            }
     });
     //    =============== make menu to slide when responsive 
  function menuSlide () {
    let checkMenu = boxMenu.classList.contains("menu_active");
    if (checkMenu){
        boxMenu.classList.remove("menu_active");
        
    } else {
        boxMenu.classList.add("menu_active");
    }
  }
  iconBar.addEventListener("click" , menuSlide );
  boxMenu.addEventListener("click" , menuSlide);
//   ================ make search popup 
    let searchPopUp = document.querySelector('.find');
    $(document).ready(function(){
        btnSearch.forEach(function(e){
                $(e).click(function(){
                    $(".find").css({
                      'display':'flex',

                    });
                    $(".find").slideDown();
                    
                });
            });
            $('.xmark').click(function(){
              $(".find").css({
                'display':'none',
              });
              $('.find').slideUp();
            });
          });
// =====================
   const arrayPopularLink = [
   {'pop_link' : 'popular link'},
   {'pop_link' : 'find a movies'},
   {'pop_link' : 'find a cinema'},
   {'pop_link' : 'find a coming soon movies'},
   {'pop_link' : 'promotion'},
   ];
     let popularLink = document.querySelector(".popular_link");
     window.addEventListener("DOMContentLoaded" , function(){
     let item = '';
      for (let i = 0 ; i < arrayPopularLink.length ; i++){
        item += `
        <p><a href="">${arrayPopularLink[i]['pop_link']}</a></p>
        `;
        popularLink.innerHTML = item;
      }
     });
// ================make slider
   let image = document.querySelectorAll(".box_slider > .box_img > img");
   let nextBtn = document.querySelector(".next");
   let backBtn = document.querySelector(".back");
   let boxSlide  = document.querySelector(".box_slider")
   let counter = 0 ;
   let allDot = document.querySelectorAll(".dot");
   function nextSlide (){
       image[counter].style.animation = 'nextOut 0.8s forwards';
       if(counter == image.length - 1){
        counter = 0 ;
       } else {
        counter++;
       }
       image[counter].style.animation = 'nextIn 0.8s forwards';
       slideDot();
    }
    nextBtn.addEventListener("click" , nextSlide);

    function backSlide (){
      image[counter].style.animation = 'backOut 0.8s forwards';
      if(counter == 0){
        counter = image.length -1; 
      } else {
        counter --;
      }
      image[counter].style.animation = 'backIn 0.8s forwards';
      slideDot();
    }
    
    function slideDot(){
      for (let i = 0 ; i<allDot.length ; i++){
        allDot[i].className =allDot[i].className.replace("active" , "");
      }
      allDot[counter].classList.add("active");
    }

  backBtn.addEventListener("click" , backSlide);
  allDot.forEach(function(dot){
    dot.addEventListener("click" , function(e){
      let indexDot = e.target.getAttribute('attr');
      if(indexDot > counter){
        image[counter].style.animation='nextOut 0.8s forwards';
        counter = indexDot;
        image[counter].style.animation = 'nextIn 0.8s forwards';
      } else if(indexDot==counter) {
         return ;
      } else if(indexDot < counter){
       image[counter].style.animation = 'backOut 0.8s forwards';
       counter = indexDot;
       image[counter].style.animation = 'backIn 0.8s forwards';
      }
      slideDot();
    });
  });
  function  autoSliding (){
    test = setInterval(function(){
      nextSlide();
   } , 1500);
  }
  autoSliding();
boxSlide.addEventListener("mouseout" , function(){
   clearInterval(test);
});
   
boxSlide.addEventListener("mouseleave", function(){
   autoSliding()
});
// =================advertise array post in javscript
let boxAdvertise = document.querySelector(".box_adv");
         let arrayAdvertise = [
           {'adv_img' : 'photo/adv1.jpg', 'link' : 'https://cisc.school/'},
           {'adv_img' : 'photo/adv2.jpg',  'link' : 'https://www.wingbank.com.kh/en/'},
           {'adv_img' : 'photo/adv3.png', },
           {'adv_img' : 'photo/adv4.jpg','link' : 'https://www.kdsb.com.kh/kdsb-en/about-us/about-us' },
           {'adv_img' : 'photo/adv5.jpg', 'link' : 'https://www.sbilhbank.com.kh/en/'},
         ];
         let newArrayAdvertise =  arrayAdvertise.map(function(e){
        return  `
        <a href="${e.link}" target="_blank"><img src="${e.adv_img}" alt=""></a>
        `;
      }).join('');
       boxAdvertise.innerHTML= newArrayAdvertise;
// ======================
   let arrayCard = [
        {
          'img' : 'photo/cinema1.jpg',
          'movie_date' : '24 aug 2023',
          'movie_name' : 'The House',
          'movie_type' : 'horror',
          'movie_time' : '1 HR. 36 MINS',
          'category'   : 'now',
          'link' : 'https://www.youtube.com/watch?v=n8VX3cB5jN8',
       },
         {
          'img' : 'photo/4dmax1.jpg',
          'movie_date' : '24 aug 2023',
          'movie_name' : 'Grand Turismo',
          'movie_type' : 'action / Thriller / Romance',
          'category'   : '4d',
          'link' : 'https://www.youtube.com/watch?v=7m9oLnN4M4M',
        },
        {
          'img' : 'photo/cinema3.jpg',
          'movie_date' : '18 aug 2023',
          'movie_name' : 'long live love',
          'movie_type' : 'comedy',
          'movie_time' : '2 HR. 14 MINS',
          'category'   : 'now',
          'link' : 'https://www.youtube.com/watch?v=W5rsdp5h5K8&t=1s',
       },
        {
          'img' : 'photo/cinema4.jpg',
          'movie_date' : '18 aug 2023',
          'movie_name' : 'Lost In the Stars',
          'movie_type' : 'Thriller / crime',
          'movie_time' : '2 HR. 02 MINS',
          'category'   : 'now',
          'link' : 'https://www.youtube.com/watch?v=RKnTodRgz_s',
       },
       
       {
        'img' : 'photo/4dmax2.jpg',
        'movie_date' : '17 aug 2023',
        'movie_name' : 'blue beetle',
        'movie_type' : 'Action / Advanture / Scr-fi ',
        'movie_time' : '2 HR. 08 MINS',
        'category'   : '4d',
        'link' : 'https://www.youtube.com/watch?v=IbY-Dun7jVo',
       },
       {
        'img' : 'photo/cinema6.jpg',
        'movie_date' : '14 aug 2023',
        'movie_name' : 'talk to me',
        'movie_type' : 'horror',
        'movie_time' : '1 HR. 35 MINS',
        'category'   : 'now',
        'link' : 'https://www.youtube.com/watch?v=XJ_iuOHtXAY&t=1s',
       },
       {
        'img' : 'photo/cinema7.jpg',
        'movie_date' : '10 aug 2023',
        'movie_name' : 'love you a millon times',
        'movie_type' : 'Romance',
          'movie_time' : '1 HR. 30 MINS',
          'category'   : 'now',
          'link' : 'https://www.youtube.com/watch?v=h90HSkCSsjc',  
         },
        
        {
          'img' : 'photo/cinema8.jpg',
          'movie_date' : '10 aug 2023',
          'movie_name' : 'Tiger runningtttg',
          'movie_type' : 'Comedy',
          'movie_time' : '1 HR. 47 MINS',
          'category'   : 'now',
          'link' : 'https://www.youtube.com/watch?v=IKBquPNwhg4',
       },
      //  ==============
      {
        'img' : 'photo/cinema_soon1.jpg',
        'movie_date' : '25 aug 2023',
        'movie_name' : 'The Moon',
        'movie_type' : 'Drama',
        'movie_time' : '2 HR. 09 MINS',
        'category'   : 'soon',

     },
      {
      'img' : 'photo/cinema_soon2.jpg',
      'movie_date' : '25 aug 2023',
      'movie_name' : 'The Tank',
      'movie_type' : 'Thriller / Horror',
      'movie_time' : '1 HR. 40 MINS',
      'category'   : 'soon',
      'link' : 'https://www.youtube.com/watch?v=-1rewz0ECvg',
      },
       {
    'img' : 'photo/cinema_soon3.jpg',
    'movie_date' : '26 aug 2023',
    'movie_name' : "DOremon The Movie: Nobit's Sky Utopia",
    'movie_type' : 'Comedy / advanture / Animation',
    'movie_time' : '1 HR. 47 MINS',
    'category'   : 'soon',
   'link' : 'https://www.youtube.com/watch?v=IeHilFybTfY',
     },
     {
  'img' : 'photo/cinema_soon4.jpg',
  'movie_date' : '28 aug 2023',
  'movie_name' : 'Concrete Utopia',
  'movie_type' : 'Horror',
  'movie_time' : '2 HR. 10 MINS',
  'category'   : 'soon',
  'link' :'https://www.youtube.com/watch?v=fpBCsNVaPBo',
     },
     {
  'img' : 'photo/cinema_soon5.jpg',
  'movie_date' : '30 aug 2023',
  'movie_name' : 'KangDaniel: My Parade',
  'movie_type' : '-',
  'movie_time' : '1 HR. 42 MINS',
  'category'   : 'soon',
  'link' : 'https://www.youtube.com/watch?v=tbW3TYnmv80&t=2s',
     },

    {
  'img' : 'photo/cinema_soon6.jpg',
  'movie_date' : '30 aug 2023',
  'movie_name' : 'Ms. Shampoo',
  'movie_type' : 'Comedy / Romance',
  'movie_time' : '2 HR. 0 MINS',
  'category'   : 'soon',
  'link' : 'https://www.youtube.com/watch?v=XBie9MZhSW4',
   },
   {
  'img' : 'photo/cinema_soon7.jpg',
  'movie_date' : '31 aug 2023',
  'movie_name' : 'Para Betina Pengikut Iblis',  
  'movie_type' : 'Horror',
  'movie_time' : '1 HR. 30 MINS',
  'category'   : 'soon',
  'link' : 'https://www.youtube.com/watch?v=iIZxIJqC59c&t=2s',
  },
   {
  'img' : 'photo/cinema_soon8.jpg',
  'movie_date' : '31 aug 2023',
  'movie_name' : 'Dance Till You drop',
  'movie_type' : 'Drama',
  'movie_time' : '1 HR. 30 MINS',
  'category'   : 'soon',
  'link' : 'https://www.youtube.com/watch?v=WSDtrJBR_xc',
  },
   {
  'img' : 'photo/cinema_soon9.jpg',
  'movie_date' : '31 aug 2023',
  'movie_name' : 'The Equlizer 3',
  'movie_type' : 'Action / crime / Thriller',
  'movie_time' : '1 HR. 0 MINS',
  'category'   : 'soon',
  'link' : 'https://www.youtube.com/watch?v=e-L1FRDLBHA',
  },
  {
    'img' : 'photo/cinema_soon10.jpg',
    'movie_date' : '07 sep 2023',
    'movie_name' : 'The nun',
    'movie_type' : 'Horror',
    'movie_time' : '1 HR. 0 MINS',
    'category'   : 'soon',
    'link' : 'https://www.youtube.com/watch?v=DOPDzuSai1M&t=6s',
    },
    // =============== for kid 
    {
      'img' : 'photo/kid.jpg',
      'movie_date' : '09 Nov 2023',
      'movie_name' : 'The Marvels',
      'movie_type' : 'acition / advanture',
      'movie_time' : '1 HR. 0 MINS',
      'category'   : 'kid',
      'link' :'https://www.youtube.com/watch?v=LUOV6xJzabg',
      },
      {
        'img' : 'photo/kid2.jpg',
        'movie_date' : '22 Dec 2023',
        'movie_name' : 'Migration',
        'movie_type' : 'acition / advanture',
        'movie_time' : '1 HR. 0 MINS',
        'category'   : 'kid',
        'link' : 'https://www.youtube.com/watch?v=pA3KLOAb-I8',
        },
        {
          'img' : 'photo/kid3.jpg',
          'movie_date' : '26 Nov 2023',
          'movie_name' : 'Trolls 3: Band Together',
          'movie_type' : 'acition / comedy',
          'movie_time' : '1 HR. 0 MINS',
          'category'   : 'kid',
          'link' : 'https://www.youtube.com/watch?v=pA3KLOAb-I8&t=2s',
          },
          {
            'img' : 'photo/kid4.jpg',
            'movie_date' : '23 Nov 2023',
            'movie_name' : 'Wish',
            'movie_type' : 'Animations',
            'movie_time' : '1 HR. 1 MINS',
            'category'   : 'kid',
            'link' : 'https://www.youtube.com/watch?v=pA3KLOAb-I8&t=3s',
            },
  
  ];
   
  let boxCard = document.querySelector(".box_card");
  function showingCard(cardItem){
        let newCard = cardItem.map(function(e){
            return `
            <aside class="card">
            <main class="card_hover">
            <i class="fa-regular fa-circle-play"></i><p>${e.movie_name}</p>
            <p><i class="fa-solid fa-tag"></i><span>${e.movie_type}</span></p>
            <p><i class="fa-regular fa-clock"></i><span>${e.movie_date}</span></p>
            <a href="${e.link}"><button>Triler</button></a>
            </main>
            <main class="card_default">
                  <img src="${e.img}" alt="">
                  <p>${e.movie_date}</p>
                  <p>${e.movie_name}</p>
            </main>
           
      </aside>
      
      </aside>
            `;
        }).join('');
        boxCard.innerHTML = newCard;
  }
   let allBtn = document.querySelectorAll('.btn');
    let boxBtn = document.querySelector(".box_btn");
    boxBtn.addEventListener("click" , function(btn){
       let checkBtn = btn.target.dataset.id;
          allBtn.forEach(function(e){
               if(checkBtn){
                e.classList.remove('active');
                btn.target.classList.add('active');
               }
          });
    });
     allBtn.forEach(function(btn){
      btn.addEventListener("click" , function(e){
        let checkFilter = e.target.dataset.id;
          let newArrayCard = arrayCard.filter(function(item){
                    return item.category == checkFilter;
          });  
         showingCard(newArrayCard);
         if(checkFilter == 'all'){
          showingCard(arrayCard);
         }
     }); 
    });

  window.addEventListener("DOMContentLoaded" , function(){
   showingCard(arrayCard);
  });


