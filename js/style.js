/*global $, confirm, FormData*/
$(document).ready(function () {
    'use strict';
    
    // Animation Label And Show Error When This Val Is Empty
    $('.login .form-group input').focus(function () {
        $(this).parent().removeClass('down').addClass('not-down').find('label').removeClass('down');
        if ($(this).parent().find('.empty-error').hasClass('show')) {
            $(this).parent('.form-group').addClass('error');
        } else {
            $(this).parent('.form-group').removeClass('error');
        }
    }).blur(function () {
        if ($(this).val() === '') {
            $(this).parent().removeClass('not-down').addClass('down').find('label').addClass('down');
            $(this).addClass('error').parent().find('.empty-error').addClass('show').fadeIn();
            $(this).parent('.form-group').addClass('error');
        } else {
            $(this).removeClass('error').parent().find('.empty-error').removeClass('show').fadeOut();
            $(this).parent('.form-group').removeClass('error');
        }
    });


    $('.form-group .empty-error i.icon-warning-sign').hover(function () {
        $(this).parent().find('.msg-box').css({
            'visibility': 'visible',
            'opacity': '1'
        });
    }, function () {
        $(this).parent().find('.msg-box').css({
            'visibility': 'hidden',
            'opacity': '0'
        });
    });

    // On Admin Login When Click On The Message Focus On The Input
    $('form.login .empty-error').click(function () {
        $(this).parent().find('input').focus();
    });
});