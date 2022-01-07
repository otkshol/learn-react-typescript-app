import { FC } from "react";
import styled from "styled-components";
import React from "react";

// 必要なPropsはメモ一覧と削除時に実行する関数
type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  // Javascript分割代入を使用している（Reactの文法でないことに注意）
  const { memos, onClickDelete } = props;
  return (
    <SContaier>
      <p>メモ一覧</p>
      <ul>
        {memos.map((memo, index) => (
          <li key={memo}>
            <SMemoWrapper>
              <p>{memo}</p>
              <SButton onClick={() => onClickDelete(index)}>削除</SButton>
            </SMemoWrapper>
          </li>
        ))}
      </ul>
    </SContaier>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;

const SContaier = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;

const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
