"use client";
import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Box, Button } from "@radix-ui/themes";
import sc from "./ThemeSwitcher.module.scss";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    const updateTheme = () => {
      const currentTheme = htmlElement?.classList.contains("dark")
        ? "dark"
        : "light";
      setTheme(currentTheme);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    if (htmlElement) {
      observer.observe(htmlElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.querySelector("html");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (htmlElement) {
      htmlElement.classList.remove("light", "dark");
      htmlElement.classList.add(newTheme);
    }
  };

  return (
    <Button
      className={`${sc.switcher}  ${
        theme === "light" ? sc.lightTheme : sc.darkTheme
      }`}
      variant="solid"
      onClick={toggleTheme}
    >
      <Box className={`${sc.switcherCircle}`}></Box>
      <MoonIcon className={`${sc.moon} ${sc.icon}`} />
      <SunIcon className={`${sc.sun} ${sc.icon}`} />
    </Button>
  );
};

export default ThemeSwitcher;
