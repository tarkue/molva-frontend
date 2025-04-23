import {
  FC,
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

const ATTRIBUTE_NAME = 'data-theme';
const LOCAL_STORAGE_KEY = 'theme';

type Theme = 'light' | 'dark';

const updateDataTheme = (theme: Theme) => {
  document.documentElement.setAttribute(ATTRIBUTE_NAME, theme);
  localStorage.setItem(LOCAL_STORAGE_KEY, theme);
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

export const ThemeProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const userSystemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).media;
    const settedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (settedTheme) {
      updateDataTheme(settedTheme as Theme);
      setTheme(settedTheme as Theme);
    } else {
      const prefersTheme = userSystemPrefersDark ? 'dark' : 'light';
      updateDataTheme(prefersTheme);
      setTheme(prefersTheme);
    }
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
