
class App extends React.Component {
  constructor(props) {
    super(props)

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
    }

    this.onCheckoutClick = this.onCheckoutClick.bind(this);
    this.onTextInputChange = this.onTextInputChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);

    this.F1 =
      <div>
        <form name="F1" >
          <input type="text" name="name" onChange={this.onTextInputChange} placeholder="name"></input>
          <input type="text" name="email" onChange={this.onTextInputChange} placeholder="email"></input>
          <input type="text" name="password" onChange={this.onTextInputChange} placeholder="password"></input>
          <button type="submit" onClick={this.onSubmitClick}>Submit</button>
        </form>
      </div>

    this.F2 =
      <div>
        <form name="F2" onSubmit={this.onSubmitClick}>
          <input type="text" name="addressLine1" onChange={this.onTextInputChange} placeholder="Address Line 1"></input>
          <input type="text" name="addressLine2" onChange={this.onTextInputChange} placeholder="Address Line 2"></input>
          <input type="text" name="city" onChange={this.onTextInputChange} placeholder="city"></input>
          <input type="text" name="state" onChange={this.onTextInputChange} placeholder="state"></input>
          <input type="text" name="zipCode" onChange={this.onTextInputChange} placeholder="zipCode"></input>
          <input type="text" name="phoneNum" onChange={this.onTextInputChange} placeholder="phone number"></input>
          <button type="submit" onClick={this.onSubmitClick}>Submit</button>
        </form>
      </div>

    this.F3 =
      <div>
        <form name="F3">
          <input type="text" name="creditCardNum" onChange={this.onTextInputChange} placeholder="credit card number"></input>
          <input type="text" name="expiryDate" onChange={this.onTextInputChange} placeholder="expiration date"></input>
          <input type="text" name="CVV" onChange={this.onTextInputChange} placeholder="CVV"></input>
          <input type="text" name="billingZip" onChange={this.onTextInputChange} placeholder="billing zip code"></input>
          <button type="submit" onClick={this.onSubmitClick}>Submit</button>
        </form>
      </div>



  }


  onCheckoutClick(event) {
    event.preventDefault();
    this.setState({ displayedForm: this.F1 })
  }


  onTextInputChange(event) {
    event.preventDefault();
    let key = event.target.name;
    this.setState((state) => {
      state.formObj[key] = event.target.value;
      return state;
    })
    console.log(this.state)
  }

  onSubmitClick(event) {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/data",
      data: this.state.formObj
    })

    this.setState((state) => {
      if (state.displayedForm === this.F1) {
        state.displayedForm = this.F2
      } else if (state.displayedForm === this.F2) {
        state.displayedForm = this.F3
      } else if (state.displayedForm === this.F3) {
        state.displayedForm =
          <div>
            {JSON.stringify(this.state.formObj)}
            <button type="submit" onClick={this.onSubmitClick}>Purchase</button>
          </div>
      } else if (state.displayedForm === this.F4) {
        state.displayedForm = <div>All Done!!!</div>
      }
      return state;
    });
  }


  render() {

    return (
      <div>
        <div>Here's my Mini App!</div>
        <button onClick={this.onCheckoutClick}>Checkout</button>
        {this.state.displayedForm}
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById("app"));
