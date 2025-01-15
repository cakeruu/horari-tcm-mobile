import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ClassInfo, DaysOfWeek, ScheduleData } from '@/types/types';

const ScheduleSelects = ({
  scheduleData,
  setScheduleData,
  selectedClass
}: {
  scheduleData: ScheduleData;
  setScheduleData: React.Dispatch<React.SetStateAction<ScheduleData>>;
  selectedClass: ClassInfo;
}) => {
  // Helper function to update schedule data and save to localStorage
  const updateScheduleAndSave = (updatedData: ScheduleData) => {
    setScheduleData(updatedData);
    window.localStorage.setItem('schedule', JSON.stringify(updatedData));
  };

  // Helper function to find and update a class in the schedule
  const updateClassInSchedule = (updateFn: (classItem: ClassInfo) => ClassInfo) => {
    const updatedData = {
      ...scheduleData,
      schedule: Object.entries(scheduleData.schedule).reduce((acc, [day, classes]) => ({
        ...acc,
        [day]: classes.map(classItem =>
          classItem.id === selectedClass.id
            ? updateFn(classItem)
            : classItem
        )
      }), {} as Record<DaysOfWeek, ClassInfo[]>)
    };

    updateScheduleAndSave(updatedData);
    return updatedData;
  };

  // Handler for week selection
  const handleWeekChange = (value: string) => {
    setScheduleData(updateClassInSchedule(classItem => ({
      ...classItem,
      week: value
    })));
  };

  // Handler for class type selection
  const handleTypeChange = (value: string) => {
    setScheduleData(updateClassInSchedule(classItem => ({
      ...classItem,
      typeOfClass: value
    })));
  };

  return (
    <>
      {/* Week Select */}
      {selectedClass?.week && (
        <div className="grid grid-cols-[120px_1fr] items-center">
          <h4 className="text-sm font-medium text-gray-500">Setmana</h4>
          <Select onValueChange={handleWeekChange}>
            <SelectTrigger>
              <SelectValue
                placeholder={selectedClass.week === 'Both' ? 'Ambdues' : `Setmana ${selectedClass.week}`}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Setmana 1</SelectItem>
              <SelectItem value="2">Setmana 2</SelectItem>
              <SelectItem value="Both">Ambdues</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Class Type Select */}
      {selectedClass?.typeOfClass && (
        <div className="grid grid-cols-[120px_1fr] items-center">
          <h4 className="text-sm font-medium text-gray-500">Tipus de classe</h4>
          <Select onValueChange={handleTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder={selectedClass.typeOfClass} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Teoria">Teoria</SelectItem>
              <SelectItem value="Pràctiques">Pràctiques</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
    </>
  );
};

export default ScheduleSelects;
