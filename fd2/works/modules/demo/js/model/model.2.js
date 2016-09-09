var myModel = (function($){
    var getData = function () {
        var data=[];
        data[data.length]=prompt("введите имя");
        data[data.length]=prompt("введите фамилию");
        data[data.length]=prompt("введите возраст");
        return data.join(" ");
    }
    return {
        getData: getData
    }
})($);