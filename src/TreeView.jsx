var React = require('react/addons');

var TreeView = React.createClass({
    render: function() {
        return (
            <TreeNodeValue data={ this.props.data }/>
        );
    }
});

var TreeNode = React.createClass({
    render: function() {
        if (this.props.label) {
            return (
                <li>
                    <TreeNodeLabel label={ this.props.label }/>
                    <TreeNodeValue data={ this.props.value }/>
                </li>
            );
        }
        else {
            return <li><TreeNodeValue data={ this.props.value }/></li>;
        }
    }
});

var TreeNodeLabel = React.createClass({
    render: function() {
        return (
            <span className="treeview-label">{ this.props.label }</span>
        );
    }
});

var TreeNodeValue = React.createClass({
    render: function() {
        if (this.props.data.constructor === Array) {
            return (
                <ol className="treeview-value-array" start="0">
                    {this.props.data.map(function(item, index) {
                        return (
                            <TreeNode key={ index } label="" value={ item }/>
                        );
                    }, this)}
                </ol>
            )
        }
        else if (this.props.data.constructor === Object) {
            return (
                <ul className="treeview-value-object">
                    {Object.keys(this.props.data).map(function(key) {
                        var val = this.props.data[key];
                        return (
                            <TreeNode key={ key } label={ key } value={ val }/>
                        );
                    }, this)}
                </ul>
            )
        }
        else {
            return <span className="treeview-node-value">{ this.props.data }</span>;
        }
    }
});

module.exports = TreeView;
