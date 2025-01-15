import { schedules } from '@/horaris/pre-made-schedules';
import { ScheduleData } from '@/types/types';
import { useEffect, useState } from 'react';

export function useScheduleFromLocalStorage () {
  const [scheduleData, setScheduleData] = useState<ScheduleData>(schedules[0].schedule);

  useEffect(() => {
    const schedule = localStorage.getItem('schedule');
    if (schedule) {
      setScheduleData(JSON.parse(schedule));
    }
  }, []);

  return { scheduleData, setScheduleData };
}
