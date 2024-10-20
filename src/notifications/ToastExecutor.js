import { toast } from 'react-toastify';

export class ToastTemplate {
	
	constructor(toastType, message) {
		this.toastType = toastType;
		this.message = message;
	}

	execute() {
		switch (this.toastType) {
			case ToastType.Information:
				toast.info(this.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: false,
					progress: undefined,
					theme: "colored",
				});
				break;
			case ToastType.Success:
				toast.success(this.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: false,
					progress: undefined,
					theme: "colored",
				});
				break;

			case ToastType.Error:
				toast.error(this.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: false,
					progress: undefined,
					theme: "colored",
				});
				break;

			case ToastType.Warning:
				toast.error(this.message, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: false,
					progress: undefined,
					theme: "colored",
				});
				break;
			default:
		}
	}
}

export const ToastType = {
	Information: 'info',
	Success: 'success',
	Warning: 'warning',
	Error: 'error',
}


