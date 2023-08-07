// init Isotope
// var $grid = $('.collection-list').isotope({
// options
// });
// filter items on button click
// $('.filter-button-group').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   resetFilterBtns();
//   $(this).addClass('active-filter-btn');
//   $grid.isotope({ filter: filterValue });
// });

// var filterBtns = $('.filter-button-group').find('button');
// function resetFilterBtns(){
//   filterBtns.each(function(){
//     $(this).removeClass('active-filter-btn');
//   });
// }

var cards = document.querySelectorAll('.product-box');

[...cards].forEach((card) => {
  card.addEventListener('mouseover', function () {
    card.classList.add('is-hover');
  })
  card.addEventListener('mouseleave', function () {
    card.classList.remove('is-hover');
  })
})


// owl carousel
$('.owl-carousel').owlCarousel({
  autoplay: true,
  autoplayhoverpause:true,
  autoplaytimeout:100,
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})

const counts = document.querySelectorAll('.count');

counts.forEach((counter) => {
  const target = Number(counter.getAttribute('number-target'));
  const duration = 1000; // Total duration in milliseconds for the animation
  const startTime = performance.now();
  const initialValue = Number(counter.innerText);
  
  function updateValue(timestamp) {
    const progress = timestamp - startTime;
    const increment = (target - initialValue) * (progress / duration);

    if (progress >= duration) {
      counter.innerText = target;
    } else {
      counter.innerText = Math.floor(initialValue + increment);
      requestAnimationFrame(updateValue);
    }
  }

  requestAnimationFrame(updateValue);
});
