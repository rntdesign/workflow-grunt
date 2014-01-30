(function(){
	'use strict';

    var config = {
	    config: {
	        app: {
	            widgets: ['widgetA', 'widgetB', 'widgetC','jquery-min.js']
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