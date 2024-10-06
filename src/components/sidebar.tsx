import Image from "next/image";
import Link from "next/link";
import {toTitleCase} from "@/utils/string";
import {usePathname} from "next/navigation";

const pages: Record<string, string> = {
    "dashboard": "/dashboard",
    "inbox": "/inbox",
    "quiz": "/quiz",
    "resources": "/resources",
    "lessons": "/lessons",
}

export default function Sidebar() {
    const activePage = usePathname()
    return (
        <section className={"h-full w-full rounded-3xl bg-white flex flex-col gap-10 p-5 py-8"}>
            <div>
                <Image
                    src="/earth.svg"
                    alt="Image"
                    className="mx-auto"
                    width={80}
                    height={80}
                />
            </div>
            <section className={"flex-grow my-7"}>
                <h2 className={"font-black"}>Overview</h2>
                <ul>
                    {Object.entries(pages).map(([key, value]) => (
                        <Link href={value} key={key}>
                            <li className={`${activePage === value ? 'bg-stone-300' : ''} rounded-full w-fit p-3 my-2 font-bold`}>
                                {toTitleCase(key)}
                            </li>
                        </Link>
                    ))}
                </ul>
            </section>
            <div>
                <h4>Settings</h4>
            </div>
        </section>
    )
}
