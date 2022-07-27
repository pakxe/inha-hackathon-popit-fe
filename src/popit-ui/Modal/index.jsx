import React from "react";
import styled from "styled-components";
import Flex from "../Flex";
import { useState } from "react";
import ExpandPop from "../ExpandPop";
import Inputpopup from "../Inputpopup/index";
import NoticePopUp from "../NoticePopUp";
import Completepop from "../Completepop";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled(Flex)`
  height: 100%;
  width: 100%;
`;

const Modal = (props) => {
  if (props.type === "noticePopUp") {
    return (
      <div>
        <Wrapper>
          <Container justify="center" align="center">
            <NoticePopUp
              PopModal={props.PopModal}
              setPopModal={props.setPopModal}
              content={props.content}
              leftButton={props.leftButton}
              rightButton={props.rightButton}
              usage={props.usage}
            ></NoticePopUp>
          </Container>
        </Wrapper>
      </div>
    );
  }
  if (props.type === "expandPopUp") {
    return (
      <div>
        <Wrapper>
          <Container justify="center" align="center">
            <ExpandPop></ExpandPop>
          </Container>
        </Wrapper>
      </div>
    );
  }
  if (props.type === "completePopUp") {
    return (
      <div>
        <Wrapper>
          <Container justify="center" align="center">
            <Completepop
              PopModal={props.completeModal}
              setPopModal={props.setCompleteModal}
              content={props.content}
              subcontent={props.subcontent}
            ></Completepop>
          </Container>
        </Wrapper>
      </div>
    );
  }

  if (props.type === "inputPopUp") {
    return (
      <div>
        <Wrapper>
          <Container justify="center" align="center">
            <Inputpopup
              CreateNewPop={props.CreateNewPop}
              setCreateNewPop={props.setCreateNewPop}
            ></Inputpopup>
          </Container>
        </Wrapper>
      </div>
    );
  }
};

export default Modal;
