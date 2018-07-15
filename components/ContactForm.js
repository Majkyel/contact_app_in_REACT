var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    
    render: function() {
        return (
            React.createElement('form', {className: 'contactForm'},
                React.createElement('label', {htmlFor: 'firstname', className: 'label'}, 'First name'),
                React.createElement('input', {
                    type: 'text',
                    id: 'firstname',
                    placeholder: 'Firstname',
                    value: this.props.contact.firstName,
                }),
                React.createElement('label', {htmlFor: 'lastname', className: 'label'}, ' Last name'),
                React.createElement('input', {
                    type: 'text',
                    id: 'lastname',
                    placeholder: 'Lastname',
                    value: this.props.contact.lastName,
                }),
                React.createElement('label', {htmlFor: 'email', className: 'label'}, ' Email'),
                React.createElement('input', {
                    type: 'email',
                    id: 'email',
                    placeholder: 'Email',
                    value: this.props.contact.email,
                }),
                React.createElement('button', {type: 'submit'}, 'Add contact')
            ) 
        )
    }
});