import * as ActionType from '../Constant/RegionConstant';

// GET REGION
export const GetRegionRequest = () => ({
  type: ActionType.GET_REGION_REQUEST,
});

export const GetRegionSuccess = (payload) => ({
  type: ActionType.GET_REGION_SUCCESS,
  payload,
});

export const GetRegionFailed = (payload) => ({
  type: ActionType.GET_REGION_FAILED,
  payload,
});

// ADD REGION
export const AddRegionRequest = (payload) => ({
  type: ActionType.ADD_REGION_REQUEST,
  payload,
});

export const AddRegionSuccess = (payload) => ({
  type: ActionType.ADD_REGION_SUCCESS,
  payload,
});

export const AddRegionFailed = (payload) => ({
  type: ActionType.ADD_REGION_FAILED,
  payload,
});

// DELETE REGION
export const DeleteRegionRequest = (payload) => ({
  type: ActionType.DELETE_REGION_REQUEST,
  payload,
});

export const DeleteRegionSuccess = (payload) => ({
  type: ActionType.DELETE_REGION_SUCCESS,
  payload,
});

export const DeleteRegionFailed = (payload) => ({
  type: ActionType.DELETE_REGION_FAILED,
  payload,
});

// UPDATE REGION
export const UpdateRegionRequest = (payload, id) => ({
  type: ActionType.UPDATE_REGION_REQUEST,
  payload,
  id,
});

export const UpdateRegionSuccess = (payload) => ({
  type: ActionType.UPDATE_REGION_SUCCESS,
  payload,
});

export const UpdateRegionFailed = (payload) => ({
  type: ActionType.UPDATE_REGION_FAILED,
  payload,
});
