import { toast } from 'react-toastify';

export function showFailureToast(id) {
    if (!toast.isActive(id)) {
        toast(`Whoops! There was a problem, please try again.`, {
            autoClose: 5000,
            className: 'ui negative message square',
            progressClassName: 'meblue-gradient-error',
            toastId: id
        });
    }
}

export function showSuccessToast(id) {
    if (!toast.isActive(id)) {
        toast("Excellent!", {
            autoClose: 3000,
            className: 'ui info message square',
            progressClassName: 'meblue-gradient',
            toastId: id
        });
    }
}