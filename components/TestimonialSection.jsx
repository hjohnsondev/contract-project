import Link from "next/link";
import TestimonialCard from "./TestimonialCard";

function TestimonialSection ({testimonialData = null}) {
    const testimonials = testimonialData?.setOfTestimonialsCollection?.items[0]?.testimonialsCollection?.items
    return (
        <div className="md:container md:mx-auto px-48 h-full">
            {testimonialData.setOfTestimonialsCollection.items[0].title && <div className="flex flex-col items-center justify-center space-y-6">
                        <h2 className="mt-10 text-4xl"><strong>{testimonialData?.setOfTestimonialsCollection?.items[0]?.title}</strong></h2>
                        <hr className="border-2 border-sky-500 w-[5%]"/>
            </div>}
            <div className="flex snap-x overflow-x-scroll pb-10 hide-scroll-bar">
                <div className="flex flex-nowrap">
                    {testimonials?.map((testimonial, index) => {
                        return <TestimonialCard key={index} testimonial={testimonial}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection;