import { CapsuleT } from "../db";

export type CapsulesStateT = CapsuleT[];

export type RootStateT = {
  capsules: CapsulesStateT;
};
