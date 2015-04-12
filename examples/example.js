var React = require('react/addons');
var TreeView = require('../src/TreeView');


window.onload = function() {
    var data = {
        doc: 'TBD',
        data: {
            items: [
                {
                    id: 1,
                    name: 'Richard'
                },
                {
                    id: 2,
                    name: 'Clara'
                }
            ],
            length: 2,
            created: '20150321T13:37'
        }
    };
    
    
    var ctr = document.getElementById('ctr');
    React.render(<TreeView data={ data }/>, ctr);
};
