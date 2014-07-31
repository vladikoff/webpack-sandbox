require([
    './hello',
    'fxaClient'
  ],
  function (Hello, FxaClient) {
    var hello = new Hello();

    console.log(hello);
    console.log(FxaClient);
  });
