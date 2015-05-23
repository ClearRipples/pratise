define(function(require, exports, module) {

    var $ = require('$');
    
    exports.init = function() {
        var titles = $('.main > .content > h2, h2.pratise-module-title');
        var doc = $(document);
        if (titles.length <= 0) {
            return;
        }

        $(window).scroll(function() {
            var top = doc.scrollTop(), i;
            if (top >= doc.height()- $(window).height() - 20) {
                i = titles.length - 1;
            } else {
                for (i=0; i<titles.length; i++) {
                    if (top < titles.eq(i).offset().top - 20) {  
                        break;
                    }
                }
                i--;
                i = (i<0) ? 0 : i;
            }
            $('.nav-sidebar .side-highlight').removeClass('side-highlight');
            $('.nav-sidebar li[data-id]').eq(i).addClass('side-highlight');
            $('.nav-sidebar li[data-id]').eq(i).parent().parent("li").addClass('side-highlight');
        });
    };

});