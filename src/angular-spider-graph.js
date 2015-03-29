/*jshint multistr:true, curly: false */
/*global jQuery:false, define: false */
/**
 * Angular spider graph
 *
 * Written by
 * ----------
 * Shankar Morwal (morwal89@gmail.com,https://github.com/morwalz)
 *
 * Licensed under the MIT (MIT-LICENSE.txt).
 *
 * @author Shankar Morwal
 * @version 0.1-RELEASE
 *
 * Dependencies
 * ------------
 * jQuery (http://jquery.com)
 * jQuery spidergraph(https://github.com/jmstriegel/jquery.spidergraph)
 * Angular.js
 *
 **/
;
angular.module("morwal.spiderGraph", [])
  .directive('spiderMap', function() {
    return {
      restrict: 'AE',
      scope: {
        labels:'=',
        activeData:'=',
        activeConfig:'=',
        layers:'=',
        gridColor:'='
      },
      replace: true,
      require: 'ngModel',
      transclude: true,
      template: '<div id="spidergraphcontainer"></div>',
      link: function(scope, elem, attrs,ngModelCtrl) {
        var gridColor=(scope.gridColor)?scope.gridColor:'rgba(20,20,20,0.2)';
        $(elem).spidergraph({
          'fields':scope.labels,
          'gridcolor':scope.gridColor
        });
        var activeData;
        if(scope.activeConfig){
          activeData={
            'strokecolor':(scope.activeConfig.strokecolor)?scope.activeConfig.strokecolor:'rgba(102,195,207,0.8)',
            'fillcolor': (scope.activeConfig.fillcolor)?scope.activeConfig.fillcolor:'rgba(160,224,232,0.6)',
            'data':scope.activeData,
            'linear':(scope.activeConfig.linear===false)?scope.activeConfig.linear:true
          }
        }else{
          activeData={
            'strokecolor':'rgba(102,195,207,0.8)',
            'fillcolor': 'rgba(160,224,232,0.6)',
            'data':scope.activeData,
            'linear':true
          }
        }
        $(elem).spidergraph('setactivedata',activeData);
        if(scope.layers){
          scope.layers.forEach(function(layer){
            $(elem).spidergraph('addlayer', {
              'strokecolor':(layer.strokecolor)?layer.strokecolor:'rgba(102,195,207,0.8)',
              'fillcolor':(layer.fillcolor)?layer.fillcolor:'rgba(160,224,232,0.6)',
              'data':layer.data,
              'linear':(layer.linear)?layer.linear:true
            });
          })
        }
        scope.$watch('activeData', function (newValue, oldValue) {
          $('#spidergraphcontainer').spidergraph('redraw');
        },true);
        $(elem).bind('spiderdatachange', function( ev, data ) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(data);
          });
          scope.activeData=data;
        });
      }
    };
  });