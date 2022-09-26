import { notification } from "antd";

export default function openNotificationWithIcon(type, title, content) {
  notification[type]({
    message: title,
    description: content,
  });
}
