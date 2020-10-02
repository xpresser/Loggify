import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { getTimeSheetRowsForTimeSheet } from "../../api/timeSheetRows";
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { TimesheetRow } from './TimesheetRow';
import { fetchNewsFeedPosts, getRowsForTimesheet } from '../../store/slices/timeSheetRows';

const LoadMoreButton = styled.span`
color: #969696;
cursor: pointer;
margin-bottom: .75rem;
display:inline-block;
`

function TimesheetRowList() {

    const timesheetRows = useSelector(state => state.timesheetRows.timesheetsRows)
    console.log(timesheetRows)
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchNewsFeedPosts())
    }, [dispatch])

    if (timesheetRows === undefined) {
        return (
            <Spinner animation="border" variant="primary">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }  


    return (

        <div>

            {timesheetRows.map((timesheetRow) => (

                <TimesheetRow key={timesheetRow.id} timesheetRow={timesheetRow}></TimesheetRow>
            ))}

        </div>
    );


    // const dispatch = useDispatch();
    // const timesheetState = useSelector((state) => state.comments?.[timesheet.id]);
    // const timesheetsRows = timesheetState?.data || [];
    // const isLoading = timesheetState?.isLoading ?? false;
    // const cursor = timesheetState?.cursor;
    // const hasMore = !!(timesheetsRows.length && cursor)


    // return (
    //     <Container>
    //         <div>
    //         {timesheetsRows.map((timesheetsRow) => (
    //             <TimesheetRow key={timesheetsRow?.id} timesheetsRow={timesheetsRow} timesheetId={timesheet} />
    //         ))}

    //         {(hasMore) && cursor !==null && (<LoadMoreButton onClick={() => {
    //             dispatch(getRowsForTimesheet(timesheet.id))
    //         }}>
    //             {timesheetsRows.length > 0 ? 'Show more timesheets' : 'Show comments'}
    //         </LoadMoreButton>
    //         )}
    //         </div>
    //     </Container>
    // )
}

export { TimesheetRowList }