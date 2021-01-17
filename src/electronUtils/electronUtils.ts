import electron, { Notification } from "electron";

export const showNotification = (iconPath: string) => {
  const options = {
    title: "Custom Notification",
    subtitle: "Subtitle of the Notification",
    body: "Body of Custom Notification",
    silent: false,
    icon: iconPath,
    hasReply: true,
    timeoutType: "never",
    replyPlaceholder: "Reply Here",
    urgency: "critical",
    closeButtonText: "Close Button",
    actions: [
      {
        type: "button",
        text: "Show Button",
      },
    ],
  };

  const customNotification = new Notification();
};
