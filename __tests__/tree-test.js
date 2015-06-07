jest.dontMock('../src/TreeView.jsx')

describe('TreeView', function() {
    it('renders simple single-POD trees', function() {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var TreeView = require('../src/TreeView.jsx');
        var tree, node, jsx, data = {};

        data.field = 1337;
        jsx = <TreeView data={ data }/>;

        tree = TestUtils.renderIntoDocument(jsx);
        node = TestUtils.scryRenderedDOMComponentsWithTag('span');

        expect(function() {
            node = TestUtils.findRenderedDOMComponentWithTag(tree,
                    'li');
        }).not.toThrow();
    });
});
