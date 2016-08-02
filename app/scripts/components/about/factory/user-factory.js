angular.module('myAppAbout')
  .factory('User', function () {
    var user = {};

    user.name = '';
    user.id = null;
    user.phone = '';
    user.email = '';

    user.getName = function () {
      return user.name;
    };
    user.setName = function (name) {
      user.name = name;
    };
    user.getId = function () {
      return user.id;
    };
    user.setId = function (id) {
      user.id = id;
    };
    user.getPhone = function () {
      return user.phone;
    };
    user.setPhone = function (phone) {
      user.phone = phone;
    };
    user.getEmail = function () {
      return user.email;
    };
    user.setEmail = function (email) {
      user.email = email;
    };

    return user;

  });
