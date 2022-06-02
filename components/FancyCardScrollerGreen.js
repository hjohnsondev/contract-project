import styles from "../styles/scroller.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

import { useEffect } from "react";

export default function FancyCardScrollerGreen ({scrollerData}) {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let bodyScrollBar = Scrollbar.init(document.body, {
            damping: 0.1,
            delegateTo: document,
        });
        ScrollTrigger.scrollerProxy(".scroller", {
        scrollTop(value) {
            if (arguments.length) {
            bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
        },
        });
        bodyScrollBar.addListener(ScrollTrigger.update);
    
        gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });
    
        var images = gsap.utils.toArray('.panel:not(.purple)');
    
        images.forEach((image, i) => {
        
        var tl = gsap.timeline({
            scrollTrigger: {
            trigger: "section.black",
            scroller: ".scroller",
            start: () => "top -" + (window.innerHeight*(i+0.5)),
            end: () => "+=" + window.innerHeight,
            scrub: true,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true,     
            }
        })
        
        tl
        .to(image, { height: 0 })
        ;
        });
        gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });
    
        var texts = gsap.utils.toArray('.panel-text');
    
        texts.forEach((text, i) => {
        
        var tl = gsap.timeline({
            scrollTrigger: {
            trigger: "section.black",
            scroller: ".scroller",
            start: () => "top -" + (window.innerHeight*i),
            end: () => "+=" + window.innerHeight,
            scrub: true,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true,     
            }
        })
        
        tl
        .to(text, { duration: 0.33, opacity: 1, y:"50%" })  
        .to(text, { duration: 0.33, opacity: 0, y:"0%" }, 0.66)
        ;
        });    

        ScrollTrigger.create({
            trigger: "section.black",
            scroller: ".scroller",
            scrub: true,
            markers: true,
            pin: true,
            start: () => "top top",
            end: () => "+=" + ((images.length + 1) * window.innerHeight),
            invalidateOnRefresh: true,
        });
    }, []);

    

    const cards = scrollerData.cards[0].fields.cards;

    return (
        <div className={`${styles.scroller}`}>
      
			<section className={`${styles.orange}`}>
				<div className={`${styles.text}`}>This is some text inside of a div block.</div>
			</section>
      
			<section className={`${styles.black}`}>
        
        
			</section>
      
			<section className={`${styles.blue}`}></section>
      
		</div>
    )
}