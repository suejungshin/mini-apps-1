class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedForm: 0,
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
  }

  onCheckoutClick(event) {
    event.preventDefault();
    this.setState({
      displayedForm: 1
    });
  }

  onTextInputChange(event) {
    event.preventDefault();
    let key = event.target.name;
    this.setState(state => {
      state.formObj[key] = event.target.value;
      return state;
    });
  }

  onSubmitClick(event) {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/data",
      data: this.state.formObj
    });
    this.setState(state => {
      state.displayedForm++;
      return state;
    });
  }

  render() {
    return React.createElement("div", null, React.createElement("div", null, "Here's my Mini App!"), React.createElement("button", {
      onClick: this.onCheckoutClick
    }, "Checkout"), React.createElement(ConditionalRender, {
      state: this.state,
      onSubmitClick: this.onSubmitClick,
      onTextInputChange: this.onTextInputChange
    }));
  }

}

const formFieldsArray = [["name", "email", "password"], ["addressLine1", "addressLine2", "city", "state", "zipCode", "phoneNum"], ["creditCardNum", "expiryDate", "CVV", "billingZip"]];

const Form1 = props => {
  return React.createElement("div", null, React.createElement("form", {
    name: "F1"
  }, formFieldsArray[0].map((element, index) => {
    return React.createElement("input", {
      type: "text",
      name: element,
      onChange: props.onTextInputChange,
      placeholder: element,
      innerText: element,
      key: index
    });
  }), React.createElement("button", {
    type: "submit",
    onClick: props.onSubmitClick
  }, "Submit")));
};

const Form2 = props => {
  return React.createElement("div", null, React.createElement("form", {
    name: "F2"
  }, formFieldsArray[1].map((element, index) => {
    return React.createElement("input", {
      type: "text",
      name: element,
      onChange: props.onTextInputChange,
      placeholder: element,
      innerText: element,
      key: index
    });
  }), React.createElement("button", {
    type: "submit",
    onClick: props.onSubmitClick
  }, "Submit")));
};

const Form3 = props => {
  return React.createElement("div", null, React.createElement("form", {
    name: "F3"
  }, formFieldsArray[2].map((element, index) => {
    return React.createElement("input", {
      type: "text",
      name: element,
      onChange: props.onTextInputChange,
      placeholder: element,
      innerText: element,
      key: index
    });
  }), React.createElement("button", {
    type: "submit",
    onClick: props.onSubmitClick
  }, "Submit")));
};

const LastScreen = props => {
  return React.createElement("div", null, JSON.stringify(props.state.formObj), React.createElement("button", {
    type: "submit",
    onClick: props.onSubmitClick
  }, "Purchase"));
};

const ConditionalRender = props => {
  console.log(props.state);

  if (props.state.displayedForm === 0) {
    return React.createElement("div", null, "Click checkout to complete your purchase");
  } else if (props.state.displayedForm === 1) {
    return React.createElement(Form1, {
      onSubmitClick: props.onSubmitClick,
      onTextInputChange: props.onTextInputChange
    });
  } else if (props.state.displayedForm === 2) {
    return React.createElement(Form2, {
      onSubmitClick: props.onSubmitClick,
      onTextInputChange: props.onTextInputChange
    });
  } else if (props.state.displayedForm === 3) {
    return React.createElement(Form3, {
      onSubmitClick: props.onSubmitClick,
      onTextInputChange: props.onTextInputChange
    });
  } else if (props.state.displayedForm === 4) {
    return React.createElement(LastScreen, {
      state: props.state,
      onSubmitClick: props.onSubmitClick,
      onTextInputChange: props.onTextInputChange
    });
  } else {
    return React.createElement("div", null, "All done!!!!");
  }
};

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));