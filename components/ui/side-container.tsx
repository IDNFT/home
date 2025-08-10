"use client";

import Sidebar from "@/components/ui/sidebar"; 
import { useState } from "react";

const SidebarContainer = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
  );
};

export default SidebarContainer;
