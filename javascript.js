import * as basicScroll from 'basicscroll'

var cabecera = basicScroll.create({
    elem: document.querySelector('.cabecera'),
    from: 'top-top',
    to: 'bottom-top',
    props: {
      '--opacidad-nav': {
        from: 0,
        to: 1
      },
      '--titular-pos': {
        from: '0',
        to: '60vh'
      }
    }
  });

  var artist1 = basicScroll.create({
    elem: document.querySelector('.artist__1'),
    from: 'top-bottom',
    to: 'bottom-top',
    props: {
      '--artist1': {
        from: '50',
        to: '-90%'
      },
    }
  }); 
  

  
  var artist4 = basicScroll.create({
    elem: document.querySelector('.artist__4'),
    from: 'top-bottom',
    to: 'bottom-middle',
    props: {
      '--artist4': {
        from: '50%',
        to: '0'
      },
      '--artist4-opacidad': {
        from: 0,
        to: 1
      }
    }
  });

  var artist5 = basicScroll.create({
    elem: document.querySelector('.artist__5'),
    from: 'top-bottom',
    to: 'bottom-top',
    props: {
      '--artist5': {
        from: '50',
        to: '-90%'
      },
    }
  });
  


  cabecera.start();
  artist1.start();
  artist4.start();
  artist5.start();
  footer.start();

  
