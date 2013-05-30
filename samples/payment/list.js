/* Copyright 2013 PayPal */
"use strict";

var paypal_api = require('../../');
require('../configure');

var listPayment = {
    'count': '1',
    'start_index': '1'
};

paypal_api.payment.list(listPayment, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("List Payments Response");
        console.log(JSON.stringify(payment));
    }

});
