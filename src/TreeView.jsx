var React = require('react/addons');

var TreeView = React.createClass({
    getDefaultProps: function() {
        return {
            levelsExpanded: 1
        };
    },

    childContextTypes: {
        levelsExpanded: React.PropTypes.number
    },

    getChildContext: function() {
        return {
            levelsExpanded: this.props.levelsExpanded
        };
    },

    render: function() {
        return (
            <TreeNodeValue
                data={ this.props.data }
                level={ 0 } />
        );
    }
});

var TreeNode = React.createClass({
    getInitialState: function() {
        return {
            expanded: false
        };
    },

    contextTypes: {
        levelsExpanded: React.PropTypes.number.isRequired,
    },

    componentWillMount: function() {
        this.setState({
            expanded: (this.props.level <= this.context.levelsExpanded)
        });
    },

    render: function() {
        var label = null;
        if (this.props.label) {
            label = <TreeNodeLabel label={ this.props.label }/>;
        }

        return (
            <li onClick={ this.onClickToggle }>
                { label }
                <TreeNodeValue
                    data={ this.props.value }
                    level={ this.props.level }
                    expanded={ this.state.expanded }/>
            </li>
        );
    },

    onClickToggle: function(ev) {
        this.setState({
            expanded: !this.state.expanded
        });

        ev.stopPropagation();
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
    getDefaultProps: function() {
        return {
            expanded: true,
            level: 0
        };
    },

    render: function() {
        if (this.props.data.constructor === Array) {
            if (this.props.expanded) {
                return (
                    <ol className="treeview-value-array" start="0">
                        {this.props.data.map(function(item, index) {
                            return (
                                <TreeNode
                                    key={ index }
                                    level={ this.props.level + 1 }
                                    label="" value={ item }/>
                            );
                        }, this)}
                    </ol>
                );
            }
            else {
                return <span className="treeview-value-placeholder">[...]</span>;
            }
        }
        else if (this.props.data.constructor === Object) {
            if (this.props.expanded) {
                return (
                    <ul className="treeview-value-object">
                        {Object.keys(this.props.data).map(function(key) {
                            var val = this.props.data[key];
                            return (
                                <TreeNode
                                    key={ key }
                                    level={ this.props.level + 1 }
                                    label={ key } value={ val }/>
                            );
                        }, this)}
                    </ul>
                );
            }
            else {
                return <span className="treeview-value-placeholder">{'{...}'}</span>;
            }
        }
        else {
            return <span className="treeview-value-pod">{ this.props.data }</span>;
        }
    }
});

module.exports = TreeView;
