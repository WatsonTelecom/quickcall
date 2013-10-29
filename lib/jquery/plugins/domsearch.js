(function($) {
    function search(reg, fun) {
        var node = this,
            args = arguments;

        if(!/(script|style)/i.test(node.nodeName) && !node.domSearch) {
            if(node.childNodes && node.childNodes.length > 0) {
                for (var i = 0; i < node.childNodes.length; ++i) {
                    search.apply(node.childNodes[i], args);
                }
            } else if (node.nodeType == 3) {
                var regexObj = new RegExp(reg),
                    res = regexObj.exec(node.nodeValue);

                if(res && typeof fun == "function") {
                    fun.apply(node, res);
                }
            }

            node.domSearch = true;
        }
    }

    $.fn.domSearch = function() {
        var args = arguments;
        this.each(function() {
            search.apply(this, args);
        });
    };
})(jQuery);