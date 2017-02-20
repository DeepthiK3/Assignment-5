<!doctype html>
<html>
<head>
  <link href="animations.css" rel="stylesheet" type="text/css">
  

  <script src="//code.angularjs.org/snapshot/angular.min.js"></script>
  <script src="//code.angularjs.org/snapshot/angular-animate.js"></script>
  <script src="script.js"></script>
  

  
</head>
<body ng-app="switchExample">
  <div ng-controller="ExampleController">
  <select ng-model="selection" ng-options="item for item in items">
  </select>
  <code>selection={{selection}}</code>
  <hr/>
  <div class="animate-switch-container"
    ng-switch on="selection">
      <div class="animate-switch" ng-switch-when="settings|options" ng-switch-when-separator="|">Settings Div</div>
      <div class="animate-switch" ng-switch-when="home">Home Span</div>
      <div class="animate-switch" ng-switch-default>default</div>
  </div>
</div>
</body>
</html>