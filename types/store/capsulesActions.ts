export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const UPDATE_CAPSULE_STORAGE = "UPDATE_CAPSULE_STORAGE";

export type ToggleFavoriteActionT = {
  type: typeof TOGGLE_FAVORITE;
  capsuleId: string;
};

export type UpdateCapsuleStorageActionT = {
  type: typeof UPDATE_CAPSULE_STORAGE;
  capsuleId: string;
  newStorageValue: number;
};

export type CapsulesActionT =
  | ToggleFavoriteActionT
  | UpdateCapsuleStorageActionT;
