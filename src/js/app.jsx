import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here

  constructor(props){
    super(props);

      this.state = {
        balance: 0,
        rate: 0,
        term: 15,
        output: 0,
      }

      this.updateValues = this.updateValues.bind(this);
      this.calculate = this.calculate.bind(this);

    }

  updateValues(event){
    this.setState({
      [event.target.name]: parseFloat(event.target.value),
    })
  }

  calculate(){
    let balance = this.state.balance;
    let rate = this.state.rate *.01/12;
    let term = this.state.term;
    let number = term * 12;
    let numerator = Math.pow((1+rate),number) * rate;
    let denominator  = Math.pow ((1 + rate), number) -1;

      // console.log(balance);

    this.setState({
      output: (balance * (numerator/denominator)).toFixed(2)
    }); 
  }

  render() {
    return (
      
  <div className ='container'>
  {/* This is for the Title or Heading */}
       <div className = 'well text-center'>
       <h3>Mortgage Calculator</h3>
       </div>
       <form className='form-horizontal' action='/action_page.php'>
        {/* For Balance */}
        <div className='form-group'>
        <label className='col-sm-2 control-label' htmlFor='balance'>Loan Balance </label>
        <div className='col-sm-10'>
        <input className='form-control' type='number' name='balance'  placeholder='0'
        value={this.state.balance} onChange={this.updateValues}/>
        </div>
        </div>
        {/* For Interest Rate */}
        <div className='form-group'>
        <label className='col-sm-2 control-label' htmlFor='rate'>Interest Rate (%) </label>
        <div className='col-sm-10'>
        <input className='form-control' type='number' step='0.01' name='rate'  placeholder='0'
        value={this.state.rate} onChange={this.updateValues}/>
        </div>
        </div>
        {/* For Loan Term */}
        <div className='form-group'>
        <label className='col-sm-2 control-label' htmlFor='term'>Loan Term (years)</label>
        <div className='col-sm-10'>
        <select className='form-control' name='term' 
        value={this.state.term} onChange={this.updateValues}>
          <option id='year15'>15</option>
          <option id='year30'>30</option>
        </select>
        </div>
        </div>
        {/* For Calculate Button */}
        <div className='form-group'>
        <div className='col-sm-offset-2 col-sm-10'>
        <button name='submit' type='button' className='btn btn-primary' 
        onClick={this.calculate}> Calculate </button>
        </div>
        </div>
        {/* For Out put of the payment */}
        <div className='form-group'>
        <label id='output' name='output' >
         $$ {this.state.output} is your payment.
         
         </label>
        </div>

        </form>
    </div>
      
      
  
    );

  }
}
