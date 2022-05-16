const imageLoader = ({src}: {src: string}) => {
    return src;
}

export default imageLoader;

/* for next's Image component

<Image 
    loader={imageLoader}
    unoptomized
    src={exampleVariable.image}
    alt={exampleVariable.name}
    width="200"
    height="200"
/>

*/