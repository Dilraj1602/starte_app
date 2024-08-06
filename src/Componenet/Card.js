import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

function Card(props){

    let reviews=props.reviews;
    
    return(
        <div className=" relative flex flex-col justify-center items-center">
            
            <div className='absolute top-[-6rem] left-4 z-[10] mx-auto'>
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25]" src={reviews.image}></img>
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute
         top-[-6px] z-[-10] left-[10px]'></div>
            </div>

            <div className='text-center mt-7 flex flex-col space-y-2'>
                <p className='tracking-wider font-bold text-2xl capitalize'>{reviews.name}</p>
                <p className='text-violet-300 uppercase text-sm'>{reviews.job}</p>
            </div>
            <p className='text-violet-400 mx-auto mt-5'><FaQuoteLeft /></p>
            <p className='text-center mt-4 text-slate-500'>{reviews.text}</p>
            <div className='text-violet-400 mx-auto mt-5'><FaQuoteRight /></div>


        </div>
    );

}

export default Card;