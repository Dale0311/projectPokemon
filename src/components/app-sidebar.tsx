import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ArrowLeft, Home, Settings } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/ThemeSwitch";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      {/* HEADER */}
      <SidebarHeader>
        <div className="w-4/5 mx-auto flex items-center justify-between group-data-[state=collapsed]:flex-col group-data-[state=collapsed]:space-y-3 group-data-[state=collapsed]:mt-3">
          <Link to="/">
            <div className="flex items-center space-x-2">
              <img
                src="pokeball-logo.png"
                alt="pokeball"
                width={42}
                height={42}
              />
              <span className="font-semibold group-data-[collapsible=icon]:hidden text-lg">
                PokéDex
              </span>
            </div>
          </Link>
          <Button variant={"ghost"} size={"icon"} onClick={toggleSidebar}>
            <ArrowLeft className="transition-transform group-data-[state=collapsed]:rotate-180" />
          </Button>
        </div>
      </SidebarHeader>
      <hr className="my-2" />
      {/* CONTENT */}
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="w-4/5 mx-auto flex items-center"
              asChild
            >
              <Link to={"/"}>
                <Home />
                <span className="group-data-[collapsible=icon]:hidden">
                  Home
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              className="w-4/5 mx-auto flex items-center"
              asChild
            >
              <Link to={"/settings"}>
                <Settings />
                <span className="group-data-[collapsible=icon]:hidden">
                  Settings
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <hr className="my-2" />
          <SidebarMenuItem>
            <div className="w-4/5 mx-auto flex items-center justify-between group-data-[collapsible=icon]:justify-center ">
              <span className="text-sm group-data-[collapsible=icon]:hidden">
                Appearance
              </span>
              <ThemeSwitch />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
