import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function TestimonialCard ({testimonial = null}) {
    let testimonialText = testimonial?.testimonial?.json;
    return (
        <div className='inline-block w-50 h-50'>
            <div className="snap-center w-50 h-75 max-w-xs overflow-hidden bg-white shadow-lg">
                <img className='rounded-full object-scale-down' src={`${testimonial?.image?.url}`}/>
                <div className='max-w-[75%]'>{documentToReactComponents(testimonialText)}</div>
            </div>
        </div>
        
    )
}

export default TestimonialCard;