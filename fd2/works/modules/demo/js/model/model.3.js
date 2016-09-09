var myModel = (function($){
    var getData = function () {
        var data="Иван Иванов 33";
        return data;
    }
    return {
        getData: getData
    }
})($);