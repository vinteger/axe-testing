import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center">
            <h1 className="text-5xl m-4">Some Heading</h1>
            <div className="flex gap-x-10 justify-center">
                <div className="w-[25%]">
                    <Image src={"/pexels-matteo-roman.jpg"}
                           alt={""}
                           width={0}
                           height={0}
                           sizes="100vw"
                           className="h-auto w-auto"
                           priority
                    />
                </div>
                <div className="w-[25%]">
                    <Image src={"/pexels-roselene-de-koning.jpg"}
                           alt={""}
                           width={0}
                           height={0}
                           sizes="100vw"
                           className="h-auto w-auto"
                           priority
                    />
                </div>
            </div>
        </main>
    );
}
