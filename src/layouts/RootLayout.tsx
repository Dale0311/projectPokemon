import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="flex w-full md:w-3/4 lg:w-1/2 mx-auto transition-colors duration-300 ease-in-out">
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
