import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ADD_MEMO } from "../modules/memo";
import MemoItem from "./MemoItem";

const MemoBoard = () => {
  const memolist = useSelector((state) => {
    return state.memo.memolist;
  });
  const dispatch = useDispatch();
  const [userName, setUserName] = useState();
  const [memoText, setMemoText] = useState();
  const onChangeName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeText = (e) => {
    setMemoText(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(ADD_MEMO(userName, memoText));
  };
  console.log(memolist);
  return (
    <div>
      <form className="input_form" onSubmit={onSubmitForm}>
        <label htmlFor="user_name">이름</label>
        <input
          type="text"
          id="user_name"
          onChange={onChangeName}
          value={userName || ""}
        ></input>
        <input
          type="text"
          id="user_input"
          placeholder="내용을 입력하세요"
          onChange={onChangeText}
          value={memoText || ""}
        ></input>
        <button type="submit">작성</button>
      </form>
      <ul>
        {memolist
          ? memolist.map((item, idx) => {
              return <MemoItem key={idx} item={item} />;
            })
          : null}
      </ul>
    </div>
  );
};

export default MemoBoard;
