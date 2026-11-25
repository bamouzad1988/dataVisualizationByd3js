export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  createdAt: string;
};

export type UsersResponse = {
  rows: User[];
  rowCount: number;
};
export const usersData: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    createdAt: "2025-01-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "editor",
    createdAt: "2025-02-20T08:15:00Z",
  },
  {
    id: "3",
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    role: "viewer",
    createdAt: "2025-03-05T14:45:00Z",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "editor",
    createdAt: "2025-03-18T09:20:00Z",
  },
  {
    id: "5",
    name: "Robert Wilson",
    email: "robert.wilson@example.com",
    role: "admin",
    createdAt: "2025-04-10T16:00:00Z",
  },
  {
    id: "6",
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    role: "viewer",
    createdAt: "2025-04-22T11:10:00Z",
  },
  {
    id: "7",
    name: "David Miller",
    email: "david.miller@example.com",
    role: "editor",
    createdAt: "2025-05-12T13:25:00Z",
  },
  {
    id: "8",
    name: "Sophia Garcia",
    email: "sophia.garcia@example.com",
    role: "viewer",
    createdAt: "2025-06-01T07:50:00Z",
  },
  {
    id: "9",
    name: "James Martinez",
    email: "james.martinez@example.com",
    role: "admin",
    createdAt: "2025-06-14T18:35:00Z",
  },
  {
    id: "10",
    name: "Isabella Anderson",
    email: "isabella.anderson@example.com",
    role: "editor",
    createdAt: "2025-07-03T12:00:00Z",
  },
  {
    id: "11",
    name: "William Taylor",
    email: "william.taylor@example.com",
    role: "viewer",
    createdAt: "2025-07-19T15:40:00Z",
  },
  {
    id: "12",
    name: "Mia Thomas",
    email: "mia.thomas@example.com",
    role: "editor",
    createdAt: "2025-08-08T09:05:00Z",
  },
  {
    id: "13",
    name: "Benjamin Lee",
    email: "benjamin.lee@example.com",
    role: "admin",
    createdAt: "2025-09-11T10:55:00Z",
  },
  {
    id: "14",
    name: "Charlotte White",
    email: "charlotte.white@example.com",
    role: "viewer",
    createdAt: "2025-10-02T17:15:00Z",
  },
  {
    id: "15",
    name: "Daniel Harris",
    email: "daniel.harris@example.com",
    role: "editor",
    createdAt: "2025-11-20T08:30:00Z",
  },
];

export const userResponse = {
  rows: [...usersData],
  rowCount: 15,
};
