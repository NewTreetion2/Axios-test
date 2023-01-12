import { atom } from "recoil";

export const userData = atom({
  key: "userData",
  default: [],
});

export const modalOpen = atom({
  key: "modalOpen",
  default: false,
});

export const focusUserId = atom({
  key: "focusUserId",
  default: 0,
});
