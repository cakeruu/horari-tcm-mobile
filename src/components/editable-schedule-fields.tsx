import React from 'react';
import { ClassInfo, DaysOfWeek, ScheduleData } from '@/types/types';
import ScheduleSelects from './schedule-selects';

function EditableScheduleFields ({
  scheduleData,
  setScheduleData,
  selectedClass
}: {
  scheduleData: ScheduleData;
  setScheduleData: React.Dispatch<React.SetStateAction<ScheduleData>>;
  selectedClass: ClassInfo;
}) {
  // Helper function to update schedule data and save to localStorage
  const updateScheduleAndSave = (updatedData: ScheduleData) => {
    setScheduleData(updatedData);
    localStorage.setItem('schedule', JSON.stringify(updatedData));
  };

  // Helper function to find and update a class in the schedule
  const updateClassInSchedule = (updateFn: (classItem: ClassInfo) => ClassInfo) => {
    const updatedData = {
      ...scheduleData,
      schedule: Object.entries(scheduleData.schedule).reduce((acc, [day, classes]) => ({
        ...acc,
        [day]: classes.map(classItem =>
          classItem.timeStart === selectedClass.timeStart &&
          classItem.courseCode === selectedClass.courseCode
            ? updateFn(classItem)
            : classItem
        )
      }), {} as Record<DaysOfWeek, ClassInfo[]>)
    };

    updateScheduleAndSave(updatedData);
    return updatedData;
  };

  // Handler for contentEditable fields
  const handleContentEdit = (
    field: keyof ClassInfo,
    event: React.FormEvent<HTMLParagraphElement>
  ) => {
    const content = event.currentTarget.textContent || '';

    if (field === 'timeStart' || field === 'timeEnd') {
      // Handle time field specially
      const times = content.split('-').map(t => t.trim());
      if (times.length === 2) {
        setScheduleData(updateClassInSchedule(classItem => ({
          ...classItem,
          timeStart: times[0],
          timeEnd: times[1]
        })));
      }
    } else {
      setScheduleData(updateClassInSchedule(classItem => ({
        ...classItem,
        [field]: content
      })));
    }
  };

  return (
    <div className="py-4">
      <div className="space-y-3">
        <div className="grid grid-cols-[120px_1fr] items-center">
          <h4 className="text-sm font-medium text-gray-500">Codi del curs</h4>
          <p
            contentEditable
            spellCheck={false}
            className="text-sm outline-none border-b border-transparent focus:border-gray-300 px-1"
            onBlur={(e) => handleContentEdit('courseCode', e)}
            suppressContentEditableWarning
          >
            {selectedClass?.courseCode}
          </p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center">
          <h4 className="text-sm font-medium text-gray-500">Professor</h4>
          <p
            contentEditable
            spellCheck={false}
            className="text-sm outline-none border-b border-transparent focus:border-gray-300 px-1"
            onBlur={(e) => handleContentEdit('professor', e)}
            suppressContentEditableWarning
          >
            {selectedClass?.professor}
          </p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center">
          <h4 className="text-sm font-medium text-gray-500">Ubicació</h4>
          <p
            contentEditable
            spellCheck={false}
            className="text-sm outline-none border-b border-transparent focus:border-gray-300 px-1"
            onBlur={(e) => handleContentEdit('location', e)}
            suppressContentEditableWarning
          >
            {selectedClass?.location}
          </p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center">
          <h4 className="text-sm font-medium text-gray-500">Horari</h4>
          <p
            contentEditable
            spellCheck={false}
            className="text-sm outline-none border-b border-transparent focus:border-gray-300 px-1"
            onBlur={(e) => handleContentEdit('timeStart', e)}
            suppressContentEditableWarning
          >
            {selectedClass?.timeStart} - {selectedClass?.timeEnd}
          </p>
        </div>
        <ScheduleSelects
          scheduleData={scheduleData}
          setScheduleData={setScheduleData}
          selectedClass={selectedClass}
        />
      </div>
    </div>
  );
}

export default EditableScheduleFields;
