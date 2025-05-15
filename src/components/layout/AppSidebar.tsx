
import { Home, Image, MessageSquare, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const AppSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: Home,
    },
    {
      title: "Website Builder",
      path: "/website-builder",
      icon: MessageSquare,
    },
    {
      title: "Image Generator",
      path: "/image-generator",
      icon: Image,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl gradient-text">Autowebsite.org</span>
          </Link>
          <div className="md:hidden">
            <SidebarTrigger>
              <Menu className="h-6 w-6" />
            </SidebarTrigger>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={location.pathname === item.path ? "bg-accent" : ""}>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="text-sm text-autowebsite-text-secondary">
          &copy; {new Date().getFullYear()} Autowebsite.org
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
