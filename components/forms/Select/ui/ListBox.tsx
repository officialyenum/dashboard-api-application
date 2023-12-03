import { useState, useContext } from "react";
import { selectContext } from "../context";
import { FormCheckbox } from "components/forms/Checkbox";
import { SelectItem } from "../helper";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  item: SelectItem;
}

const ListBox = ({ item }: Props) => {
  // const [selected, setSelected] = useState<boolean>(false);

  const { handleSelect, needCheckbox, multiple, handleOpen } =
    useContext(selectContext);

  const handleItemClick = () => {
    handleSelect(item);
    // setSelected(!selected);
    !multiple && handleOpen(false);
  };

  return (
    <li
      className={twMerge(
        `bg-gray-100 rounded-lg flex items-center gap-3 py-2 px-4`,
        item?.selected && "bg-blue-100"
      )}
      onClick={handleItemClick}
    >
      {needCheckbox && (
        <div className={"list-box_checkbox"}>
          <FormCheckbox name={item.title} checked={item.selected} />
        </div>
      )}
      <p>{item?.title}</p>
    </li>
  );
};

export default ListBox;
