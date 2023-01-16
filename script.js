//accordion

$('.accordion').accordion({
	heightStyle: 'content',
	header: '> .accordion-item > .accordion-item-wrapper > .accordion-header',
    active: true,
    icons: { "header": "plus-icon", "activeHeader": "plus-icon-active" },
    collapsible: true,
    create: function( event, ui ) {
      $('.accordion-header').attr('tabIndex','-1');
} 
});

// swiper

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    a11y: {
      containerMessage: 'Слайдер из трех элементов',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
    // And if we need scrollbar
    touchEventsTarget:'swiper-container',
  });


//tabs

document.querySelectorAll('.how-we-work__step-button').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.how-we-work__step-button').forEach(function(btn){
        btn.classList.remove('how-we-work__step-button-active')});
    e.currentTarget.classList.add('how-we-work__step-button-active');
    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
        tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');});
        });
        
//burger-menu

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__navigation-list');
let menuLinks = document.querySelectorAll('.header__navigation-list-item');


burger.addEventListener('click', function(){
    burger.classList.toggle('burger-active');
    
    document.body.classList.toggle('stop-scroll');
    if (document.querySelector('.menu-transformIn')){
      menu.classList.add('menu-transformOut');
      menu.classList.remove('menu-transformIn');
    }
    else if (document.querySelector('.menu-transformOut')){
      menu.classList.add('menu-transformIn');
      menu.classList.remove('menu-transformOut');
    }
    else{
      menu.classList.add('menu-transformIn');
    }
    setTimeout(function(){
      menu.classList.toggle('header__navigation-list-active');
    }, 700);
});

menuLinks.forEach(function(el){
    el.addEventListener('click', function(){
      if (document.querySelector('.burger-active')){
        burger.classList.remove('burger-active');
        menu.classList.add('menu-transformOut');
        menu.classList.remove('menu-transformIn');
        document.body.classList.remove('stop-scroll');
        setTimeout(function(){
        menu.classList.remove('header__navigation-list-active');
        }, 1000);
      } 
    })
})

//search

let search = document.querySelector('.header__search-button');
let searchInput = document.querySelector('.header__search');
let searchClose = document.querySelector('.header__form-search-button-close');


search.addEventListener('click', function(ev){
  ev.preventDefault();
  search.classList.add('header__search-button-active');
  searchInput.classList.add('header__search-active');
  searchInput.classList.add('appearance-animation');
  if (document.querySelector('.disappearance-animation')){
    searchInput.classList.remove('disappearance-animation');
  }
});

searchClose.addEventListener('click', function(ev){
  ev.preventDefault();
  search.classList.remove('header__search-button-active');
  searchInput.classList.add('disappearance-animation');
  setTimeout(function(){
    searchInput.classList.remove('header__search-active');
    searchInput.classList.remove('appearance-animation')}, 1000);
});

