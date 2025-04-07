import Image from 'next/image';

export default function Headmainstream() {
    return (
        <div className='w-[100%] flex justify-center'>
            <div className="min-[1500px]:pt-[180px] min-[720px]:pt-[80px] flex justify-center min-[720px]:max-w-[600px] min-[1024px]:max-w-[900px] min-[1500px]:max-w-[1500px]">
                <Image
                    alt="There are 2 ways to scale your hight ticket offer"
                    src={"./headmainstream.svg"}
                    width={1504}
                    height={230}
                    className=''/>
            </div>
        </div>
    )
}
