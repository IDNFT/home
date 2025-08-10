import SidebarContainer from "@/components/ui/side-container";
import { Toaster } from "react-hot-toast";
import "@/app/globals.css";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (

      <div className="antialiased min-h-screen flex">
        <SidebarContainer />

        <div className="flex-1 pl-20 p-6 bg-gray-100 min-h-screen">
          <Toaster />
          {children}
        </div>
      </div>
  );
};

export default DashboardLayout;
