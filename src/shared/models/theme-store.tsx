import {
  FC,
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

type Theme = 'light' | 'dark';

const updateDataTheme = (theme: Theme) =>
  document.documentElement.setAttribute('data-theme', theme);

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

export const ThemeProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const userSystemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const prefersTheme = userSystemPrefersDark ? 'dark' : 'light';
    updateDataTheme(prefersTheme);
    setTheme(prefersTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    updateDataTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
