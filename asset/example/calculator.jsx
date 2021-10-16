class Button extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <div 
          id={this.props.id} 
          className="button" 
          onClick={this.props.handleClick}>
          {this.props.value}
        </div>
      );
    }
  }
  
  class Calculator extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        display: "0"
      };
      this.typeIn   = this.typeIn.bind(this);
      this.clear    = this.clear.bind(this);
      this.evaluate = this.evaluate.bind(this);
    }
    
    typeIn(char){
      let validated = this.state.display.toString();
      
      const unvalidated   = (validated == 0) ? char : validated.concat(char) || char.join("");
      const lastValidated = validated[validated.length - 1] || "";
  
      // allows first char to be negative 
      /\-/.test(unvalidated) && unvalidated.length === 1 ? validated = unvalidated : null;
  
      // checks for integer
      /\d/.test(char) ? validated = unvalidated : null;
  
      // operators hell
      switch(char){
        case "-":
          /[\d\*\+\/]/.test(lastValidated) ? validated = unvalidated : null;
          break;
        case "+":
        case "/":
        case "*":
          /\d/.test(lastValidated) ? validated = unvalidated : 
          /\-/.test(char) ? validated = unvalidated :               
          validated = validated.replace(/[\*\+\-\/]+/, "") + char;
          break;
      }
      
      // decimal nonsense
      /\./.test(char) 
      && !/\./.test(lastValidated) 
      && !/^\d*\.{1}\d+[\+\-\*\/]\d*\.{1}\d+$/.test(validated) 
      && !/\d\.\d\./.test(unvalidated) ? validated = unvalidated : null;
  
      // append character to display
      this.setState({
          display: validated
      })
    }
    
    clear(){
      this.setState({
        display: "0"
      });
    }
    
    evaluate(){
      this.setState({
        display: math.evaluate(this.state.display),
      })
    }
    
    render(){
      return(
        <div className="calculator">
          <div id="display"> {this.state.display} </div>
          <Button id="equals"   value="="  handleClick={this.evaluate}/>
          <Button id="zero"     value="0"  handleClick={()=>{this.typeIn("0")}}/>
          <Button id="one"      value="1"  handleClick={()=>{this.typeIn("1")}}/>
          <Button id="two"      value="2"  handleClick={()=>{this.typeIn("2")}}/>
          <Button id="three"    value="3"  handleClick={()=>{this.typeIn("3")}}/>
          <Button id="four"     value="4"  handleClick={()=>{this.typeIn("4")}}/>
          <Button id="five"     value="5"  handleClick={()=>{this.typeIn("5")}}/>
          <Button id="six"      value="6"  handleClick={()=>{this.typeIn("6")}}/>
          <Button id="seven"    value="7"  handleClick={()=>{this.typeIn("7")}}/>
          <Button id="eight"    value="8"  handleClick={()=>{this.typeIn("8")}}/>
          <Button id="nine"     value="9"  handleClick={()=>{this.typeIn("9")}}/>
          <Button id="add"      value="+"  handleClick={()=>{this.typeIn("+")}}/>
          <Button id="subtract" value="-"  handleClick={()=>{this.typeIn("-")}}/>
          <Button id="multiply" value="*"  handleClick={()=>{this.typeIn("*")}}/>
          <Button id="divide"   value="/"  handleClick={()=>{this.typeIn("/")}}/>
          <Button id="decimal"  value="."  handleClick={()=>{this.typeIn(".")}}/>
          <Button id="clear"    value="c"  handleClick={this.clear}/>
        </div>
      );
    }
  }
  
ReactDOM.render(
    <Calculator />,
    document.getElementById("root")
);