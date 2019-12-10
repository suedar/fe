``` js
    (function(window, undefined) {
        var rootjQuery = window.document;
        var jQuery = (function() {
            // 创建 jquery 对象
            var jQuery = function(selector, context) {
                return new jQuery.fn.init(selector, context, rootjQuery);
            }
            jQuery.fn = jQuery.prototype = {
                construct: jQuery,
                init: function(selector, context, rootjQuery) {
                    var that = this;
                    that.ele = null;
                    that.value = '';
                    if (selector.charAt(0) === '#') {
                        that.ele = document.getElementById(selector.slice(1));
                    }
                    that.getValue = function() {
                        that.value = that.ele ? that.ele.innerHTML : 'No value';
                        return that;
                    };
                    that.showValue = function() {
                        return that.value;
                    };
                }
            };
            jQuery.fn.init.prototype = jQuery.fn;
            return jQuery;
        })
    })()
```