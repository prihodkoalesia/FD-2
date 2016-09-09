var myView = (function(){
    return {
        render: function(data) {
            var div = document.createElement('div');
            div.innerHTML = data;
            document.body.appendChild(div);
        }
    }
})();