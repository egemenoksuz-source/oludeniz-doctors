import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex h-14 w-[210px] items-center overflow-hidden rounded-2xl bg-white/95 px-3">
        <Image
          src="/images/logo.png"
          alt="Oludeniz Doctor"
          width={220}
          height={70}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </Link>
  );
}