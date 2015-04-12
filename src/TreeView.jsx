var React = require('react/addons');

var TreeView = React.createClass({
    render: function() {
        return <TreeNode data={ this.props.data }/>;
    }
});

var TreeNode = React.createClass({
    render: function() {
        if (this.props.data.constructor === Array) {
            return (
                <ol className="treeview-node-array" start="0">
                    {this.props.data.map(function(item, index) {
                        return <li key={ index }><TreeNode data={ item }/></li>
                    }, this)}
                </ol>
            )
        }
        else if (this.props.data.constructor === Object) {
            return (
                <ul className="treeview-node-object">
                    {Object.keys(this.props.data).map(function(key) {
                        var val = this.props.data[key];
                        return (
                            <li key={ key }>
                                <span className="treeview-node-key">{ key }</span>: 
                                <TreeNode data={ val }/>
                            </li>
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
