import { useState } from "react"
import { Button, StyledDiv } from "./AddContact.styled.js";


export const AddContact = ({handleAddContact}) => {
    
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    
      const contactData = {
          name: name,
          number: number
          
    };
      handleAddContact(contactData);
      formReset();
  };
    
    const handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
      
      switch (name) {
        case 'name':
          setName(value)
          break;
        case 'number':
          setNumber(value)
          break
        default:
          break;
      }
    };
    
    const formReset = () => {
      setName('');
      setNumber('');
    };
    
    
    
        return(
                <StyledDiv>
                <form onSubmit={handleSubmit} >    
                    <label >
                        <h3>Name</h3>
                        <i className="bi bi-person"></i>
                        <input
                                id="name"
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
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
                                value={number}
                                onChange={handleInputChange}
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