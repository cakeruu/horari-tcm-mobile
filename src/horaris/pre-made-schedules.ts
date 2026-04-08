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
  },
  {
    name: '4t-3rTrim',
    schedule: {
      startDate: '2026-04-07',
      courseYear: '4t DB GEISI-GDPV',
      schedule: {
        monday: [
          {
            id: '1',
            week: 'Both',
            typeOfClass: 'Teoria',
            courseCode: '107333',
            courseName: "TÈCNIQUES D'INTEL·LIGÈNCIA ARTIFICIAL",
            professor: 'Obiol Madrid, Sandra',
            location: 'TCM1-201',
            timeStart: '08:15',
            timeEnd: '10:00'
          },
          {
            id: '2',
            week: 'Both',
            typeOfClass: 'Pràctiques',
            courseCode: '106334',
            courseName: 'PROJECTE DE CREACIÓ I DESENVOLUPAMENT III',
            professor: 'González Fernández',
            location: 'TCM1-002',
            timeStart: '17:00',
            timeEnd: '20:45'
          }
        ],
        tuesday: [
          {
            id: '3',
            week: '1',
            typeOfClass: 'Teoria',
            courseCode: '107333',
            courseName: "TÈCNIQUES D'INTEL·LIGÈNCIA ARTIFICIAL",
            professor: 'Obiol Madrid, Sandra',
            location: 'TCM1-102',
            timeStart: '08:15',
            timeEnd: '10:00'
          },
          {
            id: '4',
            week: '1',
            typeOfClass: 'Teoria',
            courseCode: '107431',
            courseName: 'DISSENY DE NIVELLS',
            professor: 'Rodríguez García, Daniel',
            location: 'TCM1-104',
            timeStart: '15:00',
            timeEnd: '16:45'
          },
          {
            id: '5',
            week: '2',
            typeOfClass: 'Pràctiques',
            courseCode: '107431',
            courseName: 'DISSENY DE NIVELLS',
            professor: 'Rodríguez García, Daniel',
            location: 'TCM1-104',
            timeStart: '15:00',
            timeEnd: '16:00'
          },
          {
            id: '6',
            week: '1',
            typeOfClass: 'Teoria',
            courseCode: '107431',
            courseName: 'DISSENY DE NIVELLS',
            professor: 'Rodríguez García, Daniel',
            location: 'TCM1-104',
            timeStart: '17:00',
            timeEnd: '18:45'
          },
          {
            id: '10',
            week: '2',
            typeOfClass: 'Teoria',
            courseCode: '107431',
            courseName: 'DISSENY DE NIVELLS',
            professor: 'Rodríguez García, Daniel',
            location: 'TCM1-104',
            timeStart: '18:00',
            timeEnd: '19:00'
          },
          {
            id: '8',
            week: '2',
            typeOfClass: 'Teoria',
            courseCode: '107334',
            courseName: 'DISSENY 3D II',
            professor: 'Caimel Moreno, Javier',
            location: 'TCM1-201',
            timeStart: '16:00',
            timeEnd: '17:45'
          }
        ],
        wednesday: [],
        thursday: [
          {
            id: '7',
            week: '2',
            typeOfClass: 'Pràctiques',
            courseCode: '107333',
            courseName: "TÈCNIQUES D'INTEL·LIGÈNCIA ARTIFICIAL",
            professor: 'Obiol Madrid, Sandra',
            location: 'TCM1-210',
            timeStart: '18:00',
            timeEnd: '19:45'
          },
          {
            id: '9',
            week: 'Both',
            typeOfClass: 'Teoria',
            courseCode: '107334',
            courseName: 'DISSENY 3D II',
            professor: 'Caimel Moreno, Javier',
            location: 'TCM1-210',
            timeStart: '15:00',
            timeEnd: '17:45'
          }
        ],
        friday: [
          {
            id: '8',
            week: 'Both',
            typeOfClass: 'Pràctiques',
            courseCode: '106334',
            courseName: 'PROJECTE DE CREACIÓ I DESENVOLUPAMENT III',
            professor: 'González Fernández',
            location: 'TCM1-103',
            timeStart: '17:00',
            timeEnd: '20:45'
          }
        ],
        saturday: [],
        sunday: []
      }
    }
  }
];
