import Breadcrumbs from "@/components/admin-custom/Breadcrumbs";
import Navigation from "@/components/admin-custom/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Page",
  description: "Page for admin users for maitaining application",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen grid grid-flow-row grid-cols-12">
      <div className="col-span-2">
        <Navigation />
      </div>
      <div className="col-span-10">
        <div className="w-full px-4 py-4">
          <Breadcrumbs />
        </div>
        {children}
      </div>
    </main>
  );
}
