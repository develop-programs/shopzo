"use client";
import React from "react";

export default function DashboardCards({ data }: { data: any }) {
  function CurrencyFormat(
    data: number,
    format: string,
    maximumFractionDigits?: number,
    currenyType?: string
  ) {
    const formattedValue = Intl.NumberFormat(format, {
      style: "currency",
      currency: currenyType,
      maximumFractionDigits: maximumFractionDigits,
    }).format(data);
    return formattedValue;
  }

  return (
    <div
      className="w-full border border-slate-300 rounded-xl p-3 space-y-4"
      style={{
        boxShadow: "-1px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="flex justify-between">
        <span className="font-semibold">{data.title}</span>
        {data.icon}
      </div>
      <div>
        <span className="text-xl font-bold">
          {data.title == "Income"
            ? CurrencyFormat(data.value, "en-IN", 2, "INR")
            : Intl.NumberFormat().format(data.value)}
        </span>
      </div>
    </div>
  );
}
