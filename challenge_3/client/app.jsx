
class App extends React.Component {
  constructor(props) {
    super(props)

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
    }

    this.onCheckoutClick = this.onCheckoutClick.bind(this);
    this.onTextInputChange = this.onTextInputChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onCheckoutClick(event) {
    event.preventDefault();
    this.setState({ displayedForm: 1 })
  }

  onTextInputChange(event) {
    event.preventDefault();
    let key = event.target.name;
    this.setState((state) => {
      state.formObj[key] = event.target.value;
      return state;
    })
  }

  onSubmitClick(event) {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/data",
      data: this.state.formObj
    })

    this.setState((state) => {
      state.displayedForm++;
      return state;
    });
  }

  render() {
    return (
      <div>
        <div>Here's my Mini App!</div>
        <button onClick={this.onCheckoutClick}>Checkout</button>
        <ConditionalRender state={this.state} onSubmitClick={this.onSubmitClick} onTextInputChange={this.onTextInputChange}></ConditionalRender>
      </div>
    )
  }
}

const formFieldsArray = [
  ["name", "email", "password"],
  ["addressLine1", "addressLine2", "city", "state", "zipCode", "phoneNum"],
  ["creditCardNum", "expiryDate", "CVV", "billingZip"]
]

const Form1 = (props) => {
  return (
    <div>
      <form name="F1" >
        {formFieldsArray[0].map((element, index) => {
          return <input type="text" name={element} onChange={props.onTextInputChange} placeholder={element} innerText={element} key={index}></input>
        })
        }
        <button type="submit" onClick={props.onSubmitClick}>Submit</button>
      </form>
    </div >
  )
}

const Form2 = (props) => {
  return (
    <div>
      <form name="F2">
        {formFieldsArray[1].map((element, index) => {
          return <input type="text" name={element} onChange={props.onTextInputChange} placeholder={element} innerText={element} key={index}></input>
        })
        }
        <button type="submit" onClick={props.onSubmitClick}>Submit</button>
      </form>
    </div>
  )
}

const Form3 = (props) => {
  return (
    <div>
      <form name="F3">
        {formFieldsArray[2].map((element, index) => {
          return <input type="text" name={element} onChange={props.onTextInputChange} placeholder={element} innerText={element} key={index}></input>
        })
        }
        <button type="submit" onClick={props.onSubmitClick}>Submit</button>
      </form>
    </div>
  )
}

const LastScreen = (props) => {
  return (
    <div>
      {JSON.stringify(props.state.formObj)}
      <button type="submit" onClick={props.onSubmitClick}>Purchase</button>
    </div>
  )
}

const ConditionalRender = (props) => {
  console.log(props.state)
  if (props.state.displayedForm === 0) {
    return <div>Click checkout to complete your purchase</div>
  } else if (props.state.displayedForm === 1) {
    return <Form1 onSubmitClick={props.onSubmitClick} onTextInputChange={props.onTextInputChange}></Form1>
  } else if (props.state.displayedForm === 2) {
    return <Form2 onSubmitClick={props.onSubmitClick} onTextInputChange={props.onTextInputChange}></Form2>
  } else if (props.state.displayedForm === 3) {
    return <Form3 onSubmitClick={props.onSubmitClick} onTextInputChange={props.onTextInputChange}></Form3>
  } else if (props.state.displayedForm === 4) {
    return <LastScreen state={props.state} onSubmitClick={props.onSubmitClick} onTextInputChange={props.onTextInputChange}></LastScreen>
  } else {
    return <div>All done!!!!</div>
  }
}



ReactDOM.render(<App />, document.getElementById("app"));
