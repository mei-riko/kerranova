import $ from 'jquery';
$(document).ready(() =>{
  // Input mask
  if( $('.phone').length > 0 ) {
    $(".phone").inputmask({
      mask: "+7 999 999 99 99",
      placeholder: " ",
      showMaskOnHover: true,

      onincomplete: function(){ 
        $(this).closest("form").addClass('error-phone'); 
        $(this).addClass('error'); 
        $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
      }, 
      oncomplete: function(){ 
        $(this).closest("form").removeClass('error-phone'); 
        $(this).removeClass('error'); 
        $(this).siblings(".error_phone").removeClass('error').html(''); 
      },
    })
  }
  $('input.phone').on('keydown', function(event) {
    if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
      event.preventDefault();
      $(this).blur();
      return false;
    }
  });
  // Input Number
  if( $('.input.input_count.input_count--active').length > 0 ){
    $('.input.input_count.input_count--active').number_plugin({
      width: '65px',
      height: '42px'
    });
  }
  if( $('.input.input_count.input_count--full').length > 0 ){
    $('.input.input_count.input_count--full').number_plugin({
      // width: '65px',
      height: '42px',
      style: 'main_number_plugin--full'
    });
  }
});