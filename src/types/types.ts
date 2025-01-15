
export interface ClassInfo {
    courseCode: string;
    courseName: string;
    professor: string;
    location: string;
    timeStart: string;
    timeEnd: string;
    typeOfClass: string;
    week: string;
}

export type DaysOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export interface ScheduleData {
    startDate: string;
    courseYear: string;
    schedule: Record<DaysOfWeek, ClassInfo[]>;
}
