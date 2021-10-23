
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';
import styles from './styles.module.scss';

export function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);
    
  return (
    <button className={`${styles.themeSwitch} ${theme === "light" ? styles.light : ''}`} 
            onClick={toggleTheme}>{theme === "light" ? "dark" : "light"}</button>
  );
}