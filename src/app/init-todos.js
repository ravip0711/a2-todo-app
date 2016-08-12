"use strict";
var Init = (function () {
    function Init() {
    }
    Init.prototype.load = function () {
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
            console.log('No todos found...creating...');
            var todos = [
                {
                    text: 'Pick up books from library'
                },
                {
                    text: 'Read new book'
                },
                {
                    text: 'Get the car washed'
                },
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
            return;
        }
        else {
            console.log('Found todos...');
        }
    };
    return Init;
}());
exports.Init = Init;
//# sourceMappingURL=init-todos.js.map