import lightweight from "../../assets/motionarteffect-img9.png"
import responsive from "../../assets/motionarteffect-img6.png"
import userfriend from "../../assets/motionarteffect-img7.png"

const Card = ({heading, subheading, image}: { heading: string, subheading: string, image: string }) => {
    return (
        <div className="bg-[linear-gradient(180deg,_#0D061F_0%,_#251E35_100%)] p-7 rounded-3xl border-2 border-[#FFFFFF10] flex-1">
            <img className="mt-[-20px] ms-[-40px]" src={image} alt="alttext" />
            <h2 className="text-[25px] text-foreground font-[500] font-display">{heading}</h2>
            <p className="py-2 text-lg font-light text-accent">{subheading}</p>
        </div>
    )
}

export const Features = () => {
    return (
        <section className="w-[1280px] max-w-[90vw] m-auto my-36">
            <div className="w-[700px] max-w-[90vw] m-auto text-center">
                <h2 className="w-[600px] max-w-full m-auto text-[40px] leading-[60px] text-foreground font-display font-[500]">An All-Round Plugin With Powerful Features</h2>
                <p className="text-accent text-lg m-4">Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
            </div>
            <div className="flex flex-col xl:flex-row justify-between items-center gap-5 py-8">
                <Card
                    heading="Light Weight"
                    subheading="Motion Art for Elementor is designed to be lightweight."
                    image={lightweight}/>
                <Card
                    heading="100% Responsive"
                    subheading="Create a consistent visual experience across all devices."
                    image={responsive}/>
                <Card
                    heading="User Friendly Interface"
                    subheading="Ensure a smooth experience for both applicants and administrators."
                    image={userfriend}/>
            </div>
        </section>
    )
}