(function() {
  'use strict';

  angular
    .module('shopper')
    .controller('MainController', function($scope, ShopFactory, CartFactory) {

      function getAllProducts() {
        ShopFactory.getItems().success(function(data) {
          $scope.Products = data;
        });
      }

      getAllProducts();

      $scope.addToCart = function(product) {
        CartFactory.newCartItem(product).success(function() {
        });
      }

    })
    .controller('AdminController', function($scope, ShopFactory) {

      // can't figure out how to make the count print out
      function productCount() {
        ShopFactory.getItems().success(function(data) {
          $scope.number = data.length;
        });
      }

      productCount();

      function getAllProducts() {
        ShopFactory.getItems().success(function(data) {
          $scope.Products = data;
        });
      }

      getAllProducts();

      $scope.submitProduct = function(obj) {
        ShopFactory.newItem(obj).then(function() {
          getAllProducts();
          angular.element(document).find('input').val("");
          angular.element(document).find('textarea').val("");
        });
      }

      $scope.deleteProduct = function(product) {
        ShopFactory.deleteItem(product).success(function() {
          getAllProducts();
        });
      }

      $scope.edit = function(product) {
        //angular.element(document).find()
      }

    })
    .controller('CartController', function($scope, CartFactory) {

      function getCart() {
        CartFactory.getCartItems().success(function(data) {
          $scope.Cart = data;
        });
      }

      getCart();

      $scope.removeFromCart = function(product) {
        CartFactory.deleteCartItem(product).success(function() {
          getCart();
        });
      }

    })





}());
