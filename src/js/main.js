/*------------------------------------------------------------------
  Hue animation
*/
const hueTrigger = basicScroll.create({
    elem: document.querySelector('.hue-trigger'),
    from: 'top-top',
    to: 'bottom-bottom',
    // inside: (instance, percentage, props) => console.log('fadeBox is animating'),
    // outside: (instance, percentage, props) => console.log('fadeBox is not animating'),
    props: {
      '--hue': {
        from: 0,
        to: 360
      }
    }
  })

hueTrigger.start()