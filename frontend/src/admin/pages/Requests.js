import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../components/Cards/TitleCard"
import { showNotification } from '../features/common/headerSlice'



const TEAM_MEMBERS = [
    { name: "کاربر یک",email:"user1@test.test" , avatar: "https://cdn-icons-png.flaticon.com/128/3069/3069172.png"},
    { name: "کاربر دو",email:"user2@test.test" , avatar: "https://cdn-icons-png.flaticon.com/128/2153/2153090.png"},
    { name: "کاربر سه",email:"user3@test.test" , avatar: "https://cdn-icons-png.flaticon.com/128/1864/1864472.png"},
    { name: "کاربر چهار",email:"user4@test.test" , avatar: "https://cdn-icons-png.flaticon.com/128/1998/1998627.png"},
    { name: "کاربر پنج",email:"user5@test.test" , avatar: "https://cdn-icons-png.flaticon.com/128/1864/1864475.png"},
    { name: "کاربر شش",email:"user6@test.test" , avatar: "https://cdn-icons-png.flaticon.com/128/809/809052.png"},

]

function Requests() {


    const [members, setMembers] = useState(TEAM_MEMBERS)


    return (
        <>

            <TitleCard topMargin="mt-2">

                {/* Team Member list in table format loaded constant */}
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>نام کاربر</th>
                                <th>ایمیل</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                members.map((l, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-circle w-12 h-12">
                                                            <img src={l.avatar} alt="Avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold mr-3">{l.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{l.email}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}


export default Requests