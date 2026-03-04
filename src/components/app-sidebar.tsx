import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ArrowLeft, Home, Settings } from "lucide-react";
import logo from "@/assets/images/pokeball-logo.png";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      {/* HEADER */}
      <SidebarHeader className="flex items-center justify-between p-4 border-b">
        <img src={logo} alt="pokeball" width={42} height={42} />
        <span className="font-semibold group-data-[collapsible=icon]:hidden">
          Pokedex
        </span>
        <SidebarTrigger />
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Home className="h-5 w-5" />
              <span className="group-data-[collapsible=icon]:hidden">Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings className="h-5 w-5" />
              <span className="group-data-[collapsible=icon]:hidden">
                Settings
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
