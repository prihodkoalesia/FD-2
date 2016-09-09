var myController = (function(model, view){
    return {
        render: function() {
            console.log("Сейчас мы будем получать данные");
            var data = model.getData();
            console.log("Данные получили, сейчас будем отрисовывать нашу вьюху");
            view.render(data);
            console.log("Отрисовали вьюху, хотя контроллер даже не знает, куда и как произошла отрисовка");
        }
    }
})(myModel, myView);