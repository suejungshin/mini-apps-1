class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedForm: '',
      formObj: {
        name: '',
        email: '',
        password: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNum: '',
        creditCardNum: '',
        expiryDate: '',
        CVV: '',
        billingZip: ''
      }
    };
    this.onCheckoutClick = this.onCheckoutClick.bind(this);
    this.onTextInputChange = this.onTextInputChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.F1 = React.createElement("div", null, React.createElement("form", {
      name: "F1"
    }, React.createElement("input", {
      type: "text",
      name: "name",
      onChange: this.onTextInputChange,
      placeholder: "name"
    }), React.createElement("input", {
      type: "text",
      name: "email",
      onChange: this.onTextInputChange,
      placeholder: "email"
    }), React.createElement("input", {
      type: "text",
      name: "password",
      onChange: this.onTextInputChange,
      placeholder: "password"
    }), React.createElement("button", {
      type: "submit",
      onClick: this.onSubmitClick
    }, "Submit")));
    this.F2 = React.createElement("div", null, React.createElement("form", {
      name: "F2",
      onSubmit: this.onSubmitClick
    }, React.createElement("input", {
      type: "text",
      name: "addressLine1",
      onChange: this.onTextInputChange,
      placeholder: "Address Line 1"
    }), React.createElement("input", {
      type: "text",
      name: "addressLine2",
      onChange: this.onTextInputChange,
      placeholder: "Address Line 2"
    }), React.createElement("input", {
      type: "text",
      name: "city",
      onChange: this.onTextInputChange,
      placeholder: "city"
    }), React.createElement("input", {
      type: "text",
      name: "state",
      onChange: this.onTextInputChange,
      placeholder: "state"
    }), React.createElement("input", {
      type: "text",
      name: "zipCode",
      onChange: this.onTextInputChange,
      placeholder: "zipCode"
    }), React.createElement("input", {
      type: "text",
      name: "phoneNum",
      onChange: this.onTextInputChange,
      placeholder: "phone number"
    }), React.createElement("button", {
      type: "submit",
      onClick: this.onSubmitClick
    }, "Submit")));
    this.F3 = React.createElement("div", null, React.createElement("form", {
      name: "F3"
    }, React.createElement("input", {
      type: "text",
      name: "creditCardNum",
      onChange: this.onTextInputChange,
      placeholder: "credit card number"
    }), React.createElement("input", {
      type: "text",
      name: "expiryDate",
      onChange: this.onTextInputChange,
      placeholder: "expiration date"
    }), React.createElement("input", {
      type: "text",
      name: "CVV",
      onChange: this.onTextInputChange,
      placeholder: "CVV"
    }), React.createElement("input", {
      type: "text",
      name: "billingZip",
      onChange: this.onTextInputChange,
      placeholder: "billing zip code"
    }), React.createElement("button", {
      type: "submit",
      onClick: this.onSubmitClick
    }, "Submit")));
  }

  onCheckoutClick(event) {
    event.preventDefault();
    this.setState({
      displayedForm: this.F1
    });
  }

  onTextInputChange(event) {
    event.preventDefault();
    let key = event.target.name;
    this.setState(state => {
      state.formObj[key] = event.target.value;
      return state;
    });
    console.log(this.state);
  }

  onSubmitClick(event) {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/data",
      data: this.state.formObj
    });
    this.setState(state => {
      if (state.displayedForm === this.F1) {
        state.displayedForm = this.F2;
      } else if (state.displayedForm === this.F2) {
        state.displayedForm = this.F3;
      } else if (state.displayedForm === this.F3) {
        state.displayedForm = React.createElement("div", null, JSON.stringify(this.state.formObj), React.createElement("button", {
          type: "submit",
          onClick: this.onSubmitClick
        }, "Purchase"));
      } else if (state.displayedForm === this.F4) {
        state.displayedForm = React.createElement("div", null, "All Done!!!");
      }

      return state;
    });
  }

  render() {
    return React.createElement("div", null, React.createElement("div", null, "Here's my Mini App!"), React.createElement("button", {
      onClick: this.onCheckoutClick
    }, "Checkout"), this.state.displayedForm);
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));