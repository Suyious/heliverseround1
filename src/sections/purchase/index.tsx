import illustration from "../../assets/motionarteffect-img5.png"

export const Purchase = () => {
    return (
        <section className="w-[1280px] max-w-[90vw] m-auto my-36 flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="md:w-7/12">
                <h1 className="text-5xl text-foreground">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
                <p className="text-lg text-accent py-8">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                <button className="px-8 py-4 text-xl font-display font-light rounded-2xl bg-[linear-gradient(-90deg,_#F87516_0%,_#5E11FF_100%)] ">Purchase From Envato <span className="pl-4">&#129122;</span></button>
            </div>
            <div>
                <img src={illustration} alt="illustration" />
            </div>
        </section>
    )
}