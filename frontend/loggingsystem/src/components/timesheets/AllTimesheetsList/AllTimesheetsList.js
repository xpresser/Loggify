import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser, resetUser } from "src/store/slices/auth";
import { getUserTimesheets } from "../../../api/timesheets";
import { Timesheet } from "../Timesheet/Timesheet";

const AllTimesheetsList = () => {
  const user = useSelector((state) => state.auth.user.username);
  const testUserState = useSelector((state) => state?.auth.users);
  const [timesheets, setTimesheets] = React.useState([]);
  const [isTimesheetsFetch, setIsTimesheetsFetch] = React.useState(false);
  const testUser = testUserState?.[0] || [];
  const isLoading = testUserState?.isLoading ?? false;
  if (user === undefined || testUser === undefined) {
    window.location.reload();
  }
  const currentUser = user.toString();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCurrentUser(currentUser));
  }, [dispatch]);

  const timesheetsQuery = getUserTimesheets({
    userId: testUser.id,
    page: 0,
  });

  timesheetsQuery.then(function (response) {
    if (!isTimesheetsFetch) {
      let content = response.content;
      setTimesheets(content);
      setIsTimesheetsFetch(true);
    }
  });

  return (
    <Container>
      {timesheets.length === 0 ? (
        <div className="alert alert-info" role="alert">
          You do not have any timesheets!
        </div>
      ) : (
        timesheets.map((t) => {
          return <Timesheet user={user} timesheet={t} />;
        })
      )}
      {isLoading && <Spinner size="sm" />}
    </Container>
  );
};

export { AllTimesheetsList };
