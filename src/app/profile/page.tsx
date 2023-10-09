"use client"
import axios from "axios";
import {useRouter} from "next/navigation";

export default function ProfilePage(){
    const router = useRouter();

    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            router.push("/login");
            
        } catch (error:any) {
            console.log(error.message);
        }
    }
    return(
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1>Profile</h1>
                <hr />
                <p>Profile page</p>

                <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                    <button
                        onClick={logout}
                        type="button"
                        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                           Logout
                    </button>
                </div>
            </div>  
        </>
    )
}