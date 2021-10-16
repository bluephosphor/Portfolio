const placeholder = `## Hello!

*Try writing some Markdown here on the left side.*`

class Main extends React.Component{
  constructor(props){
    super(props);
    this.update = this.update.bind(this);
    this.state = {text: placeholder};
  }
  update = (elem) => {
    this.setState({
      text: elem.target.value
    })
  }
  
  get_md = () =>{
    return {__html: marked(this.state.text,{breaks:true})};
  }
  render(){
    return (
      <div id="main">
        <textarea 
          id="editor"
          onChange={this.update}
          defaultValue={this.state.text}
        />
        <div 
          id="preview"
          dangerouslySetInnerHTML={this.get_md()}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);