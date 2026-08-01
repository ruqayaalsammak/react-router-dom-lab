import { Link } from 'react-router-dom';
import { Empty, Typography } from 'antd';

const { Title } = Typography;

const MailboxList = (props) => {
    if (!props.mailboxes || props.mailboxes.length === 0) {
        return <Empty description="No mailboxes found" />;
    }
    return(
        <main>
            <Title level={2}>Mailbox List</Title>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {props.mailboxes.map((mailbox) => (
                    <Link 
                    key={mailbox._id}
                    to={`/mailboxes/${mailbox._id}`}
                    className='mail-box'
                    >
                        Mailbox {mailbox._id}
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default MailboxList;