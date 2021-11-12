export interface SkyrimHintProps {
    isOpened: boolean;
    active: string;
    text: string;
    left: boolean;
} 

export interface DefaultUIComponentProps {
    name: string;
    width?: number;
    height?: number;
    disabled?: boolean;
    url?: string;
    text?: string;
    onClick?: (any?: any) => void;
}
