import $ from 'jquery';

$("#form-line").on("submit", function(e){
  e.preventDefault();

  $.ajax({
    url: "/test.html",
    context: $( ".js-button-submit" ),
    success: function(data){
      $( this ).addClass('success');
      $( this ).find('span.form__btn-default').html(data);
      $('.form--line .form__input').val('');
    }
  });
});