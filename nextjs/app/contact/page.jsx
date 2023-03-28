// "use client";
// import { useRouter } from "next/navigation";
// to use useRouter, use client must be added on top.
// because useRouter is window.Object, not a server router.
// Next creates server routes by default and useRouter is client side

import Link from "next/link";

export default function Contact() {
  //   const router = useRouter();
  return (
    <>
      <h1>Contact PAGE - this is the children</h1>
      <Link href="/">Home</Link>
      <Link href={`/blog/aaa`}>Post</Link>
      {/* <button onClick={() => router.push("/")}>Home</button> */}
    </>
  );
}
