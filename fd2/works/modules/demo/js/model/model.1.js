var myModel = (function($) {
    var getData = function() {
        var data = null;
        $.ajax('js/data/data.json', {
            dataTyle: 'json',
            async: false,
            success: function(json) {
                data = json.join(' ');
            }
        });
        return data;
    }
    return {
        getData: getData
    }
})($);