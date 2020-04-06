$(document).ready(function(){
    $('.modal').css('display','block');
    $('.modal-dialog').css('top','25%');
    $('.main-carousel').flickity({
        cellAlign:'left',
        contain:true,
        pageDots: false,
        wrapAround: true,
    })
    $('.modal-close').click(function(){
        $('.modal').css('display','none');
    })
    $('#SignupButton').click(function(){
        $('.modal').css('display','none');
    })
    $('nav input').change(function(){
        if($(this).is(':checked')){
            $('main').css('z-index','-4');
        }
    })

    console.log($('.modal-dialog').children('img').width());
    var DayOfWeek = new Date().getDay()
    $('#'+DayOfWeek).css('font-weight','900');

    //looking for to get around a -360 for the child of the section


    // console.log($('.main-carousel').prev().outerHeight())
    $('.main-carousel').each(function(index){
        var x = 0;
        while(x <= index){
            x++;
            console.log($(this)[index])
            // x++;
        }

        // var schoolSection = $(el).prev();
        // var SchoolSectionHeight = schoolSection.height();
        // var childrenTop = -Math.abs(schoolSection.children('.School_About').position().top)
        // console.log(SchoolSectionHeight);
        // console.log(childrenTop);
        // console.log(SchoolSectionHeight+childrenTop);
        // $(el).css('top',SchoolSectionHeight+childrenTop);


    })
    var schoolSection = $('.main-carousel').prev();
    // console.log(schoolSection.children()[2]);

    //manipulate the css to position and move items around the page to make them fit
var eventHeight = $('#event').height();
var stickyHeight = $('.sticky').outerHeight(true);
var navigationStartHeight = parseInt($('#box').css('top'))
var NavigationHeight = navigationStartHeight-eventHeight
    //create function to set the position of the header and main sections
    function ElementPlacement(){      
        $('.sticky').css('padding-top',eventHeight);        
        $('#mainSection').css('margin-top',stickyHeight-eventHeight);
    }
    ElementPlacement();

    $.fn.InView = function(){
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var ViewTop = $(window).scrollTop();
        var ViewBottom = ViewTop + $(window).height();
        return elementBottom > ViewTop && elementTop < ViewBottom;
    };

    $(window).on('scroll', function(){
        if(!$('#event').InView()){
            $('.sticky').css('padding-top',0);
            $('#box').css('top',NavigationHeight)
            $('#box').next().css('top',NavigationHeight)
        } else {
            $('.sticky').css('padding-top',eventHeight);
            $('#box').css('top',navigationStartHeight)
            $('#box').next().css('top',navigationStartHeight)
        }
    });
    })
    // console.log(new Date().getDay())