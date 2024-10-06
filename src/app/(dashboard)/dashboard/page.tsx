import {Filter, Search} from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {toTitleCase} from "@/utils/string";

const scoreData = [
    {
        title: "Overall class score",
        value: 68,
        icon: "",
        avg: 72
    },
    {
        title: "Work Assigned",
        value: 55,
        icon: "",
        avg: 64
    }
]

const students = [
    {
        name: "Samuel Onifadel",
        progress: 35,
        total: 56,
        avatar: ""
    }
]

function Dashboard() {
    return (
        <main className={"w-full h-full p-2 px-8"}>
            <div className={"border border-gray-700 mb-4 flex bg-white rounded-full w-full p-2"}>
                <Search/>
                <input placeholder={"Search here..."} className={"flex-grow mx-2"}/>
                <Filter/>
            </div>

            <section className={"flex my-8 justify-between"}>
                <div className={"bg-white flex rounded-2xl gap-10 p-5"}>
                    {
                        scoreData.map((datum, index) => {
                            const {title, value, icon, avg} = datum
                            return (
                                <div key={index} className={"flex flex-col justify-center items-center gap-2"}>
                                    <h4 className={"text-center"}>{title}</h4>
                                    <h2 className={"font-bold text-4xl"}>{value}%</h2>
                                    <Image
                                        src="/earth.svg"
                                        alt="Image"
                                        className="mx-auto"
                                        width={110}
                                        height={80}
                                    />
                                    <p>Grade average</p>
                                    <h2 className={"font-semibold"}>{avg}%</h2>
                                </div>
                            )
                        })
                    }
                </div>
                <div
                    className={"bg-yellow-400 flex rounded-3xl flex-col items-center text-center p-5 px-8 justify-between"}>
                    <Image
                        src="/earth.svg"
                        alt="Image"
                        className="mx-auto"
                        width={120}
                        height={80}
                    />
                    <h2 className={"font-bold text-2xl"}>Select your grade</h2>
                    <Button variant={"secondary"}>Click here</Button>
                </div>
            </section>

            <section className={"mt-10"}>
                <h2 className={"p-2 px-16 my-5 bg-slate-500 w-fit rounded-3xl"}>Students Leaderboard</h2>

                <section className={"bg-white p-2 py-5 rounded-3xl"}>
                    {
                        students.map((student, index) => {
                            const {name, avatar, progress, total} = student
                            const avg = (progress / total) * 100
                            return (
                                <div className={"my-1 p-2 px-5 flex items-center justify-around"}>
                                    <Image
                                        src="/earth.svg"
                                        alt="Image"
                                        className=""
                                        width={30}
                                        height={30}
                                    />
                                    <h3>{name.split(' ').map(str => toTitleCase(str)).join(' ')}</h3>
                                    <p className={"font-bold text-xl"}>{progress}/{total}</p>
                                    <div></div>
                                    <div
                                        className={`w-44 h-8 bg-white relative rounded-full border border-gray-200 overflow-hidden`}>
                                        <div
                                            className={`h-full bg-blue-400 transition-all duration-300 ease-in-out`}
                                            style={{width: `${avg}%`}}
                                            role="progressbar"
                                            aria-valuenow={avg}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                        </div>

                                        <div className="grid top-0 left-0 z-30 absolute w-full h-full place-items-center font-bold text-xl">{avg}%</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            </section>
        </main>
    )
}

export default Dashboard
