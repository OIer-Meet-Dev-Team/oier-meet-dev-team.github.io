var $ = mdui.$;

$('#example-top').on('click', function () {
  mdui.snackbar({
    message: 'top',
    position: 'top'
  });
});

$('#example-bottom').on('click', function () {
  mdui.snackbar({
    message: 'bottom',
    position: 'bottom'
  });
});

$('#example-left-top').on('click', function () {
  mdui.snackbar({
    message: 'left-top',
    position: 'left-top'
  });
});

$('#example-left-bottom').on('click', function () {
  mdui.snackbar({
    message: 'left-bottom',
    position: 'left-bottom'
  });
});

$('#example-right-top').on('click', function () {
  mdui.snackbar({
    message: 'right-top',
    position: 'right-top'
  });
});

$('#example-right-bottom').on('click', function () {
  mdui.snackbar({
    message: 'right-bottom',
    position: 'right-bottom'
  });
});
