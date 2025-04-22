import { Outlet } from "react-router-dom";
import DivisionSidebar from "../sidebars/DivisionSidebar";

export default function RootLayout() {
  return (
    <div className="flex h-screen text-sm">
      {/* left nav */}
      <DivisionSidebar />

      {/* main panel */}
      <main className="flex-1 overflow-auto bg-white">
        <Outlet />
      </main>
    </div>
  );
}
