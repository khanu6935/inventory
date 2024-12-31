import { CSSProperties } from "react";
import BeatLoader from "react-spinners/ClipLoader";

interface Props {
  color: string;
  loading: boolean;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const BtnLoader = ({ color, loading }: Props) => {
  return (
    <BeatLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={40}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default BtnLoader;
