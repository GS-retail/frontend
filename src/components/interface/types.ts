export interface IButton {
    type: "primary-stroke" | "primary-fill";
    width?: string;
    height?: string;
    children?: React.ReactNode;
    [key: string]: any;
}

export interface ISocialLoginButton {
    type: "google" | "naver" | "kakao";
    [key: string]: any;
}

export interface IForm {
    children: React.ReactNode;
    width?: string;
    height?: string;
    [key: string]: any;
}

export interface IInput {
    width?: string;
    height?: string;
    [key: string]: any;
}

export interface IInputContainer {
    label: string;
    type?: string;
    placeholder?: string;
    btnRequired?: boolean;
    btnLabel?: string;
    onClick?: React.MouseEventHandler;
    [key: string]: any;
}

export interface ILabel {
    children?: React.ReactNode;
    [key: string]: any;
}
