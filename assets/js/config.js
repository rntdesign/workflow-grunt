(function(){
	'use strict';

    var config = {
	    config: {
	        app: {
	            widgets: ['jquery-min','widgetA', 'widgetB', 'widgetC']
	        }
	    }
	};

    if (typeof module !== 'undefined') {
        module.exports = config;
    }
    else if (typeof require.config !== 'undefined') {
        require.config(config);
    }
})();