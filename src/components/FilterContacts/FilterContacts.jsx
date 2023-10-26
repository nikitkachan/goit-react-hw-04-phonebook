import { Input } from "./FilterContacts.styled";

export const FilterContacts = ({ addToFilter,  }) => {
    
  const handleInputChange = event => {
    
    const value = event.target.value;
    addToFilter(value);
    };

    return (
            <div>
                <h3>Find contacts by name</h3>
                <Input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"

                />
            </div>
        )
    
}