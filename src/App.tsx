import { useContext } from 'react';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { ThemeSwitch } from './components/ThemeSwitch';
import { AuthContext } from './contexts/auth';
import { ThemeContext } from './contexts/theme';
import styles from './styles/App.module.scss';

export function App() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''} ${theme === "light" ? styles.light : ''}`}>
      <ThemeSwitch/>
      <MessageList />
      { !!user ? <SendMessageForm /> : <LoginBox/>}
    </main>
  )
}
