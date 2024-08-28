import "./globals.css";
import Sidebar from "@/common/components/sidebar/sidebar.component";

export default function PortalLayout({ children }) {
  return (
        <div className="flex bg-[#070B14]">
          <aside className="xl:w-[19%] lg:w-[22%] md:w-[23%]">
            <Sidebar />
          </aside>
          <main className="xl:w-[81%] lg:w-[77%] md:w-[77%] w-full mt-7 md:px-7 px-5">{children}</main>
        </div>
  );
}
