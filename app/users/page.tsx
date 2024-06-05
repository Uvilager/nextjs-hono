"use client";
import { useQuery } from "@tanstack/react-query";
import { hc } from "hono/client";
import { AppType } from "../api/[[...route]]/route";

export default function Posts() {
  const client = hc<AppType>("http://localhost:3000");

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await client.api.users.$get();
      return response.json();
    },
  });

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Users</h1>
      {data.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
