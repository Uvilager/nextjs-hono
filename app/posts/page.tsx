"use client";
import { useQuery } from "@tanstack/react-query";
import { hc } from "hono/client";
import { AppType } from "../api/[[...route]]/route";

export default function Posts() {
  const client = hc<AppType>("http://localhost:3000");

  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await client.api.posts.$get();
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
      <h1>Posts</h1>
      {data.message && <p className="text-red-500">{data.message}</p>}
    </div>
  );
}
