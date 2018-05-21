var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },
  
    render: function() {
      return (
        React.createElement('form', {className: 'contactForm'},
          React.createElement('img', {
            className: 'contactFormImage',
            src: 'https://image.flaticon.com/icons/svg/876/876626.svg'
          }),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Imię',
            value: this.props.contact.firstName,
          }),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Nazwisko',
            value: this.props.contact.lastName,
          }),
          React.createElement('input', {
            type: 'email',
            placeholder: 'Email',
            value: this.props.contact.email,
          }),
          React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
        )
      )
    },
  });