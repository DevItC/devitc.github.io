var $layer_0 = $('.layer-0'),
    $layer_1 = $('.layer-1'),
    $layer_2 = $('.layer-2'),
    $x_axis  = $('#x-axis'),
    $y_axis  = $('#y-axis'),
    $container = $('page1'),
    container_w = $container.width(),
    container_h = $container.height();

$(window).on('mousemove.parallax', function(event) {
  var pos_x = event.pageX,
      pos_y = event.pageY,
      left  = 0,
      top   = 0;

  left = container_w / 2 - pos_x;
  top  = container_h / 2 - pos_y;
  
  TweenMax.to(
    $x_axis, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + (left * -1) + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $y_axis, 
    1, 
    { 
      css: { 
        transform: 'translateY(' + (top * -1) + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $layer_2, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 12 + 'px) translateY(' + top / 6 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $layer_1, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 4 + 'px) translateY(' + top / 2 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $layer_0,
    10,
    {
      css: {
        transform: 'rotate(' + left / 200 + 'deg)'
      },
      ease: Expo.easeOut,
      overwrite: 'none'
    }
  )
});