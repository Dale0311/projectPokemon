import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full">
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
