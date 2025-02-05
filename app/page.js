import Hello from "./components/Hello";

export default function Home() {
  console.log("What i am doing here? -- SERVER/CLIENT");
  return (
    <>
      <h1 className="text-xl">Welcome to the NEXT.JS</h1>
      <Hello />
    </>
  );
}
