import section from "../../assets/motionarteffect-img11.png"
import page from "../../assets/motionarteffect-img10.png"

const Card = ({heading, subheading, image, classname=""}: { heading: string, subheading: string, image: string, classname?: string }) => {
    return (
        <div className={`bg-[linear-gradient(180deg,_#0D061F_0%,_#251E35_100%)] p-7 rounded-3xl border-2 border-[#FFFFFF10] ${classname}`}>
            <h3 className="font-display text-2xl text-foreground">{heading}</h3>
            <p className="py-8 font-light text-accent text-lg">{subheading}</p>
            <img className="m-auto" src={image} alt="section" />
        </div>
    )
}

export const Application = () => {
    return (
        <section className="w-[1280px] max-w-[90vw] m-auto my-36">
            <div className="text-center flex justify-center">
                <h2 className="w-[700px] text-[40px] font-display text-foreground">Apply On Any Section Or Enable For Whole Page</h2>
            </div>
            <div className="flex flex-col md:flex-row py-16 gap-5 justify-between items-center">
                <Card 
                    heading="Apply on Section"
                    subheading="Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website."
                    image={section}/>
                <Card
                    heading="Apply on Page"
                    subheading="Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation."
                    image={page}
                    classname="md:translate-y-16"/>
            </div>
        </section>
    )
}