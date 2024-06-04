import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <Link href="/posts">
        <p className="text-blue-500 hover:text-blue-700 m-4">Go to Posts</p>
      </Link>
    </div>
  );
}
