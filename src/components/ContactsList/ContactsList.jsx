import { Button, StyledUl } from "./ContactsList.styled"


export const ContactsList = ({ filteredContacts, handleDeleteContact }) => {

    return (
        <div>
            <StyledUl>
                {filteredContacts.length>0 ? filteredContacts.map(contact =>
                    <li key={contact.id}>
                        <i className="bi bi-person-lines-fill"></i>
                        {contact.name}: {contact.number}
                        <Button type="button" onClick={() => handleDeleteContact(contact.id)}>Delete</Button>
                    </li>) : "No contacts"}
            </StyledUl>
        </div>
        
    )
}