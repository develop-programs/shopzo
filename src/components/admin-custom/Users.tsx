import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";

const UsersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      street: "123 Main Street",
      city: "New York",
      zipcode: "10001",
    },
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    address: {
      street: "456 Elm Street",
      city: "Los Angeles",
      zipcode: "90001",
    },
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    address: {
      street: "789 Oak Avenue",
      city: "Chicago",
      zipcode: "60601",
    },
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    address: {
      street: "101 Pine Street",
      city: "Houston",
      zipcode: "77002",
    },
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Daniel Brown",
    email: "daniel.brown@example.com",
    address: {
      street: "222 Cedar Lane",
      city: "Phoenix",
      zipcode: "85001",
    },
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    address: {
      street: "333 Maple Drive",
      city: "Philadelphia",
      zipcode: "19101",
    },
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "Matthew Lee",
    email: "matthew.lee@example.com",
    address: {
      street: "444 Walnut Road",
      city: "San Antonio",
      zipcode: "78201",
    },
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Jessica Martinez",
    email: "jessica.martinez@example.com",
    address: {
      street: "555 Birch Street",
      city: "San Diego",
      zipcode: "92101",
    },
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    name: "David Garcia",
    email: "david.garcia@example.com",
    address: {
      street: "666 Pine Lane",
      city: "Dallas",
      zipcode: "75201",
    },
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    name: "Amanda Lopez",
    email: "amanda.lopez@example.com",
    address: {
      street: "777 Oak Court",
      city: "San Jose",
      zipcode: "95101",
    },
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

export default function Users() {
  return (
    <Table>
      <TableCaption>A list of your recent Orders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {UsersData.slice(0, 3).map((invoice, index: number) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              <Avatar>
                <AvatarImage src={invoice.image} />
              </Avatar>
            </TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                    >
                      <path
                        d="M1.97408 6.65857C1.88658 6.92025 1.6036 7.06162 1.34178 6.97435C1.07981 6.88702 0.938226 6.60386 1.02555 6.34189C1.01644 6.37235 1.02592 6.34078 1.02592 6.34078C1.03145 6.32438 1.03735 6.30811 1.04339 6.29189C1.05368 6.26424 1.06847 6.22604 1.08816 6.17879C1.12749 6.08438 1.18659 5.95334 1.26864 5.79787C1.4323 5.48778 1.69001 5.07538 2.06881 4.66214C2.83412 3.82726 4.08654 3 5.99989 3C7.91324 3 9.16566 3.82726 9.93097 4.66214C10.3098 5.07538 10.5675 5.48778 10.7311 5.79787C10.8132 5.95334 10.8723 6.08438 10.9116 6.17879C10.9313 6.22604 10.9461 6.26424 10.9564 6.29189C10.9595 6.30015 10.9698 6.35247 10.9797 6.40273C10.9887 6.44843 10.9974 6.49242 11 6.5C11 6.5 11.0835 6.83252 10.658 6.97435C10.3966 7.06149 10.1141 6.92068 10.0261 6.65976L10.0257 6.65857L10.0253 6.65748L10.0192 6.64073C10.0132 6.62444 10.003 6.59819 9.98855 6.56341C9.95953 6.49375 9.91315 6.39042 9.84676 6.26463C9.71354 6.01222 9.50251 5.67462 9.19381 5.33786C8.58412 4.67274 7.58654 4 5.99989 4C4.41324 4 3.41566 4.67274 2.80597 5.33786C2.49727 5.67462 2.28624 6.01222 2.15302 6.26463C2.08664 6.39042 2.04026 6.49375 2.01123 6.56341C1.99674 6.59819 1.98663 6.62444 1.98057 6.64073L1.97408 6.65857ZM6 5C4.89543 5 4 5.89543 4 7C4 8.10457 4.89543 9 6 9C7.10457 9 8 8.10457 8 7C8 5.89543 7.10457 5 6 5ZM5 7C5 6.44772 5.44772 6 6 6C6.55228 6 7 6.44772 7 7C7 7.55228 6.55228 8 6 8C5.44772 8 5 7.55228 5 7Z"
                        fill="#242424"
                      />
                    </svg>
                  </Button>
                </DialogTrigger>
                <DialogContent></DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
