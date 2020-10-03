var inst = new mdui.Fab('#fab');

// event
var fab = document.getElementById('fab');
fab.addEventListener('open.mdui.fab', function () {
  console.log('open');
});

fab.addEventListener('opened.mdui.fab', function () {
  console.log('opened');
});

fab.addEventListener('close.mdui.fab', function () {
  console.log('close');
});

fab.addEventListener('closed.mdui.fab', function () {
  console.log('closed');
});
