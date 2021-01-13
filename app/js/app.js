"use strict";function C(){var a=$("#contact-form");a<1||(a.validator(),a.on("submit",function(e){if(!e.isDefaultPrevented())return $.ajax({type:"POST",url:"contact.php",data:$(this).serialize(),success:function(e){var t="alert-"+e.type,n=e.message,e='<div class="alert '+t+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+n+"</div>";t&&n&&(a.find(".messages").html(e),a[0].reset()),setTimeout(function(){a.find(".messages").html("")},3e3)},error:function(e){console.log(e)}}),!1}))}!function(g){function f(e){var r,n,a,t,i,l,d,o,s,c,u;function h(){dsnGrid.elementHover(t,"a.link-pop , a > img","cursor-view"),dsnGrid.elementHover(t,".close-wind","cursor-close"),dsnGrid.elementHover(t,"a:not(> img) , .dsn-button-sidebar,  button","cursor-link")}$("[data-overlay-color]").each(function(e){var t=$(this),n=dsnGrid.removeAttr(t,"data-overlay-color");t.addClass("dsn-overlay-"+e),$("body").append("<style>.dsn-overlay-"+e+"[data-overlay]:before{background: "+n+";}</style>")}),0<g('[data-dsn-temp="light"]').length?(v.addClass("v-light"),((u=g('[data-dsn-header="project"]')).length<=0||u.hasClass("header-hero-2"))&&v.addClass("menu-light")):v.removeClass("v-light"),$(".cover-bg, section , [data-image-src]").each(function(){var e=$(this).attr("data-image-src");void 0!==e&&!1!==e&&$(this).css("background-image","url("+e+")")}),s=document.getElementById("map"),c=document.getElementById("map_api"),null!==s&&(null===c&&((c=document.createElement("script")).type="text/javascript",c.id="map_api",c.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA49hGCmzG22gXOfg784H0w8DtKEsSvq7k",document.body.appendChild(c)),setTimeout(function(){try{var e=$("#map"),t=e.data("dsn-lat"),n=e.data("dsn-len"),a=e.data("dsn-zoom"),e=new google.maps.LatLng(t,n),i=new google.maps.Map(s,{center:{lat:t,lng:n},zoom:a,styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]});google.maps.event.addDomListener(window,"resize",function(){var e=i.getCenter();google.maps.event.trigger(i,"resize"),i.setCenter(e)}),new google.maps.Marker({position:e,animation:google.maps.Animation.BOUNCE,icon:"assets/img/map-marker.png",title:"ASL",map:i})}catch(e){console.log(e)}},1e3)),u=g(".filtering"),o=g(".gallery").isotope({itemSelector:".item",transitionDuration:"0.5s"}),u.on("click","button",function(){var e=g(this).attr("data-filter");o.isotope({filter:e})}),u.on("click","button",function(){g(this).addClass("active").siblings().removeClass("active");var e=p;y.isScroller(!0)&&(e=y.getScrollbar()),setTimeout(function(){TweenLite.to(e,1.5,{scrollTo:o.offset().top-150,ease:Expo.easeInOut})},500)}),o.find("video").each(function(){this.pause(),g(this).parents(".item").find("> a").on("mouseenter",function(){g(this).parents(".item").find("video")[0].play()}).on("mouseleave",function(){g(this).parents(".item").find("video")[0].pause()})}),$(".slider-project .swiper-container").each(function(e){new Swiper(this,{slidesPerView:"auto",spaceBetween:60,navigation:{nextEl:$(this).parents(".slider-project").find(".slider-button-next"),prevEl:$(this).parents(".slider-project").find(".slider-button-prev")},pagination:{el:$(this).parents(".slider-project").find(".swiper-pagination"),type:"fraction"}})}),c=p,0<(u=$(".client-curs")).length&&(u.slick({slidesToShow:1,slidesToScroll:1,arrows:!0,infinite:!0,nextArrow:'<i class="fas fa-angle-right"></i>',prevArrow:'<i class="fas fa-angle-left"></i>',cssEase:"cubic-bezier(.9, .03, .41, .49)",speed:700}),991<c.width()&&(dsnGrid.parallaxMoveElemnt(u.find(".fas.fa-angle-right"),25),dsnGrid.parallaxMoveElemnt(u.find(".fas.fa-angle-left"),25))),i=e,l="dsn-effect-animate",d=!0,{main_root:g("main.main-root"),ajax_click:g("a.effect-ajax "),isEffectAjax:function(){return!v.hasClass("dsn-ajax")},ajaxLoad:function(){var a=this;i&&this.ajax_click.off("click"),this.ajax_click.on("click",function(e){var t,n;a.isEffectAjax()||(e.preventDefault(),n=(t=g(this)).attr("href"),e=t.data("dsn-ajax"),0<=n.indexOf("#")||void 0===n||d&&(d=!1,m().locked(),a.ajaxLoaderElemnt(!0),"slider"===e?a.ajaxSlider(t,n):"list"===e?a.ajaxList(t,n):"next-project"===e?a.ajaxNextProject(t,n):"blog"===e?a.ajaxBlog(t,n):"next"===e?a.ajaxNext(t,n):"work"===e?a.ajaxWork(t,n):a.ajaxNormal(n)))})},ajaxSlider:function(e,t){var n=this,e=e.parents(".slide-content").data("dsn-id"),a=g('.main-slider .slide-item[data-dsn-id="'+e+'"] .cover-bg').first(),i=t;void 0!==i&&TweenMax.to(".project-metas , .nav-slider ,.footer-slid ,.view-all , .dsn-all-work ",.8,{autoAlpha:0,scale:.8,onComplete:function(){a.removeClass("hidden"),a.find("img").addClass("hidden"),n.createElement(a,i,g(".root-slider"))}})},ajaxList:function(e,t){var n=this,a=g(".nav-work-img-box img.dsn-active").first(),i=t;void 0!==i&&TweenMax.to(".nav-work-box .list-main",.8,{autoAlpha:0,onComplete:function(){n.createElement(a,i),setTimeout(function(){v.removeClass("dsn-show-work")},1e3)}})},ajaxNextProject:function(e,t){var n=this,a=e.parents(".next-project"),i=a.find(".bg-image").first(),o=t;void 0!==o&&(TweenMax.to("footer",.8,{autoAlpha:0,y:-50}),TweenMax.staggerTo(a.find(".project-title").find("span , h5"),.8,{autoAlpha:0,y:-50},.1,function(){n.createElement(i,o,a.find(".bg"))}))},ajaxBlog:function(e,t){var n=this,a=e.parents(".post-list-item").find(".bg").first(),i=t;void 0!==i&&(TweenMax.to(a.find("img"),.8,{scale:1,height:"100%",top:0,y:"0%"}),TweenMax.to(".post-list-item-content",.8,{autoAlpha:0,scale:.8,onComplete:function(){n.createElement(a.find("img"),i)}}))},ajaxWork:function(e,t){var n=e.find("img");n.removeClass("hidden");var a=this;TweenMax.to(n,.8,{scale:1,height:"100%",top:0,y:"0%",onComplete:function(){a.createElement(n,t)}})},createElement:function(e,t,n){var o=this,s=g('<div class="active-ajax-e"></div>');s.css({position:"fixed",width:"100%",height:"100%",top:0,left:0,zIndex:999,visibility:"hidden",opacity:0}),s.css("background-color",v.css("background-color"));var r=o.addElement(s,e,n);v.append(s);TweenMax.to(s,1,{autoAlpha:1,ease:Power4.easeInOut,onComplete:function(){v.removeClass(l),o.loader(t,function(e,t,n){var a=g('[data-dsn-ajax="img"]');if(a.length<=0)return TweenMax.to([s,r],1,{width:0,autoAlpha:0,delay:1,ease:Expo.easeIn,onStart:function(){m().unlocked(),f()},onComplete:function(){v.addClass(l),setTimeout(function(){s.remove()},500)}}),!1;var i=(a=a.first()).offset();void 0===i&&(i={top:0,left:0}),TweenMax.to(r,1,{top:i.top,left:i.left,width:a.width(),height:a.height(),objectFit:"cover",borderRadius:0,onComplete:function(){TweenMax.to(s,1,{height:0,onComplete:function(){m().unlocked(),o.showAnimate()}}),TweenMax.to(r,1,{autoAlpha:0,delay:.8,onComplete:function(){s.remove()}})}})})}})},addElement:function(e,t,n){if(!(void 0===t||t.length<=0)){(void 0===n||n.length<=0)&&(n=t);t=t.clone();return void 0===n[0].getBoundingClientRect()&&0,t.css({position:"absolute",display:"block",transform:"",transition:"",objectFit:"cover"}),t.css(dsnGrid.getBoundingClientRect(n[0])),e.append(t),t}},ajaxNormal:function(e){var t=this,n=g('<div class="class-ajax-loader"></div>');n.css({position:"fixed",left:0,top:0,width:"100%",height:"100%",backgroundColor:"#1b1b1b",zIndex:900199,"-webkit-transform":"translateY(100%)","-ms-transform":"translateY(100%)",transform:"translateY(100%)"}),v.append(n);var a=g(document).height()-p.height()-150;p.scrollTop()<a&&TweenMax.fromTo(this.main_root,1,{y:0},{y:-150,ease:Expo.easeIn}),TweenMax.to(n,1,{y:0,ease:Expo.easeIn,onComplete:function(){t.loader(e,function(){dsnGrid.scrollTop(0,1),m().unlocked()})}})},hideAnimate:function(){TweenMax.set(g(w.animateTextAjax),{autoAlpha:0,y:-50})},showAnimate:function(){TweenMax.staggerTo(g(w.animateTextAjax),1,{autoAlpha:1,y:0},.2)},loader:function(i,o){var s=this;v.removeClass("dsn-effect-animate"),this.main_root.load(i+" main.main-root > *",function(e,t,n){var a=g(this);s.hideAnimate(),"error"!==t?(s.ajaxTitle(i),history.pushState(null,null,i),setTimeout(function(){s.animateAjaxEnd(),void 0!==o&&o(a,e,n),d=!0},500)):window.location=i})},animateAjaxEnd:function(){var e=this;e.main_root.css("transform","");var t=g(".class-ajax-loader");TweenMax.fromTo(t,1,{y:"0%"},{y:"-100%",ease:Expo.easeIn,onComplete:function(){t.remove(),e.ajaxLoaderElemnt(),e.showAnimate()},delay:1}),f(!0)},ajaxNext:function(e,t){var n=g('.dsn-imgs[data-dsn-next="blog"]'),a=this;n.length<=0?a.ajaxNormal(t):(TweenMax.set(n,{autoAlpha:1,zIndex:99999999}),TweenMax.to(n,1,{top:0,ease:Expo.easeInOut,onComplete:function(){g('[data-dsn-header="blog"]').css("width","100%"),a.createElement(n,t)}}))},ajaxTitle:function(e){g("title").load(e+" title","",function(e){document.title=g(this).text()});var t=g("#wpadminbar");0<t.length&&t.load(e+" #wpadminbar","",function(e){t.html(g(this).html())})},ajaxLoaderElemnt:function(e){e?v.addClass("dsn-ajax-effect"):v.removeClass("dsn-ajax-effect")}}.ajaxLoad(),e=e,t=".cursor",m().isMobiles()||(void 0!==e&&!0===e?h():g("body").hasClass("dsn-large-mobile")||(dsnGrid.mouseMove(t),h())),g(".client-see .slick-slider  ").slick({infinite:!0,slidesToShow:1,arrows:!1,dots:!0,fade:!0,cssEase:"linear"}),g(' .our-news .slick-slider , .our-team .slick-slider , [data-dsn-col="2"] .slick-slider').slick({infinite:!0,slidesToShow:2,arrows:!1,dots:!0,responsive:[{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1}}]}),g('[data-dsn-col="3"] .slick-slider').slick({infinite:!0,slidesToShow:3,arrows:!1,dots:!0,autoplay:!0,responsive:[{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]}),g(".gallery-col .box-im .image-zoom").magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(e){return e.find("img")}}}),(e=g(".gallery-portfolio")).length<1||(e.justifiedGallery({rowHeight:300,margins:15}),e.magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom",gallery:{enabled:!0},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.find("img")}},callbacks:{open:function(){g("html").css({margin:0})},close:function(){}}})),(e=g(".view-all")).length<=0||(e.on("click",function(){v.toggleClass("dsn-show-work")}),n=g(".nav-work-box").find(".work-item"),a=g(".nav-work-img-box"),n.each(function(e){var t=g(this);t.attr("data-dsn-id",e);var n=t.find("img");n.attr("data-dsn-id",e),t.hasClass("dsn-active")&&n.addClass("dsn-active"),a.append(n)}),n.on("mouseenter",function(){var e,t=function(e){e=e.data("dsn-id");return a.find('img[data-dsn-id="'+e+'"]')}(g(this));t.hasClass("dsn-active")||v.hasClass("dsn-ajax-effect")||(n.removeClass("dsn-active"),g(this).addClass("dsn-active"),e=a.find(".dsn-active"),a.find("img").removeClass("dsn-active").removeClass("dsn-active-enter").removeClass("dsn-active-leve"),e.addClass("dsn-active-leve"),t.addClass("dsn-active dsn-active-enter"))})),r=g(".main-slider"),{initSlider:function(){var e=r.find(".slide-item"),n=r.find(".dsn-slider-content");e.each(function(e){g(this).attr("data-dsn-id",e);var t=g(this).find(".slide-content");t.attr("data-dsn-id",e),0===e&&t.addClass("dsn-active dsn-active-cat"),n.append(t);t=t.find(".title-text-header-inner a");dsnGrid.convertTextLine(t,t)})},progress:function(e){e.on("progress",function(){for(var e=0;e<this.slides.length;e++){var t=this.slides[e].progress*(.5*this.width);this.slides[e].querySelector(".image-bg").style.transform="translateX("+t+"px) "}})},slideChange:function(o){var s=this;o.on("slideChange",function(){var e,t,n=r.find(".dsn-slider-content .dsn-active"),a=n.data("dsn-id"),i=g(o.slides[o.activeIndex]).data("dsn-id");a!==i&&(r.find('[data-dsn="video"] video').each(function(){this.pause()}),0<(e=g(this.slides[this.activeIndex]).find('[data-dsn="video"] video')).length&&e[0].play(),e=n.find(".dsn-chars-wrapper"),n.removeClass("dsn-active-cat"),n=(t=r.find('.dsn-slider-content [data-dsn-id="'+i+'"]')).find(".dsn-chars-wrapper"),i=i<a,(a=new TimelineLite).staggerFromTo(dsnGrid.randomObjectArray(e,.3),.3,s.showText().title,s.hideText(i).title,.1,0,function(){r.find(".dsn-slider-content .slide-content").removeClass("dsn-active"),r.find(".dsn-slider-content .slide-content").removeClass("dsn-active-cat"),t.addClass("dsn-active"),t.addClass("dsn-active-cat")}),a.staggerFromTo(dsnGrid.randomObjectArray(n,1.2),1.2,s.hideText(i).title,s.showText().title,.1,"-=.8"))})},showText:function(){return{title:{autoAlpha:1,x:"0%",scale:1,rotation:0,ease:Elastic.easeInOut,yoyo:!0},subtitle:{autoAlpha:1,y:"0%",ease:Elastic.easeOut}}},hideText:function(e){e=e?"90%":"-90%";return{title:{autoAlpha:0,x:e,rotation:8,scale:1.2,ease:Elastic.easeOut,yoyo:!0},subtitle:{autoAlpha:0,y:e,ease:Elastic.easeOut}}},touchStart:function(e){e.on("touchStart",function(){for(var e=0;e<this.slides.length;e++)this.slides[e].style.transition=""})},setTransition:function(e){e.on("setTransition",function(e){for(var t=0;t<this.slides.length;t++)this.slides[t].style.transition=e+"ms",this.slides[t].querySelector(".image-bg").style.transition=e+"ms"})},swiperObject:function(){return new Swiper(".main-slider .slide-inner",{speed:1500,allowTouchMove:!0,resistanceRatio:.65,navigation:{nextEl:".main-slider .control-nav .next-container",prevEl:".main-slider .control-nav .prev-container"},pagination:{el:".main-slider .footer-slid .control-num span",type:"custom",clickable:!0,renderCustom:function(e,t){return dsnGrid.numberText(t)}},on:{init:function(){this.autoplay.stop(),r.find('[data-dsn="video"] video').each(function(){this.pause()})},imagesReady:function(){var e=g(this.slides[this.activeIndex]).find('[data-dsn="video"] video');0<e.length&&e[0].play()}}})},run:function(){var e,t;r.length<=0||(this.initSlider(),e=this.swiperObject(),this.progress(e),this.touchStart(e),this.setTransition(e),this.slideChange(e),g(".nav-slider").length<=0||(t=new Swiper(".nav-slider",{speed:1500,slidesPerView:3,centeredSlides:!0,touchRatio:.2,slideToClickedSlide:!0,direction:"vertical",resistanceRatio:.65}),(e.controller.control=t).controller.control=e))}}.run(),g("a.vid").YouTubePopUp(),C()}function e(){p.off("scroll");var t=g(".dsn-nav-bar");t.removeClass("header-stickytop");var n,a=g(".wrapper").offset(),e=g(".header-single-post .container").offset(),i=g(".post-full-content").offset(),o=0;void 0!==e?a=e:a.top<=70&&(a=i),y.getListener(function(e){n="scroll"===e.type?p.scrollTop():e.offset.y;e=70;void 0!==a&&(e=a.top-100),e<n?o<n?t.addClass("nav-bg").addClass("hide-nave"):t.removeClass("hide-nave"):t.removeClass("nav-bg").removeClass("hide-nave"),o=n})}function m(){var t=window.Scrollbar,n=document.querySelector("#custom-scrollbar");return{isMobile:function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Edge/i)||navigator.userAgent.match(/MSIE 10/i)||navigator.userAgent.match(/MSIE 9/i))},isMobiles:function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Edge/i)||navigator.userAgent.match(/MSIE 10/i)||navigator.userAgent.match(/MSIE 9/i)||p.width()<=991)},isScroller:function(e){e&&(n=document.querySelector("#custom-scrollbar"));var t=!v.hasClass("dsn-effect-scroll")||this.isMobile()||null===n;return t&&e&&v.addClass("dsn-mobile"),!t},locked:function(){var e;v.addClass("locked-scroll"),this.isScroller()&&void 0!==(e=this.getScrollbar())&&e.destroy()},unlocked:function(){v.removeClass("locked-scroll"),this.start(),e(),T.allInt(),dsnGrid.progressCircle(y)},getScrollbar:function(e){return void 0===e?t.get(n):t.get(document.querySelector(e))},getListener:function(e){void 0!==e&&(this.isScroller(!0)?this.getScrollbar().addListener(e):p.on("scroll",e))},start:function(){var e;dsnGrid.scrollTop(0,1),g(".scroll-to").on("click",function(e){e.preventDefault();e=p;y.isScroller(!0)&&(e=y.getScrollbar()),TweenLite.to(e,1.5,{scrollTo:g(".wrapper").offset().top,ease:Expo.easeInOut})}),this.isScroller(!0)&&(e=.05,this.isMobiles()&&(e=.02),t.init(n,{damping:e}),this.workScroll())},sliderScroll:function(){t.init(document.querySelector(".slider .main-slider .slider-nav-list"),{damping:.05})},menuScroll:function(){t.init(document.querySelector(".nav__content"),{damping:.05})},commentScroll:function(){var e=document.querySelector(".comment-modal .comment-modal-container");null!==e&&t.init(e,{damping:.05})},sidebarScroll:function(){var e=document.querySelector(".dsn-sidebar .sidebar-single");null!==e&&t.init(e,{damping:.05})},workScroll:function(){var e=document.querySelector(".dsn-all-work .dsn-work-scrollbar");null!==e&&t.init(e,{damping:.05})}}}var t,n,a,i,o,s,r,l,d,c,p=g(window),v=g("body"),w={animateTextAjax:'.headefr-fexid .project-title .title-text-header .cat ,[data-dsn-animate="ajax"] , footer, .next-project , .root-project'};(navigator.userAgent.match(/Edge/i)||navigator.userAgent.match(/MSIE 10/i)||navigator.userAgent.match(/MSIE 9/i))&&g(".cursor").css("display","none"),t=g(".preloader"),n=t.find(".preloader-block"),a=n.find(".percent"),i=n.find(".title"),o=n.find(".loading"),s=t.find(".preloader-bar"),r=s.find(".preloader-progress"),l=t.find(".preloader-after"),d=t.find(".preloader-before"),c=dsnGrid.pageLoad(0,100,300,function(e){a.text(e),r.css("width",e+"%")}),p.on("load",function(){clearInterval(c),TweenMax.fromTo(r,.5,{width:"95%"},{width:"100%",onUpdate:function(){var e=r.width()/r.parent().width()*100;a.text(parseInt(e,10))},onComplete:function(){TweenMax.to(s,.5,{left:"100%"}),TweenMax.to(i,1,{autoAlpha:0,y:-100}),TweenMax.to(o,1,{autoAlpha:0,y:100}),TweenMax.to(a,1,{autoAlpha:0}),TweenMax.to(d,1,{y:"-100%",delay:.7}),TweenMax.to(l,1,{y:"100%",delay:.7,onComplete:function(){t.addClass("hidden")}})}})}),function(){var n=g(".menu-icon");g(".site-header .custom-drop-down > a").on("click",function(){return!1}),p.on("load",function(){var e,t=g(".site-header nav > ul");t.length<=0||(e=t[0].outerHTML,(e=g(e)).attr("class","nav__list"),e.find("li.custom-drop-down").attr("class","nav__list-dropdown"),e.find("li").addClass("nav__list-item"),void 0!==(t=g(".header-top .nav .nav__content"))&&t.prepend(e),n.on("click",function(){v.toggleClass("nav-active")}),g(".nav__list-item:not(.nav__list-dropdown) ").on("click",function(){v.removeClass("nav-active")}),g(".nav__list-dropdown > a").on("click",function(e){e.preventDefault();var t=g(this).parent(),e=t.find("ul").css("display");g(".nav__list-dropdown").find("ul").slideUp("slow"),"block"!==e&&t.find("ul").slideDown("slow")}))}),p.on("scroll",function(){var e=p.scrollTop(),t=g(".site-header , .header-top"),n=g(".page-content").offset(),a=70;void 0!==n&&(a=n.top),a<e?(t.addClass("header-stickytop"),g(".sections").addClass("body-pt")):(t.removeClass("header-stickytop"),g("body").css("paddingTop",0))});var e,t,a=g(".header-top .header-container .menu-icon .text-menu");a.length<=0||(e=a.find(".text-button"),t=a.find(".text-open"),a=a.find(".text-close"),dsnGrid.convertTextWord(e,e,!0),dsnGrid.convertTextWord(t,t,!0),dsnGrid.convertTextWord(a,a,!0))}();var u,h,x,y=m(),T=(u=new ScrollMagic.Controller,h='[data-dsn-header="project"]',x='[data-dsn-footer="project"]',{clearControl:function(){u=new ScrollMagic.Controller},isElemntId:function(e){return null!==document.getElementById(e)},headerProject:function(){if(g(h).length<=0)return!1;var e=g("#hero-parallax-img"),t=g("#dsn-hero-parallax-title"),n=g("#dsn-hero-parallax-fill-title"),a=g("#descover-holder"),i=1.2;e.hasClass("parallax-move-element")&&dsnGrid.parallaxMoveElemnt({target:g(h),element:e.find(".cover-bg")},5,1);var o,s=new TimelineMax;if(0<e.length&&(o=e.hasClass("has-top-bottom")?1:1.08,s.to(e,1,{force3D:!0,y:"30%",scale:o},0)),0<t.length&&(t.hasClass("project-title")&&(i=1),s.to(t,.8,{force3D:!0,top:"30%",autoAlpha:0,scale:i},0)),0<n.length&&s.to(n,1,{force3D:!0,height:80},0).to("#dsn-hero-parallax-fill-title h1",1,{force3D:!0,top:0},0).to(t.find(".slider-header.slider-header-top"),1,{force3D:!0,height:0},0),0<a.length&&s.to(a,.8,{force3D:!0,bottom:"-10%",autoAlpha:0},0),s._totalDuration<=0)return!1;var s=new ScrollMagic.Scene({triggerElement:h,triggerHook:0,duration:"100%"}).setTween(s).addTo(u),r=e.find("video");return(0<r.length||v.hasClass("v-light"))&&(s.on("enter",function(){0<r.length&&r.get(0).play(),v.hasClass("v-light")&&!g(h).hasClass("header-hero-2")&&v.removeClass("menu-light")}),s.on("leave",function(){0<r.length&&r.get(0).pause(),v.hasClass("v-light")&&!g(h).hasClass("header-hero-2")&&v.addClass("menu-light")})),s},nextProject:function(){var e=g("#dsn-next-parallax-img"),t=g("#dsn-next-parallax-title"),n=!(e.length<=0)&&new ScrollMagic.Scene({triggerElement:x,triggerHook:1,duration:"100%"}).setTween(TweenMax.to(e,1,{force3D:!0,y:"30%",scale:1},0)).addTo(u),a=!(t.length<=0)&&new ScrollMagic.Scene({triggerElement:x,triggerHook:.5,duration:"55%"}).setTween(TweenMax.to(t,1,{force3D:!0,top:"0%",opacity:1,ease:Power0.easeNone},0)).addTo(u);y.getListener(function(e){!1!==n&&n.refresh(),!1!==a&&a.refresh()}),!1!==a&&v.hasClass("v-light")&&a.on("progress",function(e){.8<e.progress?v.removeClass("menu-light"):v.addClass("menu-light")})},parallaxImg:function(){g('[data-dsn-grid="move-up"]').each(function(){var e=g(this);e.attr("data-dsn-grid","moveUp");var t,n,a,i=e.find("img:not(.hidden) , video"),o=dsnGrid.getUndefinedVal(e.data("dsn-triggerhook"),1),e=dsnGrid.getUndefinedVal(e.data("dsn-duration"),1!==o?"100%":"200%");0<i.length&&(t=i.hasClass("has-top-bottom")?(n=dsnGrid.getUndefinedVal(i.data("dsn-move"),"15%"),TweenMax.to(i,.8,{force3D:!0,y:n,ease:Power0.easeNone})):(t=dsnGrid.getUndefinedVal(i.data("dsn-y"),"10%"),n=dsnGrid.getUndefinedVal(i.data("dsn-scale"),1.1),1!==o?(i.css("top",0),TweenMax.to(i,2,{force3D:!0,scale:n,y:t})):TweenMax.to(i,1,{force3D:!0,scale:n,y:t,ease:Power0.easeNone})),a=new ScrollMagic.Scene({triggerElement:this,triggerHook:o,duration:e}).setTween(t).addTo(u),y.getListener(function(){a.refresh()}))})},moveSection:function(){g('[data-dsn-grid="move-section"]').each(function(){var e=g(this);e.removeAttr("data-dsn-grid"),e.addClass("dsn-move-section");var t,n=dsnGrid.getUndefinedVal(e.data("dsn-move"),-100),a=dsnGrid.getUndefinedVal(e.data("dsn-triggerhook"),1),i=dsnGrid.getUndefinedVal(e.data("dsn-opacity"),e.css("opacity")),o=dsnGrid.getUndefinedVal(e.data("dsn-duration"),"150%");"tablet"===e.data("dsn-responsive")&&p.width()<992||(i=TweenMax.to(e,2,{y:n,autoAlpha:i,ease:Power0.easeNone}),t=new ScrollMagic.Scene({triggerElement:this,triggerHook:a,duration:o}).setTween(i).addTo(u),y.getListener(function(){t.refresh()}))})},parallaxImgHover:function(){var e=g('[data-dsn="parallax"]');0===e.length||p.width()<992||e.each(function(){var e=g(this),t=(dsnGrid.removeAttr(e,"data-dsn"),dsnGrid.removeAttr(e,"data-dsn-speed")),n=dsnGrid.removeAttr(e,"data-dsn-move"),a=!1;e.hasClass("image-zoom")&&(a=!0),dsnGrid.parallaxMoveElemnt(e,n,t,void 0,a)})},changeColor:function(){var n="v-light",a=v.hasClass(n);g('[data-dsn="color"]').each(function(){var e=dsnGrid.getUndefinedVal(g(this).data("dsn-duration"),g(this).outerHeight()+70),t=new ScrollMagic.Scene({triggerElement:this,triggerHook:.05,duration:e}).addTo(u);t.on("enter",function(){a?v.removeClass(n):v.addClass(n)}),t.on("leave",function(){a?v.addClass(n):v.removeClass(n)}),y.getListener(function(){t.refresh()})})},animateText:function(){g('[data-dsn-animate="text"] , [data-dsn-animate="up"]').each(function(){var e=g(this),t=1;"text"===e.data("dsn-animate")?(dsnGrid.convertTextWord(e,e),e.attr("data-dsn-animate","animate")):t=.8;var n=new ScrollMagic.Scene({triggerElement:this,reverse:!1,triggerHook:t}).setClassToggle(this,"dsn-active").addTo(u);y.getListener(function(){n.refresh()})})},headerBlog:function(){var e,t=g('[data-dsn-header="blog"]');t.length<=0||p.width()<992||(e=new ScrollMagic.Scene({triggerElement:".header-single-post",triggerHook:0,duration:"100%"}).setTween(TweenMax.fromTo(t,1,{width:"100%"},{width:"80%"})).addTo(u),y.getListener(function(){e.refresh()}))},allInt:function(){this.clearControl();var t=this.headerProject();y.getListener(function(e){!1!==t&&t.refresh()}),this.nextProject(),this.parallaxImgHover(),this.parallaxImg(),this.moveSection(),this.animateText(),this.changeColor()}});y.start(),T.allInt(),f(),p.on("popstate",function(e){g("main.main-root").load(document.location+" main.main-root > *",function(){f(!0),m().unlocked()})}),C(),e()}(jQuery);