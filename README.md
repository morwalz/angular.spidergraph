Angular Spidergraph - Dynamic, interactive spidergraphs in HTML5
========================================================================

Angular spidergraph is a directive library module that creates nice looking, interactive spidergraphs in HTML5, using the canvas element.
It is using https://github.com/jmstriegel/jquery.spidergraph internally.
For more information visit https://github.com/jmstriegel/jquery.spidergraph

What are spidergraphs good for?
---------------------------------

- illustrating scaled quantitative data for several subjective attributes
- overlaying multiple data measurements for attribute comparison
- visualizing the intersection of several data measurements


How do I use it?
----------------

Minimum use:
----------------
Include https://github.com/jmstriegel/jquery.spidergraph jquery spider graph then 
angular spider graph

Include the module in your app like 
```
    angular.module('myApp', ['morwal.spiderGraph'])
```
First make a div to contain your graph:
```
    <spider-map labels="labels" ng-model="activeData" active-data="activeData"></spider-map>
```
in your controller set active data
```
        $scope.labels =[ "Designing", "Coding", "Cycling", "Running"];
        $scope.activeData = [0,1,4,0];
```

There is two way binding in model activeData
Thats it.

Advanced uses
----------------
Change grid color 
in controller 
```
    $scope.gridColor='rgba(20,20,20,0.2)'
```
In view 
```
    <spider-map labels="labels" ng-model="activeData" active-data="activeData" grid-color="gridColor"></spider-map>
```

Changing configurtion for active data=
```
  $scope.activeConfig={
 'strokecolor': 'rgba(0,204,230,0.8)',
 'fillcolor': 'rgba(0,204,230,0.6)',
 'linear':true
 };
```
 It is options to set these parameters. linear is default true. You can set it to false on need. 
```
 <spider-map labels="labels" ng-model="activeData" active-data="activeData" active-config="activeConfig"></spider-map>
```
Add static layers to your data set. Opacity can be used to see through multiple layers.
```
    <spider-map labels="labels" ng-model="activeData" active-data="activeData" grid-color="gridColor" layers="layers"></spider-map>
```
This model will be array. Here only data is complusary paramater.
```
$scope.layers=[
 {
 'strokecolor': 'rgba(230,204,0,0.8)',
 'fillcolor': 'rgba(230,204,0,0.6)',
 'data': [5, 4, 9, 8, 1]
 }
 ];
```

Can I see an example?
-----------------------

Yes you can. Right over here:
