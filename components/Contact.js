var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    
    render: function() {
        return (
            React.createElement('div', {className: 'contactItem row'},
                React.createElement('img', {className: 'contactImage col-3', src: 'http://icons.veryicon.com/png/Application/iOS8%20Cirtangle%20Concept/Contacts.png'}),
                React.createElement('p', {className: 'contactName col-8'}, 'First name: ' + this.props.item.firstName),
                React.createElement('p', {className: 'contactName col-8'}, 'Last name: ' + this.props.item.lastName),
                React.createElement('a', {className: 'contactEmail col-8', href: 'Email: ' + this.props.item.email}, this.props.item.email),
            )
        )
    }
}); 
