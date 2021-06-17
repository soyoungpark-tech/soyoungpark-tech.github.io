'use strict';
/* ---- particles.js config ---- */
/* --첫번째화면 효과 시작-- */
particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#f38181", "#fce38a", "#eaffd0", "#95e1d3"]
      },
      shape: {
        type: ["circle"],
        stroke: {
          width: 0,
          color: "#fff"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 8,
        random: true,
        anim: {
          enable: false,
          speed: 10,
          size_min: 10,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
/* --첫번째화면 효과 마지막-- */

/*------------------------------
SupahScroll
------------------------------*/
class SupahScroll {
    constructor(options) {
      this.opt = options || {}
      this.el = this.opt.el ? this.opt.el : '.supah-scroll'
      this.speed = this.opt.speed ? this.opt.speed : 0.1
      this.init()
    }
  
    init() {
      this.scrollY = 0
      this.supahScroll = document.querySelectorAll(this.el)[0]
      this.supahScroll.classList.add('supah-scroll')
      this.events()
      this.update()
      this.animate()
    }
    
    update() {
      if (this.supahScroll === null) return
      document.body.style.height = `${this.supahScroll.getBoundingClientRect().height}px`
    }

    animate() {
      this.scrollY += (window.scrollY - this.scrollY) * this.speed
      this.supahScroll.style.transform = `translate3d(0,${-this.scrollY}px,0)`
      this.raf = requestAnimationFrame(this.animate.bind(this))
    }
    
    scrollTo(y) {
      window.scrollTo(0, y)
    }
    
    staticScrollTo(y) {
      cancelAnimationFrame(this.raf)
      this.scrollY = y
      window.scrollTo(0, y)
      this.supahScroll.style.transform = `translate3d(0,${-y}px,0)`
      this.play()
    }
    
    events() {
      window.addEventListener('load', this.update.bind(this))
      window.addEventListener('resize', this.update.bind(this))
    }
  }
  
  /*------------------------------
  Initialize
  ------------------------------*/
  const supahscroll = new SupahScroll({
    el: 'main',
    speed: 0.1
  })


  $(function(){

      /* ================= navbar ===================== */
      
      var $navItem = $('.nav__item');
      $navItem.click(function(e){
          e.preventDefault();
          var link = $(this).children('a').attr('data-link');
    var $target = $(link);
    var distance = $target.offset().top;
    $('html, body').animate({scrollTop: distance});
    $('.nav__container').removeClass('visible');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
})

/* nav toggle */
$('#navToggle, .nav__close').click(function(){
    $('.nav__container').toggleClass('visible');
    })
})