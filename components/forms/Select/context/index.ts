import { createContext } from "react";
import { SelectItem } from "../helper";

interface SelectContext {
  list: SelectItem[];
  handleSelect: (item: SelectItem) => void;
  multiple: boolean;
  needCheckbox: boolean;
  open: boolean;
  handleOpen: (value: boolean) => void;
  handleSearch: (value: string) => void;
  removeItem: (item: SelectItem) => void;
}

export const selectContext = createContext<SelectContext>({
  list: [],
  handleSelect: (item: SelectItem) => {},
  multiple: false,
  needCheckbox: false,
  open: false,
  handleOpen: (value: boolean) => {},
  handleSearch: (value: string) => {},
  removeItem: (item: SelectItem) => {},
});
