import { FC, useState, ChangeEvent, useCallback } from "react";
import React from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
  //カスタムフックから取得
  const { memos, addTodo, deleteTodo } = useMemoList();
  // テキストボックス State
  const [text, setText] = useState<string>("");

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  // 追加ボタンを押した時の挙動
  const onClickAdd = () => {
    // カスタムフックのメモ追加ロジック実行
    addTodo(text);
    // テキストボックスをからにする
    setText("");
  };

  // 削除ボタンを押した時にの挙動（何番目が押されたかを引数で受け取る）
  const onClickDelete = useCallback(
    (index: number) => {
      // カスタムフックのメモ削除ロジック実行
      deleteTodo(index);
    },
    [deleteTodo]
  );

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
