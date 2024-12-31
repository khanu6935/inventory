import Modal from "../../../../components/Modals/Modal";
import InvestorTable from "../../../../components/Tables/PortfolioTable/InvestorTable";

interface Props {
  isModalOpen: boolean;
  toggleModal: any;
  rowData: any;
  headerColumn: any;
}

const ResidenceModal = ({
  isModalOpen,
  rowData,
  toggleModal,
  headerColumn,
}: Props) => {

  console.log("rowData",rowData);


  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        header="Investor"
        supplier={true}
      >
        <div className="flex flex-col justify-center items-center">
          {/* <InvestorTable tableHeader={headerColumn} tableBody={rowData} /> */}
          modal open
        </div>
      </Modal>
    </>
  );
};

export default ResidenceModal;
