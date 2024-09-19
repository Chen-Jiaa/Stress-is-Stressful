'use client';

import Parallax from "./components/Parallax";
import Trashcan from "./components/Trashcan";



export default function Home() {

  return (
    
    <main className= "bg-dark-blue">
      <Parallax />         

      <div className="p-[10%]">
        <p className=" text-oren-4 text-xs leading-5 ">
        Have you ever done something bad or really stupid? Like, you know, stealing money from your granny as a child or laughing at an odd-looking homeless person?
        <br/><br/>
        Do you still remember the day when you failed the interview for your dream job or the night when you were too shy to tell her that you loved her? Maybe you hate yourself for some of your thoughts or feelings?
        <br/><br/>
        It’s time to get rid of shame and start a guilt-free life! Let us save your sanity with the ancient technique of ‘Indulgence’, which first appeared in Europe more than 1,000 years ago. 
        <br/><br/>
        Now go scroll for redemption!
        </p>
      </div>

      <Trashcan />    
  

    </main>
  );
}
