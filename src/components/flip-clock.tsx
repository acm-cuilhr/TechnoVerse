'use client';

interface FlipClockProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface FlipUnitProps {
  value: number;
  label: string;
}

const FlipUnit = ({ value, label }: FlipUnitProps) => {
  // Ensure the value is always two digits
  const formattedValue = value.toString().padStart(2, '0');

  return (
    <div className="flip-unit-container relative mx-2 my-5">
      <div className="flip-unit">
        <div className="upper bg-turquoise text-white rounded-t-md p-2 text-2xl md:text-4xl font-bold relative overflow-hidden">
          {formattedValue}
        </div>
        <div className="lower bg-turquoise text-white rounded-b-md p-2 text-2xl md:text-4xl font-bold relative overflow-hidden">
          {formattedValue}
        </div>
      </div>
      <div className="flip-unit-label text-turquoise text-sm md:text-base mt-2">
        {label}
      </div>
    </div>
  );
};

export function FlipClock({ days, hours, minutes, seconds }: FlipClockProps) {
  return (
    <div className="flip-clock-container flex justify-center items-center flex-wrap">
      <FlipUnit value={days} label={days === 1 ? 'Day' : 'Days'} />
      <FlipUnit value={hours} label={hours === 1 ? 'Hour' : 'Hours'} />
      <FlipUnit value={minutes} label={minutes === 1 ? 'Minute' : 'Minutes'} />
      <FlipUnit value={seconds} label={seconds === 1 ? 'Second' : 'Seconds'} />
    </div>
  );
}
