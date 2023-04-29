import { useState, useEffect } from "react";
import { BellIcon } from "@chakra-ui/icons";

function NotificationBell({ notificationCount }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(notificationCount);
  }, [notificationCount]);

  return (
    <div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-7c0-4.41-2.91-8.12-6.87-9.32-.48-.15-.98-.23-1.13-.23s-.65.08-1.13.23c-3.96 1.2-6.87 4.91-6.87 9.32v7l-2 2v1h16v-1l-2-2zm-6 3c-1.11 0-2-.89-2-2h4c0 1.11-.89 2-2 2z" />
      </svg> */}
      
        <BellIcon fontSize="2xl" m={1} />
      {count > 0 && <span id="notification" className="notification-count">{count}</span>}
    </div>
  );
}

export default NotificationBell;
