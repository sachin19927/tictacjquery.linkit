/*
* name:TICTAC
*Auhtor : SACHIN
* version : 0.1.0
*LICENCE : VTU
*/


(function ($) {
    $.fn.linkIt=function (options) {
        var settings=$.extend({
            href:null,
            text:null,
            target:'_self'
        },options);

        //validation
        if(settings.href==null)
        {
            console.log('you need an href option ofr link it work');
            return this;

        }

        return this.each(function () {
            var object=$(this);
            if(settings.text==null)
            {
                settings.text=object.text();

            }
            object.wrap('<a target=" '+settings.target+' " href="'+settings.href+'">').text(settings.text);

        });
    }
    
});


$(document).ready(function () {
    var x="x";
    var o="o";
    var turns=0;
//spot vars
    var spot1=$('#spot1');
    var spot2=$('#spot2');
    var spot3=$('#spot3');
    var spot4=$('#spot4');
    var spot5=$('#spot5');
    var spot6=$('#spot6');
    var spot7=$('#spot7');
    var spot8=$('#spot8');
    var spot9=$('#spot9');




    $('#board li').on('click',function () {

        if (spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
            spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
            spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
            spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
            spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
            spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
            spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
            spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
        )
        {
            alert('Winner : O');
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
        }

        else if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
            spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
            spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
            spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
            spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
            spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
            spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
            spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
        )
        {
            alert('Winner : X');
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
        }
        else if(turns==9)
        {
            alert('Tie Game');
            $('#board li').text('+');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
            turns=0;

        }
        else if($(this).hasClass('disable'))
        {
            alert('This spot is already filled');
        }

        else if(turns%2==0) {
            turns++;
            $(this).text(o);
            $(this).addClass('disable o');
            if (spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
                spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
                spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
                spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
                spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
                spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
                spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
                spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
            ) {
                alert('Winner : O');
                turns = 0;
            }
        }
            else
            {
                turns++;
                $(this).text(x);
                $(this).addClass('disable x');
                if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
                    spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
                    spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
                    spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
                    spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
                    spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
                    spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
                    spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
                ) {
                    alert('Winner : X');
                    turns = 0;
                }
            }

    });
           //reset handler
           $("#reset").on('click',function () {
               $('#board li').text('+');
               $('#board li').removeClass('disable');
               $('#board li').removeClass('0');
               $('#board li').removeClass('x');
               turns=0;
           });

});
