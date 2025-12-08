"use client";

import { UserContext } from "@RSV/lib/user-context";
import { useContext } from "react";

export default function Dashboard() {
  const user = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please log in to view your dashboard.</p>
      )}
    </div>
  );
}
