import { ToastPosition, toast } from "react-toastify";

type NotifyMessageProps = {
  message: string,
  position?: ToastPosition,
  className?: string,
}

const NotifySuccess = ({
    message,
    position = 'top-center',
    className = 'bg-dark-tertiary',
}: NotifyMessageProps) => {
    return toast.success(message, {
        position,
        theme: 'colored',
        className,
    });
};

export default NotifySuccess;
