"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return (
        <Image
          src={row.getValue<string>("image")}
          alt={row.getValue<string>("title")}
          width={100}
          height={100}
          className="h-12 w-12 rounded-md object-cover"
          loading="lazy"
          decoding="async"
        />
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    id: "actions",
    header: () => {
      return <div className="text-center">Actions</div>;
    },
    cell: ({ row }) => {
      return (
        <div className="w-full grid place-content-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                >
                  <path
                    d="M5 8C5 8.55229 4.55228 9 4 9C3.44772 9 3 8.55229 3 8C3 7.44772 3.44772 7 4 7C4.55228 7 5 7.44772 5 8ZM9 8C9 8.55229 8.55229 9 8 9C7.44772 9 7 8.55229 7 8C7 7.44772 7.44772 7 8 7C8.55229 7 9 7.44772 9 8ZM12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55229 11.4477 9 12 9Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="max-w-32 p-1"
              sideOffset={5}
              side="bottom"
              align="end"
            >
              <Button variant="ghost" size="sm" className="w-full">
                Edit
              </Button>
              <Button variant="ghost" size="sm" className="w-full">
                Delete
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      );
    },
  },
];
