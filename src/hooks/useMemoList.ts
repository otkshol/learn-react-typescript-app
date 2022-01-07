import { useCallback, useState } from "react";

// メモ一覧に関するカスタムフック
export const useMemoList = () => {
  // メモ一覧 State
  const [memos, setMemos] = useState<string[]>([]);

  // メモ追加ロジック
  const addTodo = useCallback(
    (text: string) => {
      // State変更を正常に検知させるため新たな配列を生成
      const newMemos = [...memos];
      // テキストボックスの入力内容をメモ配列に追加
      newMemos.push(text);
      setMemos(newMemos);
    },
    // 依存配列にmemosを設定
    [memos]
  );

  // メモ削除ロジック
  const deleteTodo = useCallback(
    (index: number) => {
      // State変更を正常に検知させるため新たな配列を生成
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return { memos, addTodo, deleteTodo };
};
