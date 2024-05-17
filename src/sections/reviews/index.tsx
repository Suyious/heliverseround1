import star from "../../assets/motionarteffect-img4.png";
import review1 from "../../assets/motionarteffect-img1.png";
import review2 from "../../assets/motionarteffect-img2.png";
import review3 from "../../assets/motionarteffect-img3.png";

const ReviewCard = ({ image }: {image: string}) => {
    return (
        <div className="flex gap-8 items-center">
            <div>
                <img src={image} alt="review" />
            </div>
            <div>
                <img src={star} alt="star" />
                <div className="mt-4 text-accent"><span className="font-bold">4.5</span> Score, 9 Reviews</div>
            </div>
        </div>
    )
}

export const Reviews = () => {
    return (
        <section className="w-[1280px] max-w-[90vw] m-auto my-36">
            <h2 className="my-16 text-2xl text-center">Trusted by thousands of users around the world</h2>
            <div className="flex justify-between flex-col items-center gap-8 md:flex-row">
                {[review1, review2, review3].map(review => (
                    <ReviewCard key={review} image={review}/>
                ))}
            </div>
        </section>
    )
}