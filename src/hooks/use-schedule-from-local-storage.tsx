import { schedules } from '@/horaris/pre-made-schedules';
import { ScheduleData } from '@/types/types';
import { useEffect, useState } from 'react';

export function useScheduleFromLocalStorage () {
  const [scheduleData, setScheduleData] = useState<ScheduleData>(schedules[1].schedule);

  useEffect(() => {
    const getSchedule = async () => {
      const schedule = window.localStorage.getItem('schedule');
      if (schedule) {
        setScheduleData(JSON.parse(schedule));
      }
    };
    getSchedule();
  }, []);

  return { scheduleData, setScheduleData };
}
