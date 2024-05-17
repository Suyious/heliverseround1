import browsers from "../../assets/motionarteffect-img8.png"

export const Support = () => {
    return (
        <section className="w-[1280px] max-w-[90vw] m-auto my-36 bg-[linear-gradient(180deg,_#0D061F_0%,_#251E35_100%)] rounded-3xl border-2 border-[#FFFFFF10] p-8">
            <div className="w-[500px] max-w-full m-auto text-center">
                <h3 className="text-2xl text-foreground font-[500] font-display">Supported by All Popular Browsers</h3>
                <p className="text-lg text-accent py-4">Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
            </div>
            <div className="w-fit m-auto py-4">
                <img className="w-full" src={browsers} alt="Browsers" />
            </div>
        </section>
    )
}