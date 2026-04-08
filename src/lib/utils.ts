import { ClassInfo, ScheduleData } from '@/types/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentWeek(scheduleData: ScheduleData) {
  const startDate = new Date(scheduleData.startDate);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
  return diffWeeks % 2 === 1 ? '1' : '2';
}

export function getClassForTimeSlot(day: string, time: string, selectedWeek: string, scheduleData: ScheduleData): ClassInfo[] {
  return (scheduleData.schedule[day as keyof typeof scheduleData.schedule] as ClassInfo[]).filter(cls => {
    const slotHour = parseInt(time.split(':')[0]);
    const startHour = parseInt(cls.timeStart.split(':')[0]);
    const startMinutes = parseInt(cls.timeStart.split(':')[1]);
    const effectiveStartHour = startMinutes >= 45 ? startHour + 1 : startHour;
    const endHour = parseInt(cls.timeEnd.split(':')[0]);
    const endMinutes = parseInt(cls.timeEnd.split(':')[1]);
    const effectiveEndHour = endMinutes >= 45 ? endHour + 1 : endHour;
    return slotHour >= effectiveStartHour && slotHour < effectiveEndHour &&
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

export function getDayName(day: string) {
  return dayNames[day];
}

export function getClassDuration(timeStart: string, timeEnd: string) {
  const startHour = parseInt(timeStart.split(':')[0]);
  const startMinutes = parseInt(timeStart.split(':')[1]);
  const endHour = parseInt(timeEnd.split(':')[0]);
  const endMinutes = parseInt(timeEnd.split(':')[1]);
  const totalStartMinutes = startHour * 60 + startMinutes;
  const totalEndMinutes = endHour * 60 + endMinutes;
  const diffMinutes = totalEndMinutes - totalStartMinutes;
  return Math.ceil(diffMinutes / 60);
}
