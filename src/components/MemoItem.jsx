import { useSelector } from "react-redux";
const MemoItem = ({ item }) => {
  return (
    <li>
      {item.user} : {item.text} {item.date.month}/{item.date.day}
    </li>
  );
};

export default MemoItem;
