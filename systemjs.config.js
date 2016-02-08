System.config({
  baseURL: '/ng_ts/',
  defaultJSExtensions: true,
  transpiler: "typescript",
  "typescriptOptions":{
    "module":"system",
    "emitDecoratorMetadata": true
  },
  meta: {
    "bower_components/angular/angular.js": {
      "format": "global",
      "exports": "angular"
    },
    "bower_components/angular-route/angular-route.js": {
      "deps": [
        "angular"
      ]
    }
  },
  map: {
    angular        : 'bower_components/angular/angular.js',
    'angular-route': 'bower_components/angular-route/angular-route.js'
  }
});

