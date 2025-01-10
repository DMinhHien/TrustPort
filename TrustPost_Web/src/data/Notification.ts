export interface Notification {
    id: number;
    type: 1 | 2 | 3;
    title: string;
    description: string;
    time: string;
  }

export const notifications: Notification[] = [
    {
      id: 1,
      type: 1,
      title: "Warning Alert",
      description: "Your account has unusual login activity.",
      time: "2025-01-10 10:00 AM"
    },
    {
      id: 2,
      type: 2,
      title: "Gift Received",
      description: "You have received a reward for your activity!",
      time: "2025-01-09 3:45 PM"
    },
    {
      id: 3,
      type: 3,
      title: "Profile Update",
      description: "Your profile information has been successfully updated.",
      time: "2025-01-08 8:30 AM"
    },
    {
        id: 4,
        type: 3,
        title: "Profile Update",
        description: "Your profile information has been successfully updated.",
        time: "2025-01-08 8:30 AM"
    },
    {
        id: 1,
        type: 1,
        title: "Warning Alert",
        description: "Your account has unusual login activity.",
        time: "2025-01-10 10:00 AM"
      },
      {
        id: 2,
        type: 2,
        title: "Gift Received",
        description: "You have received a reward for your activity!",
        time: "2025-01-09 3:45 PM"
      },
      {
        id: 3,
        type: 3,
        title: "Profile Update",
        description: "Your profile information has been successfully updated.",
        time: "2025-01-08 8:30 AM"
      },
      {
          id: 4,
          type: 3,
          title: "Profile Update",
          description: "Your profile information has been successfully updated.",
          time: "2025-01-08 8:30 AM"
      },
  ];
  export default notifications;