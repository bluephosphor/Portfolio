### Technologies used: <span style="color:cyan">HTML</span> | <span style="color:pink">CSS</span> | <span style="color:yellow">JavaScript</span> (React)

<iframe src="https://bluephosphor.github.io/portfolio/asset/example/calculator.html" height="430" title="calculator"></iframe>

<a class="source-link" target="_blank" href="https://github.com/bluephosphor/portfolio/blob/main/asset/example/calculator.jsx">[Source]</a>

This is one of my projects for FreeCodeCamp's Front End Development Libraries certification. Here we were tasked with creating a JavaScript calculator. I decided to go with React for this one, as when thinking of how to build this my mind immediately centered around this reuseable class of a 'button', so it seemed like a great fit.

```jsx
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
```

<div class="img-footer">This could've been a functional component now that I'm looking at it again.</div>

This ended up being a tremendous exercise in subverting expecations. Initially I thought the actual math evaluation was going to be the tricky part here. Boy was I wrong.

Let me introduce you to my numbers input function.

```jsx
typeIn(char){
	let validated = this.state.display.toString();
	const unvalidated = (validated == 0) ? char : validated.concat(char) || char.join("");
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
```

<div class="img-footer">Before you crucify me for the many crimes being committed here just remember that I am a beginner.</div>

So I structured this out as this odd ternary chain because at the time it made the most sense in my head as I tried to break this issue down into steps. 

The problem we are trying to solve here is the way we input text into a calculator. We not only want to make sure that we end up with an actual formula, but we want to actively make sure of this WHILE we are typing in inputs. So every time we type something in we have to go through these steps to make sure we're building a workable formula.

I definitely ended up with an interesting chain of logic but gosh darn it it worked.

So that was typing stuff in... What about that math evaluation I was stressing about in the beginning?

```jsx
evaluate(){
	this.setState({
		display: math.evaluate(this.state.display),
	})
}
```

<div class="img-footer">Math.js library to the rescue.</div>

Funny how that works.