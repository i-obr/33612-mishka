$(document).ready(function() {
  var form = $('.form-order');
  form.validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },

    messages: {
      email: {
        requierd: "Введите адрес электронной почты",
        email: "Это некорректный адрес"
      }
    },

    errorPlacement: function(error, element) {
      if (element.is(":radio") || element.is(":checkbox")) {
        error.appendTo(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });
});
