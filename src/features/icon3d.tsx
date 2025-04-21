import Image from 'next/image';

const Icon3d = ({
  src,
  className,
  index,
  onMouseEnter,
  onMouseLeave,
  onClick
}: {
  src: string;
  className?: string;
  index: number;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onClick: (index: number) => void;
}) => {
  return (
    <a
      className={`rounded-[11px] md:w-fit border-[0.5px] border-white bg-transparent size-full grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-300 block ${className}`}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onClick(index)}
    >
      <Image
        width={140}
        height={140}
        className="size-full md:size-[64px] lg:size-[86px] 2xl:size-[133px]"
        alt="icon 3d"
        src={src}
      />
    </a>
  );
};

export default Icon3d;