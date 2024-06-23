import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Charts from "@/components/admin-custom/Charts";

export default function DataOnCharts() {
  return (
    <Tabs defaultValue="monthly">
      <TabsList>
        <TabsTrigger
          value="monthly"
          className="data-[state=active]:bg-gradient-to-r from-sky-500 to-blue-500 data-[state=active]:text-white"
        >
          Monthly
        </TabsTrigger>
        <TabsTrigger
          value="yearly"
          className="data-[state=active]:bg-gradient-to-r from-sky-500 to-blue-500 data-[state=active]:text-white"
        >
          Yearly
        </TabsTrigger>
      </TabsList>
      <TabsContent value="monthly" className="h-[35vh]">
        <Charts />
      </TabsContent>
      <TabsContent value="yearly" className="h-[35vh]">
        <Charts />
      </TabsContent>
    </Tabs>
  );
}
