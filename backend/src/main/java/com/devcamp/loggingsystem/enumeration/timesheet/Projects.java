package com.devcamp.loggingsystem.enumeration.timesheet;

public enum Projects {
    DEVCAMP("Devcamp"),
    CLIENTSATISFACTIONANDCOMMUNUCATIONPARTONETRAINING("Clients satisfaction " +
            "and Communication Part One Training"),
    CLIENTSATISFACTIONANDCOMMUNUCATIONPARTTWORAINING("Clients satisfaction " +
            "and Communication Part Two Training"),
    GIVINGANDRECEIVINGFEEDBACKTRAINING("Giving and Receiving FeedBack Training"),
    INTERVIEWINGSKILLSTRAINING("Interviewing Skills Training"),
    MENTORINGSKILLSTRAINING("Mentoring Skills Training"),
    SCRUMTRAINING("Scrum Training"),
    TASKDELEGATIONTRAINING("Task Delegation Training"),
    USERSTORIESANDDESIGNANALYSISTRAINING("User Stories and Design Analysis Training"),
    INTERNAL("Internal"),
    TIMEOFF("Time Off");

    private String displayName;

    Projects(String displayName) {
        this.displayName = displayName;
    }

    public String displayName() {
        return displayName;
    }

    @Override
    public String toString() {
        return displayName;
    }
}
