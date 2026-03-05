import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
export function ThemeSwitch() {
  const { themeState, setTheme } = useTheme();
  const isDark = themeState === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Moon
          className={`h-4 w-4 ${isDark ? "text-foreground" : "text-foreground/40"}`}
        />
      ) : (
        <Sun
          className={`h-4 w-4 ${!isDark ? "text-foreground" : "text-foreground/40"}`}
        />
      )}
    </Button>
  );
}
