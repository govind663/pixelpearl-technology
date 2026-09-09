import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { COMPANY } from "./site";

type Theme = "light" | "dark" | "system";

interface ThemeCtx {
  theme: Theme;
  effective: "light" | "dark";
  setTheme: (t: Theme) => void;
}

const Ctx = createContext<ThemeCtx>({ theme: "system", effective: "light", setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const v = localStorage.getItem(COMPANY.themeKey);
      if (v === "light" || v === "dark" || v === "system") return v;
    } catch {}
    return "system";
  });
  const [effective, setEffective] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const compute = () => {
      const eff: "light" | "dark" =
        theme === "system" ? (mq.matches ? "dark" : "light") : theme;
      setEffective(eff);
      document.documentElement.classList.toggle("dark", eff === "dark");
    };
    compute();
    mq.addEventListener("change", compute);
    return () => mq.removeEventListener("change", compute);
  }, [theme]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem(COMPANY.themeKey, t);
    } catch {}
  };

  return <Ctx.Provider value={{ theme, effective, setTheme }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
