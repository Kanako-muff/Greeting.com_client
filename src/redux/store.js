import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice"; // export default userSlice.reducer;

export const store = configureStore({
  reducer: {
    user: userReducer, // ユーザの状態を管理するリデューサーを指定
    // 他のリデューサーもここに追加できる
  },
});

export default store;
