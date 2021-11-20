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

export enum MenuCommandType {
    JOIN = "NJ",
    PAIRING_REQUEST = "PR",
    HEARTBEAT = "HB",
    BOOTSTRAP = "BS",
    ANALOG_BOOT_ITEM = "BA",
    ACTION_BOOT_ITEM = "BC",
    SUBMENU_BOOT_ITEM = "BM",
    ENUM_BOOT_ITEM = "BE",
    BOOLEAN_BOOT_ITEM = "BB",
    TEXT_BOOT_ITEM = "BT",
    RUNTIME_LIST_BOOT = "BL",
    BOOT_SCROLL_CHOICE = "BZ",
    BOOT_RGB_COLOR = "BK",
    LARGE_NUM_BOOT_ITEM = "BN",
    FLOAT_BOOT_ITEM = "BF",
    REMOTE_BOOT_ITEM = "BR",
    ACKNOWLEDGEMENT = "AK",
    CHANGE_INT_FIELD = "VC",
    DIALOG_UPDATE = "DM"
}

export enum HeartbeatMode {
    NORMAL, START, END
}

export enum ChangeType {
    DELTA, ABSOLUTE, ABSOLUTE_LIST
}

export enum ButtonType {
    OK, ACCEPT, CANCEL, CLOSE, NONE
}

export enum AckStatus {
    VALUE_OUT_OF_RANGE = -1, SUCCESS = 0, ID_NOT_FOUND = 1, INVALID_CREDENTIALS = 2, UNSPECIFIED_ERROR = 10000
}

export function isAckStatusError(ack: AckStatus) {
    return ack > 0;
}
