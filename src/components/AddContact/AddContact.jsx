import { Component } from "react"
import { Button, StyledDiv } from "./AddContact.styled.js";


export class AddContact extends Component {
    state = {
    name: '',
    number: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    
      const contactData = {
          name: this.state.name,
          number: this.state.number
          
    };
      this.props.handleAddContact(contactData);
      this.formReset();
  };
    
    handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
    };
    
    formReset = () => {
        this.setState({
            name: '',
            number: ''
    });
    }
    
    render() {
        return(
                <StyledDiv>
                <form onSubmit={this.handleSubmit} >    
                    <label >
                        <h3>Name</h3>
                        <i className="bi bi-person"></i>
                        <input
                                id="name"
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                required
                            />
                    </label>
                    <label >
                        <h3>Phone</h3>
                        <i className="bi bi-telephone"></i>
                            <input
                                type="tel"
                                name="number"
                                value={this.state.number}
                                onChange={this.handleInputChange}
                                pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                required
                                />
                    </label>
                <Button type="submit" >Add contact</Button>
                </form>
                </StyledDiv>
                )
            }
    
}