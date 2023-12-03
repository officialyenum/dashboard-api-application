import { ChangeEvent, useContext } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { selectContext } from "../context";
import { SelectItem } from "../helper";
import ListBox from "./ListBox";
import { BaseInput } from "components/forms/Input/BaseInput";

const Basic = () => {
  const { list, open, handleOpen, multiple, handleSearch, removeItem } =
    useContext(selectContext);

  const handleClick = () => handleOpen(!open);

  const handleSearchDrop = (event: ChangeEvent<HTMLInputElement>) =>
    handleSearch(event?.target?.value);

  const selected = list.filter((item) => item.selected) ?? [];

  return (
    <div className={"select relative"}>
      <div
        className={
          "flex items-center justify-between bg-blue_fade p-2 py-4 rounded-md"
        }
        onClick={handleClick}
      >
        <div className={""}>
          {!multiple ? (
            list.find((item) => item.selected)?.title || "Select option"
          ) : selected.length > 0 ? (
            <div className="flex gap-2 flex-wrap">
              {selected.map((item) => (
                <div
                  key={item.value}
                  className="bg-blue-500 text-center overflow-hidden flex items-center gap-3 text-xs text-white justify-between rounded-lg"
                >
                  <span className="p-2">{item.title}</span>
                  <span
                    onClick={() => removeItem(item)}
                    className="bg-red-500 h-full w-[30px] flex items-center justify-center cursor-pointer"
                  >
                    X
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm ml-4">Select option</p>
          )}
        </div>
        <div className={"select-label_area-icon"}>
          {open ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
        </div>
      </div>
      {open && (
        <div className={"select-drop w-full h-fit bg-white "}>
          <div className={"select-drop_search"}>
            <BaseInput
              name="search"
              type={"text"}
              placeholder={"Search"}
              onChange={handleSearchDrop}
            />
          </div>
          <ul className={"flex flex-col gap-1 p-2"}>
            {list
              .filter((item) => item.searchMatched)
              .map((item) => {
                return <ListBox item={item} key={item.value} />;
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Basic;
