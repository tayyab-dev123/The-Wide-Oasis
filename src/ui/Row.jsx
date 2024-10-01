import styled, { css } from "styled-components";

const row = styled.div`
  ${(props) =>
    props.type === "horizontal" &&
    css`
      display: flex;
      justify-content: space-between;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
    `}
`;

row.defaultProps = {
  type: "horizontal",
};

export default row;
