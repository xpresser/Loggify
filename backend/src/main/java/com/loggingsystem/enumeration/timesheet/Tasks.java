package com.loggingsystem.enumeration.timesheet;

public enum Tasks {
    LEARNING("Learning"),
    TRAINING("Training"),
    ADMINISTRATIVE("Administrative"),
    RESEARCHPROCESSIMPROVEMENT("Research or Process Improvement"),
    SALESANDPROSPECTING("Sales and Prospecting"),
    BENCHTIME("Bench Time"),
    HIRINGRECRUITING("Hiring or Recruiting"),
    QMSTRAINING("QMS Training"),
    BRANDAWARENESS("Brand Awareness"),
    PTOSTANDARTTIMEOOFF("PTO - Standard Time Off"),
    COMPANYHOLIDAY("Company Holiday"),
    PTOJURYDUTY("PTO - Jury Duty"),
    PTOFMLA("PTO - FMLA (US ONLY)"),
    PTOSICKLEAVE("PTO - Sick Leave"),
    UPTO("UPTO"),
    PTOROLLOVER("PTO - Rollover"),
    PTOBEREAVEMENT("PTO - Bereavement"),
    PTOBGMATERNALPATERNALLEAVE("PTO - Maternal or Paternal Leave"),
    PTOMARRIAGELEAVE("PTO - Marriage (BG ONLY)");

    private String displayName;

    Tasks(String displayName) {
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
