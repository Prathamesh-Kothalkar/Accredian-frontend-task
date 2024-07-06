import { Facebook, GitHub, LogoDev, Twitter } from "@mui/icons-material";

export default function Footer(){
    return<>
        <div className="md:p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 space-x-0 bg-slate-600 text-white mt-2">
            <div className="p-5">
                <div className="text-black text-3xl font-semibold">
                        Accredian
                </div>
                <div className="py-2">
                    Refer & earn
                </div>
                <div className="py-4">
                    <Facebook className="m-2"/>
                    <Twitter className="m-2"/>
                    <GitHub className="m-2"/>
                </div>
            </div>
            <div className="grid grid-cols-2 space-x-0 md:grid-cols-4 xl:grids-cols-4 p-3">
                <div className="">
                    <ul>
                        <li className=" font-semibold text-xl mb-3">Organization</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Project's</li>
                        <li>Members</li>
                    </ul>
                </div>
                <div className="">
                    <ul>
                        <li className=" font-semibold text-xl mb-3">Help & Support</li>
                        <li>Contribute</li>
                        <li>Contact Us</li>
                        <li>Developer</li>
                    </ul>
                </div>
                <div className="">
                    <ul>
                        <li className=" font-semibold text-xl mb-3">Resources</li>
                        <li>Blog</li>
                        <li>Github</li>
                        <li>Google</li>
                    </ul>
                </div>
                <div className="">
                    <ul>
                        <li className=" font-semibold text-xl mb-3">Technology</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySql</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2  bg-slate-600 text-white ">
                <div className="font-bold text-xl uppercase">
                    Prathamesh <LogoDev/>
                </div>
                <div className="text-slate-200">
                    Copyright © 2024 . Made with ❤️ by Prathamesh-Kothalkar  
                </div>
        </div>
    </>
}