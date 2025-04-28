'use client'

import React, {useState} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Image from "next/image";
import { FaChevronLeft, FaChevronRight,FaTimes } from "react-icons/fa";

import image1 from '@/public/bg.jpg'
import image2 from '@/public/bg.webp'
import image3 from '@/public/bgg.jpg'
import image4 from '@/public/bg.webp'
import image5 from '@/public/bgg.jpg'

const images = [
    image1,image2,image3,image4,image5,
 ]

const PhotoGallery = () => {

    const [data, setData] = useState({img:'', i: 0})

   const viewImage = (img, i) => {
       setData({img,i})
   }

   const imgAction = (action) => {
      let i = data.i;
      if(action === 'nxt-img'){
         setData({img: images[i+1], i: i+1});
      }
      if(action === 'pre-img'){
         setData({img: images[i-1], i: i-1});
      }
      if(!action){
         setData({img:'', i: 0});
      }
   }

  return (
    <div className="pt-24">
        <h2 className="text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-2 lg:max-w-3xl lg:text-3xl mx-auto text-blue-900 underline-offset-8 underline pb-10 pt-8 text-center">IMAGE GALLERY</h2>

         {data.img &&
         <div style={{
            width:'100%',
            height:'100vh',
            background:'black',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            top:0,
            marginTop: '35px',
            cursor : 'pointer',
         }}>
            <button onClick={()=> imgAction()}
            style={{position:'absolute', top:'50px', right:'150px', color:'white', cursor : 'pointer'}}><FaTimes className="text-3xl" /></button>
            <button onClick={()=> imgAction('pre-img')}
               style={{color:'white', cursor : 'pointer'}} ><FaChevronLeft className="text-3xl"/></button>
            <Image src={data.img} style={{width:'auto', maxWidth:'90%', maxHeight:'90%'}} alt="slideshow" />
            <button onClick={()=> imgAction('nxt-img')}
               style={{color:'white', cursor : 'pointer'}} ><FaChevronRight className="text-3xl"/></button>
         </div>
         }

      <div style={{padding:"20px"}}>
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 750: 2, 900: 3}}
            >
        <Masonry columnsCount={3} gutter='20px'>

         {images.map((image, i) => (
               <Image key={i}
                src={image}
                style={{width:"100%", display:"block", cursor: "pointer", border:'1px solid rgb(173, 173, 173)'}}
                alt="gallery images"
                onClick={()=> viewImage(image,i)}/>

         ))}

         

        </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default PhotoGallery