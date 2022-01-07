import { FC, useState, ChangeEvent, useCallback } from "react";
import React from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";

export const App: FC = () => {
  // テキストボックス State
  const [text, setText] = useState<string>("");
  // メモ一覧state
  const [memos, setMemos] = useState<string[]>([]);

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  // 追加ボタンを押した時の挙動
  const onClickAdd = () => {
    // state変更を正常に検知させるため新たな配列を生成
    // ...はTypescriptの可変長引数. memosに入った要素全ての配列が代入される。
    const newMemos = [...memos];
    // テキストボックスの入力内容をメモ入れるに追加
    newMemos.push(text);
    setMemos(newMemos);
    // テキストボックスをからにする
    setText("");
  };

  // 削除ボタンを押した時にの挙動（何番目が押されたかを引数で受け取る）
  const onClickDelete = useCallback(
    (index: number) => {
      // State変更を正常に検知させるために配列を生成
      const newMemos = [...memos];
      // メモ配列から該当の要素を削除
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
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
