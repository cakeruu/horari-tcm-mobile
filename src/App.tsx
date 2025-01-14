import { Schedule } from '@/components/schedule';

function App () {
  return (
    <div className="min-h-dvh bg-gray-50 p-8 w-dvw flex flex-col items-center justify-between">
      <Schedule />
      <h1 className="text-sm text-gray-500 mt-4 opacity-70 flex items-center justify-center">
        Made with
        <img src='/ios-heart.png' alt="iOS Heart" className="w-4 h-4 inline-block mx-1" />
        by
        <a href="https://github.com/cakeruu" target="_blank" rel="noopener noreferrer" className="underline mx-1">
          Aleix Canals
        </a>
      </h1>
    </div>
  );
}

export default App;
