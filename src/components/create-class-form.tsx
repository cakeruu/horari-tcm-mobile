import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ClassInfo, ScheduleData, DaysOfWeek } from '@/types/types';

interface CreateClassFormProps {
  scheduleData: ScheduleData;
  setScheduleData: React.Dispatch<React.SetStateAction<ScheduleData>>;
  onSuccess: () => void;
  selectedDay: DaysOfWeek | null;
}

export function CreateClassForm ({ scheduleData, setScheduleData, onSuccess, selectedDay }: CreateClassFormProps) {
  const handleCreateClass = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Validate required fields
    const requiredFields = [
      'courseCode', 'courseName', 'professor', 'location',
      'timeStart', 'timeEnd', 'typeOfClass', 'week'
    ];

    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return;
      }
    }

    if (!selectedDay) {
      return;
    }

    const newClass: ClassInfo = {
      courseCode: formData.get('courseCode') as string,
      courseName: formData.get('courseName') as string,
      professor: formData.get('professor') as string,
      location: formData.get('location') as string,
      timeStart: formData.get('timeStart') as string,
      timeEnd: formData.get('timeEnd') as string,
      typeOfClass: formData.get('typeOfClass') as string,
      week: formData.get('week') as string
    };

    // Update the schedule for the selected day
    const updatedSchedule = {
      ...scheduleData,
      schedule: {
        ...scheduleData.schedule,
        [selectedDay]: [...scheduleData.schedule[selectedDay], newClass]
      }
    };

    setScheduleData(updatedSchedule);
    localStorage.setItem('schedule', JSON.stringify(updatedSchedule));

    // Reset form
    event.currentTarget.reset();
    onSuccess();
  };

  return (
    <form onSubmit={handleCreateClass} className="space-y-4">
      <Input name="courseCode" placeholder="Codi del curs" required />
      <Input name="courseName" placeholder="Nom del curs" required />
      <Input name="professor" placeholder="Professor" required />
      <Input name="location" placeholder="Lloc" required />
      <Input
        name="timeStart"
        placeholder="Hora d'inici (HH:mm)"
        pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
        required
      />
      <Input
        name="timeEnd"
        placeholder="Hora de finalització (HH:mm)"
        pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
        required
      />

      <Select name="typeOfClass" required>
        <SelectTrigger>
          <SelectValue placeholder="Tipus de classe" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Teoria">Teoria</SelectItem>
          <SelectItem value="Pràctiques">Pràctiques</SelectItem>
        </SelectContent>
      </Select>

      <Select name="week" required>
        <SelectTrigger>
          <SelectValue placeholder="Setmana" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Setmana 1</SelectItem>
          <SelectItem value="2">Setmana 2</SelectItem>
          <SelectItem value="Both">Ambdues</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full">Crear</Button>
    </form>
  );
}

export default CreateClassForm;
