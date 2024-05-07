import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center">
            {/* Comment out below <h1> tag to see warning */}
            <h1 className="text-5xl m-4">Some Heading</h1>
            <div className="flex gap-x-10 justify-center">
                <div className="w-[25%]">
                    {/* Comment out below alt section to see warning */}
                    <Image src={"/pexels-roselene-de-koning.jpg"}
                           alt={""}
                           width={0}
                           height={0}
                           sizes="100vw"
                           className="h-auto w-auto"
                           priority
                    />
                </div>
                <div className="flex flex-col gap-y-5">
                    <button className="w-20 h-10 bg-white rounded text-black">
                        {/* Comment out below text to see warning */}
                        Button
                    </button>
                    <a href="#">
                        {/* Comment out below <p> tag to see warning */}
                        <p className="underline">I am a link!</p>
                    </a>
                </div>
                <ul>
                    <li>List Item 1</li>
                    <li>List Item 2</li>
                    {/* Uncomment below <p> tag to see warning */}
                    {/*<p>List Item 3</p>*/}
                </ul>
            </div>
        </main>
    );
}
