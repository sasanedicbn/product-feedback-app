import { useEffect, useState } from "react";

const FeedBackAnimation = () => {
    const titleArr = ['FeedBack App']
    const [title, setTitle] = useState('')

    useEffect(() => {
        const letters = titleArr[0].split('');
        let index = 0;

        const interval = setInterval(() => {
            setTitle(prevTitle => prevTitle + letters[index]);
            index++;

          console.log(index, 'index', letters.length, 'letters')
            if (index === letters.length -1) {
                
                clearInterval(interval);
            }
        }, 200);

        return () => clearInterval(interval);
    }, []);
  
     console.log(title, 'title')
    return(
        <div className="w-1/2 h-full">
           <img
               src="/assets/backgroundApp.png"
               alt="background"
              className="object-cover w-full h-full"
             />
               <h2 className="absolute top-4 right-4 text-3xl tracking-widest font-bold opacity-20">{title}</h2>
        </div>
    )
}

export default FeedBackAnimation;