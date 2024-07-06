import { Button } from "@mui/material"
import howrefer from "../assets/howrefer.png"
import Refer from "./Refer"
export default function HowRefer(){
    return<>
        <div className="mt-6 bg-blue-50 p-3">
            <p className="text-center text-xl font-semibold">
                How do I <span className="text-blue-500">Refer?</span>
            </p>
            <div className="flex justify-center items-center p-4">
                <img src={howrefer} alt=""/>
            </div>
            <div className="flex justify-center items-center mt-5">
               <Refer/>
            </div>
        </div>
    </>
}