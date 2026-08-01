import { useState } from "react";
import { useNavigate } from "react-router-dom";


const MailboxForm = (props) => {
    const navigate = useNavigate();

    const initialState = {
        boxOwner: "",
        boxSize: "Small",
    }

    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes')
    }

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Enter a Boxholder: </label>
                <input
                type="text"
                id="boxOwner"
                name="boxOwner"
                value={formData.boxOwner}
                onChange={handleChange}
                placeholder="Boxholder name"
                required
                />
                <br />
            <label htmlFor="boxSize">Select a Box Size: </label>
            <select
            id="boxSize"
            name="boxSize"
            value={formData.boxSize}
            onChange={handleChange}
            >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
            <br />
            <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default MailboxForm;