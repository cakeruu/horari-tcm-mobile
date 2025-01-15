import { ScheduleData } from '@/types/types';

type Schedule = {
  name: string;
  schedule: ScheduleData;
}

export const schedules: Schedule[] = [
  {
    name: '3r-2nTrim',
    schedule:
    {
      startDate: '2024-01-06',
      courseYear: '3r DB GEISI-GDPV',
      schedule: {
        monday: [],
        tuesday: [
          {
            id: '1',
            week: '2',
            typeOfClass: 'Pràctiques',
            courseCode: '107222',
            courseName: 'DISSENY DE BASES DE DADES',
            professor: 'Alfons Palacios González',
            location: 'TCM1-101',
            timeStart: '08:15',
            timeEnd: '10:00'
          },
          {
            id: '2',
            week: '1',
            typeOfClass: 'Teoria',
            courseCode: '107222',
            courseName: 'DISSENY DE BASES DE DADES',
            professor: 'Alfons Palacios González',
            location: 'TCM1-101',
            timeStart: '08:15',
            timeEnd: '10:00'
          },
          {
            id: '3',
            week: 'Both',
            typeOfClass: 'Teoria',
            courseCode: '107222',
            courseName: 'DISSENY DE BASES DE DADES',
            professor: 'Alfons Palacios González',
            location: 'TCM1-110',
            timeStart: '10:15',
            timeEnd: '12:00'
          },
          {
            id: '4',
            week: 'Both',
            typeOfClass: 'Teoria',
            courseCode: '107322',
            courseName: 'SISTEMES OPERATIUS',
            professor: 'Pere Tuset Peirò',
            location: 'TCM1-202',
            timeStart: '12:15',
            timeEnd: '14:00'
          },
          {
            id: '5',
            week: 'Both',
            typeOfClass: 'Teoria',
            courseCode: '107324',
            courseName: 'DISSENY 3D I',
            professor: 'Javier Caimel Moreno',
            location: 'TCM1-1L1',
            timeStart: '15:00',
            timeEnd: '16:45'
          },
          {
            id: '6',
            week: 'Both',
            typeOfClass: 'Pràctiques',
            courseCode: '107324',
            courseName: 'DISSENY 3D I',
            professor: 'Javier Caimel Moreno',
            location: 'TCM1-1L1',
            timeStart: '17:00',
            timeEnd: '18:45'
          }
        ],
        wednesday: [
          {
            id: '7',
            week: 'Both',
            typeOfClass: 'Pràctiques',
            courseCode: '107321',
            courseName: "DISSENY DE SISTEMES D'INFORMACIÓ",
            professor: 'Josep Roure Alcobé',
            location: 'TCM1-1L2',
            timeStart: '08:15',
            timeEnd: '12:00'
          },
          {
            id: '8',
            week: 'Both',
            typeOfClass: 'Pràctiques',
            courseCode: '107322',
            courseName: 'SISTEMES OPERATIUS',
            professor: 'Pere Tuset Peirò',
            location: 'TCM1-1L2',
            timeStart: '12:15',
            timeEnd: '14:00'
          }
        ],
        thursday: [
          {
            id: '9',
            week: '1',
            typeOfClass: 'Pràctiques',
            courseCode: '107323',
            courseName: 'SISTEMES GESTORS DE CONTINGUT I COMERÇ ELECTRÒNIC',
            professor: 'Jordi Jordano Massó',
            location: 'TCM1-1L2',
            timeStart: '10:15',
            timeEnd: '12:00'
          },
          {
            id: '10',
            week: 'Both',
            typeOfClass: 'Teoria',
            courseCode: '107321',
            courseName: "DISSENY DE SISTEMES D'INFORMACIÓ",
            professor: 'Josep Roure Alcobé',
            location: 'TCM1-207',
            timeStart: '12:15',
            timeEnd: '14:00'
          },
          {
            id: '11',
            week: 'Both',
            typeOfClass: 'Teoria',
            courseCode: '107324',
            courseName: 'DISSENY 3D I',
            professor: 'Javier Caimel Moreno',
            location: 'TCM1-1L1',
            timeStart: '15:00',
            timeEnd: '16:45'
          }
        ],
        friday: [
          {
            id: '12',
            week: 'Both',
            typeOfClass: 'Teoria',
            courseCode: '107323',
            courseName: 'SISTEMES GESTORS DE CONTINGUT I COMERÇ ELECTRÒNIC',
            professor: 'Jordi Jordano Massó',
            location: 'TCM1-105',
            timeStart: '09:00',
            timeEnd: '12:00'
          },
          {
            id: '13',
            week: 'Both',
            typeOfClass: 'Teoria',
            courseCode: '107322',
            courseName: 'SISTEMES OPERATIUS',
            professor: 'Pere Tuset Peirò',
            location: 'TCM1-110',
            timeStart: '12:15',
            timeEnd: '14:00'
          }
        ],
        saturday: [],
        sunday: []
      }
    }
  }
];
