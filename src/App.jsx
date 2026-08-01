import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  
  const addBox = (newBoxData) => {
    const newBox = {
      ...newBoxData,
      _id: mailboxes.length + 1,
    };
    setMailboxes([...mailboxes, newBox]);
  };
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
      path="/mailboxes"
      element={<MailboxList mailboxes={mailboxes} />}
      />
      <Route
      path="/new-mailbox"
      element={<MailboxForm addBox={addBox} />}
      />
      <Route
      path="/mailboxes/:mailboxId"
      element={<MailboxDetails addBox={addBox} />}
      />
    </Routes>
    </>
  )
}

export default App;