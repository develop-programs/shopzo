import Breadcrumbs from "@/components/admin-custom/Breadcrumbs";
import Navigation from "@/components/admin-custom/Navigation";
import { ThemeProvider } from "@/providers/theme-provider";
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
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="h-screen grid grid-flow-row grid-cols-12 overflow-hidden">
        <div className="hidden xl:block col-span-2">
          <Navigation />
        </div>
        <div className="col-span-12 xl:col-span-10 overflow-y-auto">
          <div className="w-full px-4 py-4">
            <Breadcrumbs />
          </div>
          {children}
        </div>
      </main>
    </ThemeProvider>
  );
}
