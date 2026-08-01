import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';

const NavBar = () => {
    return (
        <nav>
            <Space wrap>
                <Link to="/">
                <Button type="text" className="nav-button">
                    Home
                </Button>
                </Link>
                <Link to="/mailboxes">
                <Button type="text" className="nav-button">
                    Mailboxes
                </Button>
                </Link>
                <Link to="/new-mailbox">
                <Button type="text" className="nav-button">
                New Mailbox
                </Button>
                </Link>
            </Space>
        </nav>
    )
}

export default NavBar;