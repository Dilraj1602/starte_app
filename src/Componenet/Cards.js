import Card from "./Card";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { useState } from "react";
function Cards(props){

    let reviews=props.reviews;
    const[index,setIndex]=useState(0);
    function leftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }else{
            setIndex(index-1);
        }
    }
    function rightHandler(){
        if(index+1>reviews.length-1){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }

    function randomHandler(){
        let random=Math.floor(Math.random()*reviews.length);
        if(random===index){
            random=random+1;
        }
        setIndex(random%reviews.length);
    }

    return(
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
            <Card reviews={reviews[index]}></Card>

            <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
                <button  onClick={leftHandler} className='cursor-pointer hover:text-violet-500 '><FiChevronLeft /></button>
                <button  onClick={rightHandler} className='cursor-pointer hover:text-violet-500 '><FiChevronRight /></button>
            </div>

            <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-3' onClick={randomHandler}>Surprise Me</button>
        </div>
        
    );

}
export default Cards;