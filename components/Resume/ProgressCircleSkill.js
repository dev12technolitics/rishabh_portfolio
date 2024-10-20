import { useEffect } from "react";

const ProgressCircleSkill = ({ progress, uniqueId }) => {
  useEffect(() => {
    const circle = document.querySelector(`.progress-circle-${uniqueId}`);
    
    if (!circle) return;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = circumference;

    const clampedProgress = Math.min(Math.max(progress, 0), 100);
    const offset = circumference - (clampedProgress / 100) * circumference;
    circle.style.strokeDashoffset = offset;

  }, [progress, uniqueId]);

  return (
    <div className="relative w-28 h-28">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue1 dark:text-neutral-700" strokeWidth="1" />
        <circle
          className={`progress-circle-${uniqueId} stroke-current text-cyan1 dark:text-cyan1 transition-all duration-1000 ease-in-out`}
          cx="18" cy="18" r="16"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <h3 className="headding_three text-cyan1 font-bold text-center">{progress}%</h3>
      </div>
    </div>
  );
};


export default ProgressCircleSkill;
