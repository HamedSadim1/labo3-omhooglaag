import React, { useEffect, useState } from "react";
import { CELEBRATION_MS } from "@/constants";

interface GoalMessageProps {
  goalValue: number;
}

const GoalMessage: React.FC<GoalMessageProps> = ({ goalValue }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), CELEBRATION_MS);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <p role="status" className="text-sm font-medium text-yellow-400">
      🎉 {goalValue} bereikt — goed gedaan!
    </p>
  );
};

export default GoalMessage;
