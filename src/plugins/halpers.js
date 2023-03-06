import { notification } from "ant-design-vue";

export function openNotification(type, text) {
  notification[type]({
    message: text,
    class: "notification-message-custom",
    duration: 3,
  });
}
