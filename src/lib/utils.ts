import { ClassInfo, ScheduleData } from '@/types/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentWeek (scheduleData: ScheduleData) {
  const startDate = new Date(scheduleData.startDate);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
  return diffWeeks % 2 === 1 ? '1' : '2';
}

export function getClassForTimeSlot (day: string, time: string, selectedWeek: string, scheduleData: ScheduleData): ClassInfo[] {
  return (scheduleData.schedule[day as keyof typeof scheduleData.schedule] as ClassInfo[]).filter(cls => {
    const slotTime = parseInt(time.split(':')[0]);
    const startTime = parseInt(cls.timeStart.split(':')[0]);
    const endTime = parseInt(cls.timeEnd.split(':')[0]);
    return slotTime >= startTime && slotTime < endTime &&
           (cls.week === 'Both' || cls.week === selectedWeek || !cls.week);
  });
}

const dayNames: Record<string, string> = {
  monday: 'Dilluns',
  tuesday: 'Dimarts',
  wednesday: 'Dimecres',
  thursday: 'Dijous',
  friday: 'Divendres',
  saturday: 'Dissabte',
  sunday: 'Diumenge'
};

export function getDayName (day: string) {
  return dayNames[day];
}

export function getClassDuration (timeStart: string, timeEnd: string) {
  const start = parseInt(timeStart.split(':')[0]);
  const end = parseInt(timeEnd.split(':')[0]);
  const endMinutes = parseInt(timeEnd.split(':')[1]);

  // If end time is close to the next hour (>= 45 minutes), round up to the next hour
  const endHour = endMinutes >= 45 ? end + 1 : end;

  return endHour - start;
}
