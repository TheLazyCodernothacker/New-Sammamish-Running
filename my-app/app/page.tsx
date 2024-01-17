import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="flex p-2 md:p-4 items-center gap-2 border-b-2">
        <Image
          src="https://assets.scorebooklive.com/uploads/production/school/28882/image/Sammamish__WA__Red_Hawks_Logo.png"
          alt="Picture of the author"
          width={60}
          height={40}
        />
        <Link href="https://www.sammamishrunning.com/">
          <p className="text-xl">Sammamish Running</p>
        </Link>
      </nav>
    </>
  );
}
