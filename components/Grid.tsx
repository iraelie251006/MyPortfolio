"use client";
import { gridItems } from "@/data"
// import { BentoGridItem } from "./ui/BentoGrid"
import dynamic from "next/dynamic"

const BentoGrid = dynamic(() => import("./ui/BentoGrid").then(mod => mod.BentoGrid), {ssr: false});
const BentoGridItem = dynamic(() => import("./ui/BentoGrid").then(mod => mod.BentoGridItem), {ssr: false})

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid className="w-full py-20">
            {gridItems.map(({id, title, description,className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem 
                 id={id}
                 key={id}
                 title={title}
                 description={description}
                 className={className}
                 img={img}
                 imgClassName={imgClassName}
                 titleClassName={titleClassName}
                 spareImg={spareImg}
                />
            ))}
        </BentoGrid>
       
    </section>
  )
}

export default Grid