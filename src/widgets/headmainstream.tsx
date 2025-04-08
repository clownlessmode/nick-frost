import Image from 'next/image';

export default function Headmainstream() {
    return (
        <div className='w-[100%] flex justify-center min-[1500px]:mt-[180px] min-[720px]:mt-[80px] mt-[56px]'>
            <div className="flex justify-center min-[720px]:max-w-[600px] min-[1024px]:max-w-[900px] min-[1500px]:max-w-[1500px] md:flex hidden">
                <Image
                    alt="There are 2 ways to scale your hight ticket offer"
                    src={"./headmainstream.svg"}
                    width={1504}
                    height={230}
                    className=''/>
            </div>
            <div className="jutify-center md:hidden flex">
                <Image 
                    alt="There are 2 ways to scale your hight ticket offer"
                    src={"./mobileLogo.svg"}
                    width={276}
                    height={134}
                    className='' />
            </div>
        </div>
    )
}
