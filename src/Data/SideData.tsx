interface SidebarItem {
  to: string;
  label: string;
  icon: string;
}

interface SidebarProps {
  logoSrc: string;
  items: SidebarItem[];
}

export const sidebarData: SidebarProps = {
  logoSrc: "/assets/img/Logo.png",
  items: [
    { to: "/dashboard/items", label: "Products", icon: "/assets/img/Vector.png" },
    { to: "#", label: "Favorites", icon: "/assets/img/bookmark 1.png" },
    { to: "#", label: "Orders", icon: "/assets/img/bookmark 1.png" },
  ],
};
