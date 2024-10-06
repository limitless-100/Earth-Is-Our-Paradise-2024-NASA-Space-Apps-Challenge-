import {Filter, Search} from "lucide-react";

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

function Dashboard() {
    return (
        <main className={"w-full h-full p-2 px-8"}>
            <div className={"border border-gray-700 flex bg-white rounded-full w-full p-2"}>
                <Search />
                <input placeholder={"Search here..."} className={"flex-grow mx-2"}/>
                <Filter />
            </div>

            <section className={"flex mt-8"}>
                <div className={"bg-white flex rounded-2xl gap-4"}>
                    {
                        scoreData.map((datum, index) => {
                            const {title, value, icon, avg} = datum
                            return (<div key={index}>
                                <h4>{title}</h4>
                                
                            </div>)
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default Dashboard
