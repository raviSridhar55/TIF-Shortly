import styled from "styled-components";

export const Main = styled.div`
  height: auto;
`;

export const InputSection = styled.section`
  /* ... */
  height: 180px;
  background: #35323e;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  transform: translateY(-50%);
  img {
    height: 100%;
    border-radius: 15px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 415px) {
    height: 250px;
    transform: translateY(0);
  }
`;

export const InputField = styled.article`
  position: absolute;
  width: 90%;
  height: 40%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 415px) {
    height: 100%;
  }
`;

export const Btn2 = styled.button`
  height: 90%;
  width: 20%;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #2acfcf;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 700;

  :hover {
    background: #9be3e2;
    cursor: pointer;
  }

  @media screen and (max-width: 415px) {
    height: 70px;
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  input {
    height: 90%;
    width: 70%;
    border: none;
    border-radius: 7.5px;
    padding-left: 10px;
    font-size: 18px;

    :focus {
      outline: none;
      border: 5px #2acfcf solid;
    }
  }
  @media screen and (max-width: 415px) {
    flex-direction: column;

    input {
      height: 70px;
      width: 100%;
    }
  }
`;

export const Result = styled.section`
  height: auto;
  margin: 20px 0;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #2acfcf;
    border-radius: 50px;
    border: 1px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #9be3e2;
  }
`;

export const Link = styled.div`
  height: 65px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    padding-left: 15px;
  }
  @media screen and (max-width: 415px) {
    height: 150px;
    flex-direction: column;

    p {
      margin-top: 5px;
    }
  }
`;

export const ShortLink = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    color: #2acfcf;
    font-weight: 500;
  }
  @media screen and (max-width: 415px) {
    width: 100%;
    height: 75%;
    flex-direction: column;
    border-top: 5px #eee solid;
  }
`;

export const Btn3 = styled.button`
  height: 65%;
  width: 100px;
  border: none;
  border-radius: 5px;
  color: white;
  background: ${(props) => (props.click ? "#3b3054" : "#2acfcf")};
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 700;

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
  @media screen and (max-width: 415px) {
    width: 90%;
    height: 50px;
  }
`;
