import ReactPaginate from "react-paginate";
import { IconContext } from "react-icons";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

interface Props {
  data: any;
  setPage: any;
  itemsToShow: any;
}

const Pagination = ({ data, itemsToShow, setPage }: Props) => {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <IconContext.Provider value={{ color: "#D9D9D9", size: "20px" }}>
            <span className="flex items-center gap-4">
              <span className="text-[#555555] font-poppins text-base font-normal">
                Next
              </span>
              <FaChevronRight />
            </span>
          </IconContext.Provider>
        }
        onPageChange={(event) => setPage(event.selected)}
        pageRangeDisplayed={1}
        pageCount={Math.ceil(data && data.length / itemsToShow)}
        previousLabel={
          <IconContext.Provider value={{ color: "#D9D9D9", size: "20px" }}>
            <span className="flex items-center gap-4">
              <FaChevronLeft />
              <span className="text-[#555555] font-poppins text-base font-normal">
                Prev
              </span>
            </span>
          </IconContext.Provider>
        }
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        className="flex items-center gap-1 p-1 md:w-auto w-[340px] rounded-full border-[1px] bg-white shadow-lg"
        pageClassName="flex items-center justify-center w-[50px] md:h-[50px] h-[25px] rounded-full text-gray-700 cursor-pointer"
        activeClassName="bg-green-800 text-white"
        previousClassName="font-normal px-[18px]"
        nextClassName="font-normal px-[18px]"
        disabledClassName="text-gray-400 cursor-not-allowed"
        breakClassName="text-gray-700"
      />
    </>
  );
};

export default Pagination;
