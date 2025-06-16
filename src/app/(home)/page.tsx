import Image from "next/image";

export default function Home() {
  return (
    <div className="font-bold">
      <Image src={"/logo.svg"} height={50} width={50} alt="Logo" />
      <p className="text-xl font-semibold tracking-tight">NewTube2</p>
    </div>
  );
}
