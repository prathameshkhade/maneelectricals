import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/all";

export default function App() {
  const containerRef = useRef(null);

  useGSAP(() => {
    var split = SplitText.create(containerRef.current, {type: 'chars'});
    var tl = gsap.timeline();

    tl
      .from(split.chars, {
        duration: 1.3,
        ease: 'expo.out',
        opacity: 0, 
        y: 180,
        autoAlpha: 0,
        stagger: 0.07,
      })
      .to(split.chars, {
        y: -180,
        duration: 1.2,
        ease: 'expo.in',
        stagger: 0.07,
        autoAlpha: 0,
        opacity: 0
      },
      '-=1'
      )

    
  }, []);

  return (
    <section className="w-full h-screen bg-red-300 flex items-center p-9 justify-center overflow-hidden">
      <h1 ref={containerRef} className="text-9xl font-bold text-white">Hello World!</h1>
    </section>
  );
}