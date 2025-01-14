import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import scheduleData from '@/horaris/horari-3r-2nTrim.json';
import { cn } from '@/lib/utils';

interface ClassInfo {
  courseCode: string;
  courseName: string;
  professor: string;
  location: string;
  timeStart: string;
  timeEnd: string;
  typeOfClass?: string;
  week?: string;
}

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const timeSlots = Array.from({ length: 11 }, (_, i) => {
  const hour = 8 + i;
  return `${hour.toString().padStart(2, '0')}:00`;
});

const getCurrentWeek = () => {
  const startDate = new Date(scheduleData.startDate);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
  return diffWeeks % 2 === 1 ? '1' : '2';
};

const getClassForTimeSlot = (day: string, time: string, selectedWeek: string): ClassInfo[] => {
  return (scheduleData.schedule[day as keyof typeof scheduleData.schedule] as ClassInfo[]).filter(cls => {
    const slotTime = parseInt(time.split(':')[0]);
    const startTime = parseInt(cls.timeStart.split(':')[0]);
    const endTime = parseInt(cls.timeEnd.split(':')[0]);
    return slotTime >= startTime && slotTime < endTime &&
           (cls.week === 'Both' || cls.week === selectedWeek || !cls.week);
  });
};

const getDayName = (day: string) => {
  const dayNames: Record<string, string> = {
    monday: 'Dilluns',
    tuesday: 'Dimarts',
    wednesday: 'Dimecres',
    thursday: 'Dijous',
    friday: 'Divendres',
    saturday: 'Dissabte',
    sunday: 'Diumenge'
  };
  return dayNames[day];
};

const getClassDuration = (timeStart: string, timeEnd: string) => {
  const start = parseInt(timeStart.split(':')[0]);
  const end = parseInt(timeEnd.split(':')[0]);
  const endMinutes = parseInt(timeEnd.split(':')[1]);

  // If end time is close to the next hour (>= 45 minutes), round up to the next hour
  const endHour = endMinutes >= 45 ? end + 1 : end;

  return endHour - start;
};

export function Schedule () {
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);
  const [selectedWeek, setSelectedWeek] = useState(getCurrentWeek());

  return (
    <>
    <Card className="max-w-7xl mx-auto bg-white p-6 shadow-lg min-w-[1200px] w-fit">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{scheduleData.courseYear}</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Setmana actual: {getCurrentWeek()}</span>
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
              className="h-14 border-b border-gray-200 flex items-center justify-end pr-4 text-sm text-gray-600"
            >
              {time}
            </div>
          ))}
        </div>

        {/* Days columns */}
        {days.map((day) => (
          <div key={day} className="border-l border-gray-200">
            <div className="h-9 border-b border-gray-200 flex items-center justify-center font-semibold text-gray-800 bg-gray-50">
              {getDayName(day)}
            </div>
            {timeSlots.map((time) => {
              const classes = getClassForTimeSlot(day, time, selectedWeek);
              return (
                <div key={`${day}-${time}`} className="h-14 border-b border-gray-200 relative">
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
                            height: `calc(${getClassDuration(classInfo.timeStart, classInfo.timeEnd) * 3.5}rem - 8px)`,
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
          <div className="py-4">
            <div className="space-y-3">
              <div className="grid grid-cols-[120px_1fr] items-center">
                <h4 className="text-sm font-medium text-gray-500">Codi del curs</h4>
                <p className="text-sm">{selectedClass?.courseCode}</p>
              </div>
              <div className="grid grid-cols-[120px_1fr] items-center">
                <h4 className="text-sm font-medium text-gray-500">Professor</h4>
                <p className="text-sm">{selectedClass?.professor}</p>
              </div>
              <div className="grid grid-cols-[120px_1fr] items-center">
                <h4 className="text-sm font-medium text-gray-500">Ubicació</h4>
                <p className="text-sm">{selectedClass?.location}</p>
              </div>
              <div className="grid grid-cols-[120px_1fr] items-center">
                <h4 className="text-sm font-medium text-gray-500">Horari</h4>
                <p className="text-sm">{selectedClass?.timeStart} - {selectedClass?.timeEnd}</p>
              </div>
              {selectedClass?.typeOfClass && (
                <div className="grid grid-cols-[120px_1fr] items-center">
                  <h4 className="text-sm font-medium text-gray-500">Tipus de classe</h4>
                  <p className="text-sm">{selectedClass.typeOfClass}</p>
                </div>
              )}
              {selectedClass?.week && (
                <div className="grid grid-cols-[120px_1fr] items-center">
                  <h4 className="text-sm font-medium text-gray-500">Setmana</h4>
                  <p className="text-sm">{selectedClass.week === 'Both' ? 'Ambdues setmanes' : `Setmana ${selectedClass.week}`}</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
