import React, { useState } from "react";
import axios from "axios";
import { InputSection, InputField, Btn2, Form } from "../style/InputBoxStyle";
import { Container } from "../style/MainStyle";
import ResultSection from "../ShortLinks/ResultSection";
import BgImg from "../../Assets/bg-shorten-desktop.svg";

const InputBox = () => {
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [keyword, setKeyword] = useState("");
  const send = link?.result?.short_link;
  const onChange = (e) => setText(e.target.value);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("result");
    try {
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${text}`
      );
      console.log(res.data);
      setLink(res.data);
      setKeyword(text);
    } catch (err) {
      console.log(err.msg);
    }
  };
  return (
    <Container>
      <InputSection>
        <img src={BgImg} alt='' />
        <InputField>
          <Form onSubmit={onSubmit}>
            <input
              onChange={onChange}
              type='text'
              value={text}
              placeholder='Shorten a link here...'
            />
            <Btn2 type='submit'>Shorten it!</Btn2>
          </Form>
        </InputField>
      </InputSection>
      <ResultSection link={send} text={text} keyword={keyword} />
    </Container>
  );
};
export default InputBox;
