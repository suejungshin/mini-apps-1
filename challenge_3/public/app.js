class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
    this.onTextInputChange = this.onTextInputChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.F1 = React.createElement("div", null, React.createElement("form", {
      name: "F1"
    }, React.createElement("input", {
      type: "text",
      name: "name",
      onChange: this.onTextInputChange
    }, "Name"), React.createElement("input", {
      type: "text",
      name: "email",
      onChange: this.onTextInputChange
    }, "Email"), React.createElement("input", {
      type: "text",
      name: "password",
      onChange: this.onTextInputChange
    }, "Password"), React.createElement("button", {
      type: "submit",
      onClick: this.onSubmitClick
    }, "Submit")));
    this.F2 = React.createElement("div", null, React.createElement("form", {
      name: "F2",
      onSubmit: this.onSubmitClick
    }, React.createElement("input", {
      type: "text",
      name: "addressLine1",
      onChange: this.onTextInputChange
    }, "Address Line 1"), React.createElement("input", {
      type: "text",
      name: "addressLine2",
      onChange: this.onTextInputChange
    }, "Address Line 2"), React.createElement("input", {
      type: "text",
      name: "city",
      onChange: this.onTextInputChange
    }, "City"), React.createElement("input", {
      type: "text",
      name: "state",
      onChange: this.onTextInputChange
    }, "State"), React.createElement("input", {
      type: "text",
      name: "zipCode",
      onChange: this.onTextInputChange
    }, "Zip Code"), React.createElement("input", {
      type: "text",
      name: "phoneNum",
      onChange: this.onTextInputChange
    }, "Phone Number"), React.createElement("button", {
      type: "submit",
      onClick: this.onSubmitClick
    }, "Submit")));
    this.F3 = React.createElement("div", null, React.createElement("form", {
      name: "F3"
    }, React.createElement("input", {
      type: "text",
      name: "creditCardNum",
      onChange: this.onTextInputChange
    }, "Credit Card Number"), React.createElement("input", {
      type: "text",
      name: "expiryDate",
      onChange: this.onTextInputChange
    }, "Expiry Date"), React.createElement("input", {
      type: "text",
      name: "CVV",
      onChange: this.onTextInputChange
    }, "CVV"), React.createElement("input", {
      type: "text",
      name: "billingZip",
      onChange: this.onTextInputChange
    }, "Billing Zip Code"), React.createElement("button", {
      type: "submit",
      onClick: this.onSubmitClick
    }, "Submit")));
  }

  onTextInputChange(event) {
    event.preventDefault();
    let key = event.target.name;
    this.setState(state => {
      state[key] = event.target.value;
      return state;
    });
    console.log(this.state);
  }

  onSubmitClick(event) {
    event.preventDefault();
    console.log(this.state);
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/data",
      data: this.state
    });
  }

  render() {
    let displayedPage = this.F1;
    return React.createElement("div", null, React.createElement("div", null, "Here's my Mini App!"), React.createElement("button", null, "Checkout"), displayedPage);
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));