export enum TVMenuFields {
    KEY_NAME_FIELD = "NM",
    KEY_UUID_FIELD = "UU",
    KEY_VER_FIELD = "VE",
    HB_FREQUENCY_FIELD = "HI",
    HB_MODE_FIELD = "HR",
    KEY_PLATFORM_ID = "PF",
    KEY_BOOT_TYPE_FIELD = "BT",
    KEY_ID_FIELD = "ID",
    KEY_CORRELATION_FIELD = "IC",
    KEY_EEPROM_FIELD = "IE",
    KEY_READONLY_FIELD = "RO",
    KEY_VISIBLE_FIELD = "VI",
    KEY_ALPHA_FIELD = "RA",
    KEY_WIDTH_FIELD = "WI",
    KEY_PARENT_ID_FIELD = "PI",
    KEY_ANALOG_MAX_FIELD = "AM",
    KEY_ANALOG_OFFSET_FIELD = "AO",
    KEY_ANALOG_DIVISOR_FIELD = "AD",
    KEY_ANALOG_UNIT_FIELD = "AU",
    KEY_FLOAT_DECIMAL_PLACES = "FD",
    KEY_NEGATIVE_ALLOWED = "NA",
    KEY_REMOTE_NUM = "RN",
    KEY_CURRENT_VAL = "VC",
    KEY_BOOLEAN_NAMING = "BN",
    KEY_NO_OF_CHOICES = "NC",
    KEY_MAX_LENGTH = "ML",
    KEY_EDIT_TYPE = "EM",
    KEY_PREPEND_CHOICE = "C", // second char from A onwards.
    KEY_PREPEND_NAMECHOICE = "c", // second char from A onwards.
    KEY_CHANGE_TYPE = "TC",
    KEY_ACK_STATUS = "ST",
    KEY_MODE_FIELD = "MO",
    KEY_BUFFER_FIELD = "BU",
    KEY_HEADER_FIELD = "HF",
    KEY_BUTTON1_FIELD = "B1",
    KEY_BUTTON2_FIELD = "B2"
}

export class MenuCommandType {
    public static JOIN = "NJ";
    public static PAIRING_REQUEST = "PR";
    public static HEARTBEAT = "HB";
    public static BOOTSTRAP = "BS";
    public static ANALOG_BOOT_ITEM = "BA";
    public static ACTION_BOOT_ITEM = "BC";
    public static SUBMENU_BOOT_ITEM = "BM";
    public static ENUM_BOOT_ITEM = "BE";
    public static BOOLEAN_BOOT_ITEM = "BB";
    public static TEXT_BOOT_ITEM = "BT";
    public static RUNTIME_LIST_BOOT = "BL";
    public static BOOT_SCROLL_CHOICE = "BZ";
    public static BOOT_RGB_COLOR = "BK";
    public static LARGE_NUM_BOOT_ITEM = "BN";
    public static FLOAT_BOOT_ITEM = "BF";
    public static REMOTE_BOOT_ITEM = "BR";
    public static ACKNOWLEDGEMENT = "AK";
    public static CHANGE_INT_FIELD = "VC";
    public static DIALOG_UPDATE = "DM"
}

export enum HeartbeatMode {
    NORMAL, START, END
}

export enum BootstrapMode {
    START, STOP
}

export enum ChangeType {
    DELTA = 0, ABSOLUTE = 1, ABSOLUTE_LIST = 2, LIST_SELECTION = 3
}

export enum ButtonType {
    OK, ACCEPT, CANCEL, CLOSE, NONE
}

export enum DialogMode {
    SHOW= 'S', HIDE = 'H', ACTION = 'A'
}

export enum ApiPlatform {
    ARDUINO = 0, ARDUINO_32 = 2, JAVA_API = 1, DNET_API = 3,JS_API = 4
}

export enum AckStatus {
    VALUE_OUT_OF_RANGE = -1, SUCCESS = 0, ID_NOT_FOUND = 1, INVALID_CREDENTIALS = 2, UNSPECIFIED_ERROR = 10000
}

export function isAckStatusError(ack: AckStatus) {
    return ack > 0;
}
