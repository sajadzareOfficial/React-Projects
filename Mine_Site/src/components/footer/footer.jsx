export default function SiteFooter(){
    return(
        <footer class="w-4/5 h-auto mt-9">
            
            <div class="footer-container w-full h-auto">
                <p
                    class="footer__title font-bold text-2xl bg-linear-to-t bg-clip-text text-transparent from-linear1 from-0% via-linear2 via-50% to-linear3 to-100%">
                    ALEX.DEV</p>
                <p class="text-base mt-4 text-subTitle">Creative developer crafting exceptional digital experiences at
                    the
                intersection of design and engineering.</p>
                <div class="input-Email w-full flex items-center mt-4 ">
                    <form class="w-full flex items-center gap-2" action="">
                        <input
                            class="bg-white/5 focus:ring-8 focus:ring-linear1/50  w-4/5 h-9 rounded-full focus:outline-2 focus:outline-offset-2 focus:outline-linear1 ring-2 ring-white/10  focus:text-white focus:p-4 active:bg-linear1  placeholder:text-white placeholder:p-4"
                            type="text" placeholder="Enter your email"/>


                        <button class="size-9 bg-linear1 flex items-center justify-center rounded-full"
                            type="submit"><img class="rotate-45" src="assets/svg/arow.svg" alt=""/></button>
                    </form>

                </div>
                <div class="quick-links mt-8 text-base text-white font-bold flex flex-col gap-2">
                    <p class="mb-2">Quick Links</p>
                    <a href="" class="text-subTitle">Home</a>
                    <a href="" class="text-subTitle">Projects</a>
                    <a href="" class="text-subTitle">About</a>
                    <a href="" class="text-subTitle">Blog</a>
                    <a href="" class="text-subTitle">Contact</a>
                </div>
                <div class="Services-links mt-8 text-base text-white font-bold flex flex-col gap-2">
                    <p class="mb-2">Services</p>
                    <a href="" class="text-subTitle">Web Development</a>
                    <a href="" class="text-subTitle">UI/UX Design</a>
                    <a href="" class="text-subTitle">Consulting</a>
                    <a href="" class="text-subTitle">Code Review</a>

                </div>
                <div class="mt-10 w-full flex flex-col gap-1 justify-center items-center border-t-2 border-white/10 ">
                    <p class="text-sm text-subTitle mt-4">© 2024 Alex Developer. All rights reserved.</p>
                    <div class="flex gap-8 text-sm text-subTitle">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>

                </div>
            </div>

        </footer>

    )


}