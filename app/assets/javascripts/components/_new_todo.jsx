class NewTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Test todo',
			details: 'Detail',
			when: 'Tomorrow at 5pm'
		};

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		var name = event.target.name;
		var value = event.target.value;
    this.setState({
    	[name]: value
    })
  }

	handleSubmit(event) {
    event.preventDefault();
    var todo = {title: this.state.title, details: this.state.details, when: this.state.when };
    console.log(todo);
    $.ajax({
    	url: "api/v1/todos",
    	type: "POST",
    	data: { todo },
    	success: response => {
    		this.props.handleSubmit(response);
    	}
    });
  }

	render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name ="title" placeholder='What do you want to schedule?' 
        	value={this.state.title} 
        	onChange={this.handleChange} />
        <input type="text" name ="details" placeholder='Enter details'value={this.state.details} 
        	onChange={this.handleChange}/>
        <input type="text" name ="when" placeholder='When?' 
        	value={this.state.when} 
        	onChange={this.handleChange}/>
        <button>Submit</button>
      </form>
     )
  }
}