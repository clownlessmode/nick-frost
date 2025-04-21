import Image from 'next/image';

const Icon3d = ({
  src,
  className,
  index,
  onClick,
  isActive
}: {
  src: string;
  className?: string;
  index: number;
  onClick: (index: number) => void;
  isActive: boolean;
}) => {
  return (
    <div
      className={`rounded-[11px] md:w-fit border-[0.5px] border-white bg-transparent size-full transition-all duration-300 grayscale ${className} ${isActive ? 'grayscale-0' : ''}`}
      onClick={() => onClick(index)}
    >
      <Image
        width={140}
        height={140}
        className="size-full md:size-[64px] lg:size-[86px] 2xl:size-[133px]"
        alt="icon 3d"
        src={src}
      />
    </div>
  );
};

export default Icon3d;