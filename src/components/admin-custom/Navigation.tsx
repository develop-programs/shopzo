import React from "react";
import { Button } from "@/components/ui/button";
import { AdminNavigationData } from "@/json/Admin-Navigation";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full h-full flex border-r-2 border-slate-400">
      <div className="w-full mt-44 space-y-4 px-2">
        {AdminNavigationData.map((item: any, index: number) => (
          <Link href={item.url} key={index} passHref legacyBehavior>
            <Button
              variant="outline"
              className="w-full flex justify-start gap-4 py-6 hover:bg-slate-300"
            >
              {item.icon}
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
