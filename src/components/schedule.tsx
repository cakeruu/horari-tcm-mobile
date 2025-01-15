import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { cn, getClassDuration, getClassForTimeSlot, getCurrentWeek, getDayName } from '@/lib/utils';
import { ClassInfo, DaysOfWeek } from '@/types/types';
import { useScheduleFromLocalStorage } from '../hooks/use-schedule-from-local-storage';
import EditableScheduleFields from './editable-schedule-fields';
import CreateClassForm from './create-class-form';

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const timeSlots = Array.from({ length: 11 }, (_, i) => {
  const hour = 8 + i;
  return `${hour.toString().padStart(2, '0')}:00`;
});

export function Schedule () {
  const { scheduleData, setScheduleData } = useScheduleFromLocalStorage();
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);
  const [selectedWeek, setSelectedWeek] = useState(getCurrentWeek(scheduleData));
  const [isCreationDialogOpen, setIsCreationDialogOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<DaysOfWeek | null>(null);

  return (
    <>
    <Card className="max-w-7xl mx-auto bg-white p-6 shadow-lg min-w-[1200px] w-fit">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{scheduleData.courseYear}</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Setmana actual: {getCurrentWeek(scheduleData)}</span>
          </div>
          <Button
            variant="outline"
            onClick={() => setSelectedWeek(selectedWeek === '1' ? '2' : '1')}
            className='w-[140px]'
          >
            Veure Setmana {selectedWeek === '1' ? '2' : '1'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-[auto_repeat(7,1fr)] relative">
        {/* Time column */}
        <div className="relative z-10">
          <div className="h-9 border-b border-gray-200 flex items-center justify-end pr-4 font-semibold text-gray-600">
            Hora
          </div>
          {timeSlots.map((time) => (
            <div
              key={time}
              className="h-[50px] border-b border-gray-200 flex items-center justify-end pr-4 text-sm text-gray-600"
            >
              {time}
            </div>
          ))}
        </div>

        {/* Days columns */}
        {days.map((day) => (
          <div key={day} className="border-l border-gray-200">
            <div className="cursor-cell h-9 border-b border-gray-200 flex items-center justify-center font-semibold text-gray-800 bg-gray-50"
            onClick={() => {
              setSelectedDay(day as DaysOfWeek);
              setIsCreationDialogOpen(true);
            }}>
              {getDayName(day)}
            </div>
            {timeSlots.map((time) => {
              const classes = getClassForTimeSlot(day, time, selectedWeek, scheduleData);
              return (
                <div key={`${day}-${time}`} className="h-[50px] border-b border-gray-200 relative">
                  {classes.map((classInfo) =>
                    parseInt(classInfo.timeStart.split(':')[0]) === parseInt(time.split(':')[0]) && (
                      <>
                        <div
                          key={`${classInfo.courseCode}-${classInfo.location}`}
                          onClick={() => setSelectedClass(classInfo)}
                          className={cn(
                            'absolute rounded p-2 text-xs',
                            classInfo.typeOfClass === 'Teoria' ? 'bg-blue-100' : 'bg-green-100',
                            'hover:opacity-90 transition-opacity cursor-pointer'
                          )}
                          style={{
                            height: `calc(${getClassDuration(classInfo.timeStart, classInfo.timeEnd) * 3}rem - 8px)`,
                            width: '90%',
                            left: '5%',
                            marginTop: '4px',
                            marginBottom: '4px',
                            zIndex: 20
                          }}
                        >
                          <div className="font-semibold truncate">{classInfo.courseName}</div>
                          <div className="text-gray-600 truncate">{classInfo.professor}</div>
                          <div className="text-gray-500 truncate">{classInfo.location}</div>
                          <div className="text-gray-500">
                            {classInfo.timeStart} - {classInfo.timeEnd}
                          </div>
                        </div>
                      </>
                    )
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </Card>

      <Dialog open={!!selectedClass} onOpenChange={() => setSelectedClass(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold border-b pb-2">
              {selectedClass?.courseName}
            </DialogTitle>
          </DialogHeader>
          <EditableScheduleFields scheduleData={scheduleData} setScheduleData={setScheduleData} selectedClass={selectedClass!} />
        </DialogContent>
      </Dialog>

      <Dialog open={isCreationDialogOpen} onOpenChange={() => setIsCreationDialogOpen(false)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold border-b pb-2">
              Nova classe
            </DialogTitle>
          </DialogHeader>
          <CreateClassForm scheduleData={scheduleData} setScheduleData={setScheduleData} onSuccess={() => setIsCreationDialogOpen(false)} selectedDay={selectedDay} />
        </DialogContent>
      </Dialog>
    </>
  );
}
