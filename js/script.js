$(function(){

    var charts = $('.charts');
    var chart = $('.chart');

    $(window).on("scroll", function(){
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 700) {
            if (!charts.hasClass('active')){
                animateChart();
                charts.addClass('active');
            }
        } else {
            charts.removeClass('active')
        }
    });
        
    function animateChart(){
        chart.each(function(){
            var item = $(this);
            var title = item.find('p');
            var targetNum = title.attr('data-num');
            var circle = item.find('circle');

            $({rate:0}).animate({rate:targetNum},
                {
                    duration: 2000,
                    progress: function(){
                        var now = this.rate;
                        var amount = 310 - (310*now/100);

                        title.text(Math.floor(now));
                        circle.css({strokeDashoffset:amount});
                    }
                });
        });
    }

});