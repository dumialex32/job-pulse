import Navbar from "@/components/dashboard/DashboardNav";
import Sidebar from "@/components/dashboard/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid lg:grid-cols-5">
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <Sidebar />
      </div>

      <div className="lg:col-span-4">
        <Navbar />

        <main className="py-16 px-4 sm:px-8 lg:px-16">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
