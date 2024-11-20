import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const TimeDisplay: React.FC = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/Toronto'
    });
  };

  const isWorkingHours = () => {
    const hours = time.getHours();
    return hours >= 9 && hours < 17;
  };

  return (
    <div className="flex flex-col items-end gap-1 text-[13px] text-[#888888]">
      <span>Toronto, Canada</span>
      <div className="flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5" />
        {formatTime(time)}
        <span>{isWorkingHours() ? '💻' : '💤'}</span>
      </div>
    </div>
  );
};

export default TimeDisplay;