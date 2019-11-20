
class App extends React.Component {
  constructor(props) {
    super(props)

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
    }

    this.onTextInputChange = this.onTextInputChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);

    this.F1 =
      <div>
        <form name="F1" >
          <input type="text" name="name" onChange={this.onTextInputChange}>Name</input>
          <input type="text" name="email" onChange={this.onTextInputChange}>Email</input>
          <input type="text" name="password" onChange={this.onTextInputChange}>Password</input>
          <button type="submit" onClick={this.onSubmitClick}>Submit</button>
        </form>
      </div>

    this.F2 =
      <div>
        <form name="F2" onSubmit={this.onSubmitClick}>
          <input type="text" name="addressLine1" onChange={this.onTextInputChange}>Address Line 1</input>
          <input type="text" name="addressLine2" onChange={this.onTextInputChange}>Address Line 2</input>
          <input type="text" name="city" onChange={this.onTextInputChange}>City</input>
          <input type="text" name="state" onChange={this.onTextInputChange}>State</input>
          <input type="text" name="zipCode" onChange={this.onTextInputChange}>Zip Code</input>
          <input type="text" name="phoneNum" onChange={this.onTextInputChange}>Phone Number</input>
          <button type="submit" onClick={this.onSubmitClick}>Submit</button>
        </form>
      </div>

    this.F3 =
      <div>
        <form name="F3">
          <input type="text" name="creditCardNum" onChange={this.onTextInputChange}>Credit Card Number</input>
          <input type="text" name="expiryDate" onChange={this.onTextInputChange}>Expiry Date</input>
          <input type="text" name="CVV" onChange={this.onTextInputChange}>CVV</input>
          <input type="text" name="billingZip" onChange={this.onTextInputChange}>Billing Zip Code</input>
          <button type="submit" onClick={this.onSubmitClick}>Submit</button>
        </form>
      </div>

  }

  onTextInputChange(event) {
    event.preventDefault();
    let key = event.target.name;
    this.setState((state) => {
      state[key] = event.target.value;
      return state;
    })
    console.log(this.state)
  }

  onSubmitClick(event) {
    event.preventDefault();
    console.log(this.state)
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/data",
      data: this.state
    })

  }


  render() {

    let displayedPage = this.F1;

    return (
      <div>
        <div>Here's my Mini App!</div>
        <button>Checkout</button>
        {displayedPage}
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById("app"));
