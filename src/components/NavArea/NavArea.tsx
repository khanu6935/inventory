import { Images } from "../../assets/Image";

interface Props {
  pageTitle: string;
  discription: string;
}

const NavArea = ({ pageTitle, discription }: Props) => {
  return (
    <>
      <div
        className="w-full flex  rounded-2xl  items-end justify-between  md:px-6 px-1 pb-4 md:pt-1 pt-8  mt-4 object-contain rounded-b-3xl h-[260px]  "
        style={{
          backgroundImage: `url(${Images.navBar})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "contain",
          objectPosition: "center",
        }}
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-white font-poppins md:leading-7 leading-3 font-bold md:text-3xl text-lg">
            {pageTitle}
          </h2>
          <p className="text-white font-poppins font-normal md:leading-10 leading-4 md:text-base text-xs">
            {discription}
          </p>
        </div>
        <div className="bg-white pb-4 px-4 pt-2 rounded-xl">
          <img src={Images.zemLogo} alt="main" className="object-cover w-64" />
        </div>
      </div>
    </>
  );
};

export default NavArea;
