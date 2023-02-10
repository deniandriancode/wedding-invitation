interface TabType {
    name: string;
    icons: object;
    active: boolean;
}

interface TimeRemainingType {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
}

interface GuestMessage {
    username: string;
    message: string;
}

type HandleSetTabType = (event: SyntheticBaseEvent) => void;
type HandleOpenInvite = () => void;
