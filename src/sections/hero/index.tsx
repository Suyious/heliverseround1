export const Hero = () => {
    return (
        <section className="w-[1280px] max-w-[90vw] m-auto mt-16 md:flex md:justify-between md:gap-8">
            <div className="md:w-[15%] text-center md:text-left">
                <h3 className="text-xl md:w-36 font-medium font-display bg-[linear-gradient(90deg,_#F87516_0%,_#5E11FF_100%)] inline-block text-transparent bg-clip-text">Transform Your Website</h3>
                <p className="text-lg md:w-36 text-foreground">With Motion Art Effect</p>
            </div>
            <div className="w-full max-w-[90vw] m-auto xl:w-[50%]">
                <h1 className="font-display leading-[85px] text-[65px] text-foreground font-[500]">Attract Your Visitors Attention With Colorful <span className="bg-[linear-gradient(90deg,_#F87516_0%,_#5E11FF_100%)] inline-block text-transparent bg-clip-text">Motion Art Effect</span></h1>
                <p className="text-accent text-lg font-normal mt-8 w-[90%]">Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
            </div>
            <div className="hidden lg:block w-[20%]"/>
        </section>
    )
}