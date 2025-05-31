import React, { useEffect, useState } from 'react';

const MemberCounter = () => {
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    // Fetch or simulate API call
    setTimeout(() => {
      setMemberCount(128); // Replace with dynamic API call if needed
    }, 500);
  }, []);

  return (
    <div className="text-sm text-gray-600 text-center mt-2">
      🚀 Total Members: <strong>{memberCount}</strong>
    </div>
  );
};

export default MemberCounter;