import DefaultLayout from "../../../components/DefaultLayout/DefaultLayout";
import Residences from "../../../components/Residenes/Residences";
import InnerLayOut from "../../../components/InnerLayOut/InnerLayOut";
import { Images } from "../../../assets/Image";
import { PiGridFourLight } from "react-icons/pi";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { useState } from "react";
import ResidenceModal from "./Components/ResidenceModal";
import ListView from "../../../components/Residenes/ListView";
import NavArea from "../../../components/NavArea/NavArea";

const Data = [
  {
    id: 1,
    image: Images.building1,
    title: "Skyview Residences",
    location: "Miami, FL",
    target: "8%",
    Time: "2 Years",
    remaining: "$2,500,000",
  },
  {
    id: 2,
    image: Images.building2,
    title: "Riverfront Townhomes",
    location: "Portland, OR",
    target: "12%",
    Time: "2 Years",
    remaining: "$2,500,000",
  },
  {
    id: 3,
    image: Images.building3,
    title: "SecureVault Storage",
    location: "Denver, CO",
    target: "18%",
    Time: "2 Years",
    remaining: "$2,500,000",
  },
  {
    id: 4,
    image: Images.building3,
    title: "SecureVault Storage",
    location: "Denver, CO",
    target: "18%",
    Time: "2 Years",
    remaining: "$2,500,000",
  },
  {
    id: 5,
    image: Images.building3,
    title: "SecureVault Storage",
    location: "Denver, CO",
    target: "18%",
    Time: "2 Years",
    remaining: "$2,500,000",
  },
];

const toggleButtons = [
  {
    id: 1,
    title: "grid",
    icon: <PiGridFourLight size={25} />,
  },
  {
    id: 2,
    title: "list",
    icon: <MdOutlineFormatListBulleted size={25} />,
  },
];

const Opportunities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [residenceDetail, setResidenceDetail] = useState<any>("");
  const [changeView, setChangeView] = useState("grid");

  const toggleModal = (item: any) => {
    setIsModalOpen(!isModalOpen);
    setResidenceDetail(item);
  };

  const handleChnageView = (item: string) => {
    setChangeView(item);
  };

  return (
    <>
      <DefaultLayout>
        <div className="pb-6 h-max  bg-[#F0F0F1] rounded-[20px] w-full flex flex-col justify-center px-5 lg:pl-16 md:pl-8 pl-4 items-center ">
          <div className="w-full mt-6  lg:px-10 px-0 mr-0">
            <NavArea
              pageTitle="Opportunities"
              discription="View and commit to all current opportunities"
            />
            <div className="w-full mt-12 mr-12">
              <InnerLayOut>
                <div className="w-full flex justify-center flex-col">
                  <div className="px-6 pb-6">
                    <div className="flex w-full justify-end md:flex-row flex-col">
                      <div className="flex gap-4 items-center">
                        {toggleButtons.map((item: any) => {
                          return (
                            <>
                              <button
                                onClick={() => handleChnageView(item.title)}
                                className={`${
                                  item.title === changeView
                                    ? "bg-buttonPrimary text-white"
                                    : " bg-transparent border-[1px] border-buttonPrimary text-center flex justify-center items-center text-buttonPrimary"
                                } rounded-[8px] px-[10px] py-2.5    font-poppins text-sm `}
                              >
                                <span>{item.icon}</span>
                              </button>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <>
                    {changeView === "grid" ? (
                      <div className="flex  w-full justify-center flex-wrap lg:gap-12 md:gap-4 px-5 md:flex-row flex-col h-full gap-4 ">
                        {Data.map((item, index) => {
                          return (
                            <>
                              <Residences
                                key={index}
                                title={item.title}
                                image={item.image}
                                location={item.location}
                                time={item.Time}
                                target={item.target}
                                remaining={item.remaining}
                                onClick={() => toggleModal(item)}
                              />
                            </>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3 px-4">
                        {Data.map((item, index) => {
                          return (
                            <>
                              <div className="flex  w-full bg-slate-100 py-2  rounded-lg   flex-wrap px-4  md:flex-row flex-col h-full  ">
                                <ListView
                                  key={index}
                                  title={item.title}
                                  image={item.image}
                                  location={item.location}
                                  time={item.Time}
                                  target={item.target}
                                  remaining={item.remaining}
                                  onClick={() => toggleModal(item)}
                                />
                              </div>
                            </>
                          );
                        })}
                      </div>
                    )}
                  </>
                </div>
              </InnerLayOut>
            </div>
          </div>
        </div>
      </DefaultLayout>
      {/* ////////////////////////////////Modal to view Residences//////////////////////// */}
      <ResidenceModal
        isModalOpen={isModalOpen}
        residenceDetail={residenceDetail}
        toggleModal={toggleModal}
      />
    </>
  );
};

export default Opportunities;
