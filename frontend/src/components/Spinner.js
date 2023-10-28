import { ProgressBar } from "react-loader-spinner";
import styled from "@emotion/styled";

const CenterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const LoaderComp = () => {
  return (
    <CenterDiv>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="lightblue"
        barColor="orange"
      />
    </CenterDiv>
  );
};
export default LoaderComp;
