import AboveTheFold from "./components/AboveTheFold";
import CoreCapabilities from "./components/CoreCapabilities";
import Languages from "./components/Languages";

export default function SiteMain() {
    return (
        <main class="flex mt-10  flex-col items-center justify-center relative  ">
            <AboveTheFold/>
            <div class="languagePrograming-Box light:**:text-light__text light:bg-light-blue/40 md:w-full overflow-hidden h-auto bg-white/20  opacity-70 hover:opacity-100 transition-opacity
            grid md:grid-cols-1 grid-cols-2  p-5 content-around  gap-y-3   grid-rows-1     w-full
            
            ">

                <Languages Value="TailwindCss" ImgSrc="tailwindcss"/>
                <Languages Value="Asp.net" ImgSrc="dotnet-tile"/>
                
            </div>
            <CoreCapabilities Title="Frontend Architecture" circleColor="bg-linear1/40" >
                <p class="text-lg text-white/60 w-4/5 ml-5 mb-2  inline light:text-black/70">
                    Building complex SPAs with React, Next.js, and modern state management. Focusing on performance, accessibility, and SEO optimization.
                </p>
            </CoreCapabilities >
                      
            <div class="Projrcts   w-4/5 flex flex-col justify-center items-center">
                <div id="Selected_Works" class="w-full h-auto selector mb-24"></div>
                <div class="Projects-title w-4/5 h-[142px]   ">

                    <div class="w-full  flex justify-center items-center">
                        <p class="rounded-2xl  w-auto ring-2 ring-linear3 text-linear3 p-2">Selected Works</p>
                    </div>
                    <p class="text-4xl text-white font-bold mt-4">Featured <span
                        class="bg-linear-to-t bg-clip-text text-transparent from-linear3 to-linear2">Projects</span>
                    </p>
                    <div class="btn mt-6  ring-2 ring-border rounded-2xl p-2 bg-border/30">
                        <a class="flex items-center justify-center gap-3 " href="">
                            <p class="text-white">View All Projects</p><img src="assets/svg/arow.svg"
                                class="rotate-45 bg-amber-50   fill-amber-50" alt="" />
                        </a>
                    </div>
                </div>
                <div class="Projrcts-items mt-24 w-[328px] h-[1523px]
                grid grid-cols-1 grid-rows-3 font-bold gap-8">
                    <div
                        class="project  rounded-2xl w-full h-auto ring-2 ring-white bg-project flex flex-col justify-around items-center">
                        <img src="assets/photos/Image.png" alt="" class="w-full h-1/2 rounded-t-2xl " />
                        <div class="Project-info w-4/5 h-1/2 rounded-b-2xl    gap-2 flex flex-col  justify-center">
                            <p class="project-item__title text-white text-2xl ">Nova Financial</p>
                            <p class="project-item__subTitle text-sm text-gray-400">Real-time cryptocurrency trading
                                dashboard with live WebSocket feeds, advanced charting, and portfolio analytics.</p>
                            <ul class="project-item__FrameWork w-full  flex items-center justify-start gap-1">
                                <li class="FrameWork h-6 flex items-center  p-3 bg-white/5 rounded-2xl text-FrameWork">
                                    React</li>
                                <li class="FrameWork h-6 flex items-center  p-3 bg-white/5 rounded-2xl text-FrameWork">
                                    D3.js</li>
                                <li class="FrameWork h-6 flex items-center  p-3 bg-white/5 rounded-2xl text-FrameWork">
                                    Supabase</li>
                            </ul>
                            <div
                                class="project-item__source w-full border-t-2 border-white/5 flex mt-2 items-center justify-start gap-8">
                                <a href="" class="flex mt-4  gap-1 items-center">
                                    <img class="size-6" src="assets/svg/infinity-endless-svgrepo-com.svg" alt="" />
                                    <p class="text-sm text-white">Live Demo</p>
                                </a>
                                <a href="" class="flex  mt-4 gap-1 items-center">
                                    <img class="size-6" src="assets/svg/github-142-svgrepo-com.svg" alt="" />
                                    <p class="text-sm text-white">Source</p>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div class="comment-container w-4/5 h-[1165px] flex flex-col justify-center items-center gap-14 ">
                <div class="comment-Title w-full flex flex-col justify-center items-center">
                    <p class="px-2 py-0.5  text-[#8B5CF6] rounded-2xl ring">Testimonials</p>
                    <p class="text-white font-bold  text-4xl mt-3 ">What <span
                        class="bg-linear-to-b bg-clip-text text-transparent from-linear2 to-linear3">Clients
                        Say</span></p>
                </div>
                <div class="comment-Boxs h-11/12   grid  justify-items-center   grid-cols-1 grid-rows-3 gap-6">
                    <div
                        class="comment text-xl w-80 bg-white/5 rounded-2xl ring-2 ring-white/10 flex flex-col items-center justify-center gap-4 ">
                        <img class="w-4/5" src="assets/svg/stars.svg" alt="" />
                        <p class="comment__text text-subTitle  w-4/5 ">
                            "Alex transformed our vision into reality with exceptional attention to detail. The
                            dashboard he built is not only beautiful but incredibly performant."
                        </p>
                        <div class="comment__person flex items-center w-4/5 gap-3">

                            <div class="circle size-8 rounded-full bg-red-400 "></div>
                            <p class="PersonName w-4/5 text-xl text-white">Sarah Johnson<span
                                class="block text-subTitle text-sm">CEO, TechFlow</span></p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="experience-container w-4/5 h-[1637px]   mt-24 flex flex-col items-center gap-16">
                <div class="experience-Title w-full h-1/6 flex flex-col justify-center items-center">
                    <p class="px-3 py-0.5  text-[#06B6D4] rounded-2xl ring ">Experience</p>
                    <p class="text-white font-bold  text-4xl mt-3 ">Professional <span
                        class="bg-linear-to-b bg-clip-text text-transparent from-linear1 to-linear2 block text-center">Journey</span>
                    </p>
                    <p class="text-xl text-subTitle text-center w-4/5 mt-4">Building products that matter at innovative
                        companies.</p>
                </div>
                <div class="experience-Grids w-full h-4/5 grid grid-cols-1 grid-rows-3 justify-items-center  ">

                    <div
                        class="experience text-xl w-80 bg-white/5 rounded-2xl ring-2 ring-white/10 flex flex-col items-center justify-center gap-6 ">
                        <div class="w-4/5 flex flex-col gap-2">
                            <p class="text-white text-2xl">Senior Frontend Engineer</p>
                            <p class="text-subTitle text-lg">TechCorp Inc.</p>
                            <p class="text-subTitle text-sm">2022 - Present</p>
                        </div>
                        <p class="experience__text text-base text-subTitle  w-4/5 ">
                            Leading frontend architecture for a suite of SaaS products serving 100K+ users. Implemented
                            design system, optimized performance by 60%, and mentored junior developers.
                        </p>
                        <ul class="project-item__FrameWork w-4/5  flex items-center justify-start gap-2 text-white">
                            <li
                                class="FrameWork text-xs font-bold  flex items-center  px-4 py-2 bg-white/5 rounded-2xl ">
                                React
                            </li>
                            <li
                                class="FrameWork text-xs font-bold  flex items-center  px-4 py-2 bg-white/5 rounded-2xl ">
                                D3.js
                            </li>
                            <li
                                class="FrameWork text-xs font-bold  flex items-center  px-4 py-2 bg-white/5 rounded-2xl ">
                                Supabase</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div
                class="Aboutme-section w-full h-[776px] flex flex-col items-center justify-center gap-12 bg-linear-to-b from-linear1/0 to-linear1/10 ">
                <div class="Aboutme-Title w-4/5 font-bold">
                    <p class="text-4xl  text-white text-center">Let's Build Something</p>
                    <p
                        class="bg-linear-to-b  text-center text-4xl bg-clip-text text-transparent from-linear1 from-0% via-linear2 via-45% to-linear3 to-100%">
                        Amazing</p>
                    <p class="text-lg font-normal text-subTitle text-center mt-6">Have a project in mind? I'm currently
                        available for freelance work and full-time opportunities. Let's discuss how we can work
                        together.</p>
                </div>
                <div class="Aboutme-Btns flex flex-col justify-center items-center gap-4">
                    <div
                        class="Aboutme-Btn w-37 h-14 rounded-full flex items-center justify-center gap-1.5 font-bold bg-linear-to-b from-linear1 to-linear2">
                        <img class="size-5" src="assets/svg/letter-svgrepo-com.svg" alt="" />
                        <p class="text-[#082F49] text-base"> Get In Touch</p>
                    </div>
                    <div
                        class="Aboutme-Btn w-44 bg-border/30 ring ring-border h-14 rounded-full flex items-center justify-center gap-2 font-bold">
                        <img class="size-5" src="assets/svg/date.svg" alt="" />
                        <p class="text-white text-base"> Schedule a Call</p>
                    </div>

                </div>
                <div
                    class="Aboutme-link-grid w-full h-28 text-base  grid grid-cols-2 grid-rows-2 gap-2 justify-items-center ">
                    <div class="Github ml-16 flex items-center justify-center gap-1.5">
                        <div
                            class="size-10 rounded-full bg-white/5 ring ring-white/10 flex items-center justify-center">
                            <img class="size-5" src="assets/svg/github-142-svgrepo-com.svg" alt="" />
                        </div>
                        <p class=" text-subTitle font-bold">GitHub</p>
                    </div>
                    <div class="Linkedin flex items-center justify-center gap-1.5 ml-2 ">
                        <div
                            class="size-10 rounded-full bg-white/5 ring ring-white/10 flex items-center justify-center">
                            <img class="size-5" src="assets/svg/linkedin-svgrepo-com.svg" alt="" />
                        </div>
                        <p class="text-subTitle font-bold">LinkedIn</p>
                    </div>
                    <div class="Instagram ml-24 flex items-center justify-center gap-1.5">
                        <div
                            class="size-10 rounded-full bg-white/5 ring ring-white/10 flex items-center justify-center">
                            <img class="size-5" src="assets/svg/instagram-1-svgrepo-com.svg" alt="" />
                        </div>
                        <p class="text-subTitle font-bold">Instagram</p>
                    </div>
                    <div class="Email flex items-center justify-center gap-1.5">
                        <div
                            class="size-10 rounded-full bg-white/5 ring ring-white/10 flex items-center justify-center">
                            <img class="size-5" src="assets/svg/letter-svgrepo-com.svg" alt="" />
                        </div>
                        <p class="text-subTitle font-bold">Email</p>
                    </div>
                </div>

            </div>
        </main>
    )
}