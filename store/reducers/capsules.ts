import ALL_CAPSULES from "../../db/capsules";
import {
  CapsulesActionT,
  CapsulesStateT,
  ToggleFavoriteActionT,
  TOGGLE_FAVORITE,
  UpdateCapsuleStorageActionT,
  UPDATE_CAPSULE_STORAGE,
} from "../../types/store";

const initialState: CapsulesStateT = ALL_CAPSULES;

const toggleFavorite = (
  state: CapsulesStateT,
  action: ToggleFavoriteActionT
): CapsulesStateT =>
  state.map((cap) =>
    cap.id === action.capsuleId ? { ...cap, isFavorite: !cap.isFavorite } : cap
  );

const updateCapsuleStorage = (
  state: CapsulesStateT,
  action: UpdateCapsuleStorageActionT
): CapsulesStateT =>
  state.map((cap) =>
    cap.id === action.capsuleId
      ? { ...cap, inStock: action.newStorageValue }
      : cap
  );

const capsulesReducer = (
  state = initialState,
  action: CapsulesActionT
): CapsulesStateT => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return toggleFavorite(state, action);
    case UPDATE_CAPSULE_STORAGE:
      return updateCapsuleStorage(state, action);
    default:
      return state;
  }
};

export default capsulesReducer;
