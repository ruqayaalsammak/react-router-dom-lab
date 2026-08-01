import { Link, useParams } from 'react-router-dom';
import { Button, Card, Typography } from 'antd';

const { Paragraph } = Typography;

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
);

if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
}

return (
    <Card 
    title={`Mailbox ${selectedBox._id}`}
    extra={
        <Link to="/mailboxes">
            <Button>Back to Mailboxes</Button>
        </Link>
    }
    >
        <h3>Details</h3>
        <Paragraph>
            <strong>Boxholder:</strong> {selectedBox.boxOwner}
        </Paragraph>
        <Paragraph>
        <strong>Boxholder:</strong> {selectedBox.boxSize}
        </Paragraph>
    </Card>
)
}

export default MailboxDetails;