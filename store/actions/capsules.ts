import {
  ToggleFavoriteActionT,
  TOGGLE_FAVORITE,
  UpdateCapsuleStorageActionT,
  UPDATE_CAPSULE_STORAGE,
} from "../../types";

export const toggleFavorite = (capsuleId: string): ToggleFavoriteActionT => ({
  type: TOGGLE_FAVORITE,
  capsuleId,
});

export const updateCapsuleStorage = (
  capsuleId: string,
  newStorageValue: number
): UpdateCapsuleStorageActionT => ({
  type: UPDATE_CAPSULE_STORAGE,
  capsuleId,
  newStorageValue,
});
