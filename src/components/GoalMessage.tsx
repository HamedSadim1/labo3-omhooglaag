import React, { useEffect, useState } from "react";

interface GoalMessageProps {
  goalValue: number;
}

const GoalMessage: React.FC<GoalMessageProps> = ({ goalValue }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <p className="text-sm font-medium text-yellow-400">
      🎉 {goalValue} bereikt — goed gedaan!
    </p>
  );
};

export default GoalMessage;
