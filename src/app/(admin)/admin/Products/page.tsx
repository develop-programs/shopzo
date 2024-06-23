import { Button } from "@/components/ui/button";
import { Payment, columns } from "./data-table/column";
import { DataTable } from "./data-table/data-table";
import React from "react";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  const res = await fetch("https://fakestoreapi.com/products");
  const data = res.json();
  return data;
}

export default async function page() {
  const data = await getData();

  if (data.length === 0) {
    return (
      <div className="h-[calc(100vh-3.4rem)] w-full p-6">
        <div className="w-full h-full flex justify-center items-center bg-slate-300 border-2 border-black border-dashed">
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="text-4xl font-black">
              You dont have any products
            </span>
            <span className="text-sm font-semibold">
              You can start selling as soon as you add a product.
            </span>
            <Button>Add Product</Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-[calc(100vh-3.4rem)] w-full p-6">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
