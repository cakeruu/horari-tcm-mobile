import { Settings, RefreshCcw } from 'lucide-react';
import { TrashIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ScheduleData } from '@/types/types';
import { schedules } from '@/horaris/pre-made-schedules';

interface ConfigProps {
    nextWeek: string;
    setNextWeek: (week: string) => void;
    setSchedule: (schedule: ScheduleData) => void;
}

export function Configuration ({ nextWeek, setNextWeek, setSchedule }: ConfigProps) {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Settings className='size-5'/>
        </DropdownMenuTrigger>
        <DropdownMenuContent loop align='center'>
            <DropdownMenuItem onSelect={(event) => {
              event.preventDefault();
              setNextWeek(nextWeek);
            }}>
                <div className='flex flex-row w-full justify-between items-center gap-2'>
                  Veure setmana {nextWeek}
                  <CalendarDaysIcon className='size-4'/>
                </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => {
              const erasedSchedule = {
                startDate: new Date().toISOString(),
                courseYear: 'Nou curs',
                schedule: {
                  monday: [],
                  tuesday: [],
                  wednesday: [],
                  thursday: [],
                  friday: [],
                  saturday: [],
                  sunday: []
                }
              };
              setSchedule(erasedSchedule);
              window.localStorage.setItem('schedule', JSON.stringify(erasedSchedule));
            }}>
                <div className='flex flex-row w-full justify-between items-center gap-2'>
                  Esborrar horari
                  <TrashIcon className='size-4'/>
                </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => {
              setSchedule(schedules[0].schedule);
              window.localStorage.setItem('schedule', JSON.stringify(schedules[0].schedule));
            }}>
              <div className='flex flex-row w-full justify-between items-center gap-2'>
                Horari per defecte
                <RefreshCcw className='size-4'/>
              </div>
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
}
