import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row h-screen  items-center justify-center mr-9">
    
      <div className="flex h-[502px]"></div>
      <div className="text-center mb-10 max-w-2xl ">
        <h1 className="font-bold  text-[32px] md:text-[44px] gap-18 mb-5 mt-6 ">Welcome to My Website</h1>
        <p className="font-normal  text-[18px] md:text-[32px] px-16 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos blanditiis itaque, recusandae voluptatum nulla
          repudiandae numquam aut! A, commodi est harum perspiciatis modi iste id obcaecati consequuntur earum ut
          aspernatur.
        </p>
        <button className="text-white w-[237px] h-[66px] mt-6 bg-black">Contact us</button>
      </div>

      <div className="flex gap-8 mt-76px">
        <Image
          src="/image/66043132647013ab282f736ebcd7411c.jpg"
          alt="Image 1"
          width={300}
          height={200}
          className="object-cover rounded"
        />
        <Image
          src="https://images.pexels.com/photos/28995568/pexels-photo-28995568/free-photo-of-scenic-road-through-trentino-south-tyrol-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image 2"
          width={300}
          height={200}
          layout="Responsive"
          className="object-cover rounded"
        />
      </div>
    </div>
  );
}
