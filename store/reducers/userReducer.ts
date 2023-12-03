import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  accountEnabled: boolean;
  subscriptionStatus: string;
  accessToken: string;
}

const userInitState: IAppState = {
  accountEnabled: false,
  subscriptionStatus: "UNSUBSCRIBED",
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: userInitState,
  reducers: {
    updateAppUser: (
      state,
      payload: { payload: Partial<IAppState>; type: string }
    ) => {
      return { ...state, ...payload.payload };
    },
    logoutUser: (state) => {
      return userInitState;
    },
  },
});

export const { updateAppUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
