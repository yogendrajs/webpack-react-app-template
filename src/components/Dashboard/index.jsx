import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
`;

const Item = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const index = ({ results = [] }) => (
  <Wrapper>
    {results.map((each, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Item key={i}>
        <div>
          <b>Title:&ensp;</b>
          {each.title}
        </div>
        <div>
          <b>Body:&ensp;</b>
          {each.body}
        </div>
      </Item>
    ))}
  </Wrapper>
);

export default index;
