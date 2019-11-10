//i am setting focus on first text field

$('#name').focus();

//when user chooses option Other from Job Role section, make text field in HTML and hide it via jquery

$('#other-title').hide();

//adding event handler on specific (Other) select value

$('#title').change(function() {
    let show = $(this).val() == 'other';
    $('#other-title').toggle(show);
});

//hide Select theme option from select

$("#design option:first").attr('selected', 'selected').hide();


//”T-Shirt Info” section 

//adding option Please select a T-shirt theme to select 
function Tshirt() {

    let $cornflowerblue = $('#color option[value="cornflowerblue"]');
    let $darkslategrey = $('#color option[value="darkslategrey"]');
    let $gold = $('#color option[value="gold"]');
    let $tomato = $('#color option[value="tomato"]');
    let $steelblue = $('#color option[value="steelblue"]');
    let $dimgrey = $('#color option[value="dimgrey"]');

    $cornflowerblue.hide();
    $darkslategrey.hide();
    $gold.hide();
    $tomato.hide();
    $steelblue.hide();
    $dimgrey.hide();
}
//calling function 
Tshirt();

//setting listener on Design select element
$('#design').change(function() {

    //dynamically remove all elements from select and add elements that are matching
    if ($(this).val() == 'js puns') {
        //removing
        $('#color option[value!=0]').remove()
            //addin options
        $('#color').append(new Option('Cornflower Blue (JS Puns shirt only)', 'cornflowerblue'));
        $('#color').append(new Option('Dark Slate Grey (JS Puns shirt only)', 'darkslategrey'));
        $('#color').append(new Option('Gold (JS Puns shirt only)', 'gold'));

    } else if ($(this).val() == 'heart js') {
        //removing
        $('#color option[value!=0]').remove();
        //adding options
        $('#color').append(new Option('Tomato (I &#9829; JS shirt only)', 'tomato'));
        $('#color').append(new Option('Steel Blue (I &#9829; JS shirt only)', 'steelblue'));
        $('#color').append(new Option('Dim Grey (I &#9829; JS shirt only)', 'steelblue'));
    }
});
//---------------------------------------------------------------------

//”Register for Activities” section 

//creating total cost element and appending to DOM

let $totalCostLabel = $("<span id='totalCost'>Total cost: $</span>");
$('.activities').append($totalCostLabel);

let $totalActivityCost = 0;

//setting listener for checkboxes

$('.activities').change(function(event) {

    const $target = $(event.target);

    //data-cost getting value
    let $dataCost = parseInt($target.attr('data-cost').slice(-3));
    console.log($dataCost);

    //time and date getting value
    let $dateAndTime = $target.attr('data-day-and-time');
    console.log($dateAndTime);



    if ($target.is(':checked')) {

        $totalActivityCost = $totalActivityCost + $dataCost;
        $('#totalCost').html("Total cost $" + $totalActivityCost);


    } else {

        $totalActivityCost = $totalActivityCost - $dataCost;
        $('#totalCost').html("Total cos $" + $totalActivityCost);

    }

    $('[type="checkbox"]').each(function() {
        const $test = $(this);
        if ($dateAndTime === $test.attr('data-day-and-time') && $target !== $test) {
            if ($target.is(':checked')) {
                console.log('im working 1')
                $test.attr('disabled', true);
                $target.attr("disabled", false);
            } else {
                console.log('im working 2');
                $target.attr("disabled", false);
                $test.attr('disabled', false);
            }

        }


    });

});

//-----------------------------------------------------------------

//Payment Section

$('#payment option[value="Credit Card"]').insertBefore('#payment option[value="select method"]').attr('selected', true);
$('#payment option[value="select method"]').hide();

function showPayment() {

    let creditCard = $('#credit-card').show();
    let paypal = $('#paypal').hide();
    let bitcoin = $('#bitcoin').hide();


    $('#payment').change(function() {

        let click = $(this).val();

        if (click == 'Credit Card') {
            creditCard.show();
            paypal.hide();
            bitcoin.hide();
        } else if (click == 'Bitcoin') {
            bitcoin.show();
            paypal.hide();
            creditCard.hide();
        } else if (click == 'PayPal') {
            paypal.show();
            creditCard.hide();
            bitcoin.hide();
        }
    });

}
showPayment();

// validation

function isNameValid() {
    let pattern = /^[a-zA-Z]*$/;
    let name = $('#name').val();
    if (pattern.test(name) && name !== '' && name.length > 1) {
        console.log('works');
    } else {
        let $textError = ("<span> Wrong name input</span>");
        $('fieldset label:eq(0)').append($textError).css('color', 'red');
        $('#name').css('borderColor', 'red');
        console.log('wrong input');
        return true;
    }
}

function isEmailValid() {
    let pattern = /^[^@]+@[^@.]+\.[a-z]+$/i;
    let email = $('#mail').val();
    if (pattern.test(email) && email !== '') {
        console.log('works');
    } else {
        let $textError = ("<span> Wrong email input</span>");
        $('fieldset label:eq(1)').append($textError).css('color', 'red');
        $('#mail').css('borderColor', 'red');
        console.log('wrong input');
        return true;
    }
}

function isCheckBoxChecked() {
    let $textError = ("<span> You must select at least on Activity</span>");
    $('fieldset legend:eq(2)').append($textError).css('color', 'red');
    $('input[type=checkbox]').prop('checked');
    console.log('You must select one Activity');

}

function creditCardSelected() {
    let pattern = "^(?:(?<visa>4[0-9]{12}(?:[0-9]{3})?)|";
    let creditCard = $('#cc-num');
    if ($('#payment option[value="Credit Card"]')) {
        console.log('credit card is selected');
        let $textError = "<span>Please enter credit card information</span>";
        $('.col-6').append($textError).css('color', 'red');
    } else {
        $textError.hide();
    }
}

$('form').on('submit', function(e) {
    e.preventDefault();
    isNameValid();
    isEmailValid();
    isCheckBoxChecked();
    creditCardSelected();
});