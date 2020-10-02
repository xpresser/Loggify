import React from 'react';
import { createSlice } from "@reduxjs/toolkit";
import { getTimeSheetRowsForTimeSheet } from '../../api';

const initialState = {
    timesheetsRows: [],
    isLoading: false,
    error: null,
};

const { reducer: timesheetRowReducer, actions } = createSlice({
    name: 'timesheetRows',
    initialState,
    reducers: {
        fetchPostsStart: (state) => {
            state.isLoading = true;
        },
        fetchPostsSuccess: (state, action) => {
            state.isLoading = false;
            state.timesheetsRows.push(...action.payload.results.filter((x) =>
                !state.timesheetsRows.some((timesheetsRow) => timesheetsRow.id === x.id)));
            state.error = null;
            state.cursor = action.payload.cursor;
        },
        fetchPostsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
    //     fetchtimesheetRowsStart: (state, action) => {
    //         state[action.payload.postId] = {
    //             ...state[action.payload.postId],
    //             isLoading: true,
    //         }
    //     },
    //     fetchtimesheetRowsSuccess: (state, action) => {
    //         const currenttimesheetRows = state[action.payload.timesheetId]?.data || [];
    //         state[action.payload.timesheetId] = {
    //             ...state[action.payload.timesheetId],
    //             isLoading: false,
    //             error: null,
    //             data: [
    //                 ...currenttimesheetRows,
    //                 ...action.payload.results.filter(
    //                     (x) => !currenttimesheetRows.some((timesheetRow) => timesheetRow.id === x.id)
    //                 ),
    //             ],
    //         };
    //     },
    //     fetchCommentsFailure: (state, action) => {
    //         state[action.payload.timesheetId] = {
    //             ...state[action.payload.timesheetId],
    //             isLoading: false,
    //             error: action.payload.error,
    //         };
    //     },
    // }


})

export { timesheetRowReducer }

export const fetchNewsFeedPosts = () => {
    return async (dispatch ) => {
        try {
            dispatch(actions.fetchPostsStart());
            const results  = await getTimeSheetRowsForTimeSheet();
            dispatch(actions.fetchPostsSuccess( {results} ));
        } catch (err) {
            dispatch(actions.fetchPostsFailure(err.response.data.message));
        }
    }
}


// export const getRowsForTimesheet = (timesheetId) => {
//     return async (dispatch) => {
//         // const { cursor = null, limit = 5 } = getState().timesheetRows?.[0] || {};

//         try {
//             dispatch(actions.fetchtimesheetRowsStart({ timesheetId }));

//             const { results } = await getTimeSheetRowsForTimeSheet({

//             });
//             console.log(results)

//             dispatch(
//                 actions.fetchtimesheetRowsSuccess({ results })
//             );
//         } catch (err) {
//             dispatch(
//                 actions.fetchCommentsFailure({
//                     timesheetId,
//                     error: err?.response?.data?.message,
//                 })
//             );
//         }
//     };
// };