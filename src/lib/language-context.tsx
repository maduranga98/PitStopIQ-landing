"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FAQ_DATA, type Faq, type Lang, TR, type Translation } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
  faqs: Faq[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "pitstopiq-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore the saved preference once on the client. This must run in an effect
  // (not lazy init) so server and first client render agree on "en" and avoid a
  // hydration mismatch; the one-time sync afterwards is intentional.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved && saved in TR) setLangState(saved);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: TR[lang], faqs: FAQ_DATA[lang] }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      <div data-lang={lang}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
