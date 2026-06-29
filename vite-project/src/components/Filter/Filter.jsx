import { useDispatch, useSelector } from "react-redux";
import { filterChange } from "../redux/slices/filterSlice";

export function Filter() {
  const filter = useSelector(state => state.contactsData.filter);
  const dispatch = useDispatch()

  return (
    <label>
      Search:
      <input type="text" onChange={(e) => dispatch(filterChange(e))} value={filter} />
    </label>
  );
}
