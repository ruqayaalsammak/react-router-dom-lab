import { Card, Typography } from 'antd';
const { Paragraph, Title } = Typography;

const Home = () => {
    return (
        <Card>
            <Title level={1}>Post Office</Title>
            <Paragraph>
                Welcome to the Post Office! use the navigation bar above to view mailboxes or create a new one.
            </Paragraph>
        </Card>
    )
}

export default Home;