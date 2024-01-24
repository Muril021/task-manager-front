import { ToastPosition, toast } from "react-toastify";

type NotifyMessageProps = {
  message: string,
  position?: ToastPosition,
  className?: string,
}

const NotifyError = ({
    message,
    position = 'top-center',
    className = 'bg-dark-tertiary',
}: NotifyMessageProps) => {
    return toast.error(message, {
        position,
        theme: 'colored',
        className,
    });
};

export default NotifyError;
