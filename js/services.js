(function() {
  'use strict';

  angular
    .module('shopper')
    .factory('ShopFactory', function($http, moment, _) {
      var url = 'https://tiny-tiny.herokuapp.com/collections/stringshoppe';

      var newItem = function(obj) {
        obj.sold = 'false';
        return $http.post(url, obj);
      };

      var getItems = function() {
        return $http.get(url);
      };

      var selectItemID = function(product) {
        return product._id;
      };

      var deleteItem = function(product) {
        var id = selectItemID(product);
        var url = 'https://tiny-tiny.herokuapp.com/collections/stringshoppe/' + id;
        return $http.delete(url, product);
      };

      return {
        deleteItem: deleteItem,
        selectItemID: selectItemID,
        getItems: getItems,
        newItem: newItem
      };

    })
    .factory('CartFactory', function($http, moment, _) {
      var url = 'https://tiny-tiny.herokuapp.com/collections/stringshoppecart';

      var getCartItems = function() {
        return $http.get(url);
      };

      var newCartItem = function(product) {
        return $http.post(url, product);
      };

      var selectItemID = function(product) {
        return product._id;
      };

      var deleteCartItem = function(product) {
        var id = selectItemID(product);
        var url = 'https://tiny-tiny.herokuapp.com/collections/stringshoppecart/' + id;
        return $http.delete(url, product);
      };

      return {
        getCartItems: getCartItems,
        selectItemID: selectItemID,
        deleteCartItem: deleteCartItem,
        newCartItem: newCartItem
      };

    })




}());
