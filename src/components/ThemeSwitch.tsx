import { Sun, Moon } from "lucide-react";
import { Switch } from "./ui/switch";
import { useTheme } from "../hooks/useTheme";

export function ThemeSwitch() {
  const { themeState, setTheme } = useTheme();
  const isDark = themeState === "dark";

  return (
    <div className="flex items-center gap-3 rounded-full border border-border bg-background px-3 py-1.5 shadow-sm fixed">
      <Sun className="h-4 w-4 text-foreground/70" />

      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />

      <Moon className="h-4 w-4 text-foreground/70" />
    </div>
  );
}
