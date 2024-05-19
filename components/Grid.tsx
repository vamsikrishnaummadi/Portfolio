import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
       <BentoGrid className='w-full py-20'>
        {
            gridItems.map(({id,title,img,description,className,spareImg,imgClassName,titleClassName}) => (
                <BentoGridItem 
                   id={id}
                   key={id}
                   title={title}
                   img={img}
                   description={description}
                   className={className}
                   spareImg={spareImg}
                   titleClassName={titleClassName}
                   imgClassName={imgClassName}
                />
            ))
        }
       </BentoGrid>
    </section>
  )
}

export default Grid