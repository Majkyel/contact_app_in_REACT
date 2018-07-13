var contacts = [
    {
        id: 1,
        firstName: 'Maciej',
        lastName: 'Nowik',
        email: 'nowik22@gmail.com'
    },
    {
        id: 2,
        firstName: 'Andrzej',
        lastName: 'Kolasa',
        email: 'a.kol20@o2.pl'
    },
    {
        id: 3,
        firstName: 'Erwin',
        lastName: 'Lubicz',
        email: 'lubiczz@wp.pl'
    }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React. createClass({
    render: function() {
        return (
            React.createElement('div', {className: 'app'},
                React.createElement(ContactForm, {contact: contactForm}),
                React.createElement(Contacts, {items: contacts})
            )
        );
    }
});
