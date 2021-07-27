import styled from "styled-components";

const ImagesDiv = styled.div`
    color: black;
    padding: 5px;
    border-radius: 5px;
    outline: 0;
    overflow-x: hidden;
    white-space: nowrap;
    display: inline-block;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
  `;

ImagesDiv.defaultProps = {
    theme: "red"
};

export default ImagesDiv;