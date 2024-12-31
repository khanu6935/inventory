import { useState } from "react";
import DefaultLayout from "../../../components/DefaultLayout/DefaultLayout";
import InnerLayOut from "../../../components/InnerLayOut/InnerLayOut";
import InputFeild from "../../../components/InputFeild/InputFeild";
import NavArea from "../../../components/NavArea/NavArea";
import DocumentTable from "../../../components/Tables/DocumentTable/DocumentTable";
import { BsChevronExpand } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import usePagination from "../../../hooks/Pagination";
import Pagination from "../../../components/Pagination/Pagination";

const DashboardHeader = [
  {
    id: 1,
    icon: <BsChevronExpand color="#4D4D4D" size={15} />,
    title: "Document Name",
  },
  {
    id: 2,
    icon: <BsChevronExpand color="#4D4D4D" size={15} />,
    title: "Document Type",
  },
  {
    id: 3,
    icon: <BsChevronExpand color="#4D4D4D" size={15} />,
    title: "Upload On",
  },
  {
    id: 4,
    icon: <BsChevronExpand color="#4D4D4D" size={15} />,
    title: "Download",
  },
];

const data = [
  {
    document: "Document 01.pdf",
    type: "Tax",
    upload: "08/28/2024",
  },
  {
    document: "Document 02.pdf",
    type: "Legal Document",
    upload: "08/28/2024",
  },
  {
    document: "Document 03.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 04.pdf",
    type: "Legal Document",
    upload: "08/28/2024",
  },
  {
    document: "Document 05.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 03.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 04.pdf",
    type: "Legal Document",
    upload: "08/28/2024",
  },
  {
    document: "Document 05.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 01.pdf",
    type: "Tax",
    upload: "08/28/2024",
  },
  {
    document: "Document 02.pdf",
    type: "Legal Document",
    upload: "08/28/2024",
  },
  {
    document: "Document 03.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 04.pdf",
    type: "Legal Document",
    upload: "08/28/2024",
  },
  {
    document: "Document 05.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 03.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 04.pdf",
    type: "Legal Document",
    upload: "08/28/2024",
  },
  {
    document: "Document 05.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 01.pdf",
    type: "Tax",
    upload: "08/28/2024",
  },
  {
    document: "Document 02.pdf",
    type: "Legal Document",
    upload: "08/28/2024",
  },
  {
    document: "Document 03.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 04.pdf",
    type: "Legal Document",
    upload: "08/28/2024",
  },
  {
    document: "Document 05.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 03.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 04.pdf",
    type: "Legal Document",
    upload: "08/28/2024",
  },
  {
    document: "Document 05.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 05.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 01.pdf",
    type: "Tax",
    upload: "08/28/2024",
  },
  {
    document: "Document 02.pdf",
    type: "Legal Document",
    upload: "08/28/2024",
  },
  {
    document: "Document 03.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 04.pdf",
    type: "Legal Document",
    upload: "08/28/2024",
  },
  {
    document: "Document 05.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 03.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
  {
    document: "Document 04.pdf",
    type: "Legal Document",
    upload: "08/28/2024",
  },
  {
    document: "Document 05.pdf",
    type: "Investor Disclosure",
    upload: "08/28/2024",
  },
];

const Documents = () => {
  const [searchDoc, setSearchDoc] = useState("");
  const pageSize = 5;
  const { filterData, setPage } = usePagination({ data, pageSize });

  const handleChange = (e: any) => {
    setSearchDoc(e.target.value);
  };

  return (
    <DefaultLayout>
      <div className="pb-6 h-max  bg-[#F0F0F1] rounded-[20px] w-full flex flex-col justify-center px-5 lg:pl-16 md:pl-8 pl-4 items-center ">
        <div className="w-full mt-6 flex flex-col gap-12  lg:px-10 px-0 mr-0">
          <NavArea
            pageTitle="View/Download Documents"
            discription="View/Download all documents associated with your account"
          />

          <InnerLayOut>
            <div className="w-full px-4 ">
              <h2 className="font-poppins  pl-2 font-semibold text-xl text-textPrimary">
                Document List
              </h2>
              <div className="my-3 mb-6 md:w-[479px] w-full">
                <InputFeild
                  label=""
                  name="search"
                  onChange={handleChange}
                  placeholder="Search"
                  type="text"
                  value={searchDoc}
                  searchIcon={<LuSearch size={20} color="#4D4D4D" />}
                />
              </div>
              <div className="overflow-x-auto">
                <DocumentTable
                  tableHeader={DashboardHeader}
                  tableBody={filterData}
                />
              </div>
              <div className="flex md:flex-row flex-col-reverse items-center w-full mt-8 justify-end">
                <Pagination
                  data={data}
                  itemsToShow={pageSize}
                  setPage={setPage}
                />
              </div>
            </div>
          </InnerLayOut>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Documents;
