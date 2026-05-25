/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "patronobuf";

export enum RequestType {
  STARTUP = 0,
  CONFIGURATION = 1,
  COMMAND = 2,
  COMMAND_STATUS = 3,
  KEYS = 4,
  FILE = 5,
  FILE_TO_SERVER = 6,
  UNRECOGNIZED = -1,
}

export function requestTypeFromJSON(object: any): RequestType {
  switch (object) {
    case 0:
    case "STARTUP":
      return RequestType.STARTUP;
    case 1:
    case "CONFIGURATION":
      return RequestType.CONFIGURATION;
    case 2:
    case "COMMAND":
      return RequestType.COMMAND;
    case 3:
    case "COMMAND_STATUS":
      return RequestType.COMMAND_STATUS;
    case 4:
    case "KEYS":
      return RequestType.KEYS;
    case 5:
    case "FILE":
      return RequestType.FILE;
    case 6:
    case "FILE_TO_SERVER":
      return RequestType.FILE_TO_SERVER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestType.UNRECOGNIZED;
  }
}

export function requestTypeToJSON(object: RequestType): string {
  switch (object) {
    case RequestType.STARTUP:
      return "STARTUP";
    case RequestType.CONFIGURATION:
      return "CONFIGURATION";
    case RequestType.COMMAND:
      return "COMMAND";
    case RequestType.COMMAND_STATUS:
      return "COMMAND_STATUS";
    case RequestType.KEYS:
      return "KEYS";
    case RequestType.FILE:
      return "FILE";
    case RequestType.FILE_TO_SERVER:
      return "FILE_TO_SERVER";
    case RequestType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ResponseType {
  STARTUP_RESPONSE = 0,
  CONFIGURATION_RESPONSE = 1,
  COMMAND_RESPONSE = 2,
  COMMAND_STATUS_RESPONSE = 3,
  KEYS_RESPONSE = 4,
  FILE_RESPONSE = 5,
  FILE_TRANSFER_STATUS = 6,
  UNRECOGNIZED = -1,
}

export function responseTypeFromJSON(object: any): ResponseType {
  switch (object) {
    case 0:
    case "STARTUP_RESPONSE":
      return ResponseType.STARTUP_RESPONSE;
    case 1:
    case "CONFIGURATION_RESPONSE":
      return ResponseType.CONFIGURATION_RESPONSE;
    case 2:
    case "COMMAND_RESPONSE":
      return ResponseType.COMMAND_RESPONSE;
    case 3:
    case "COMMAND_STATUS_RESPONSE":
      return ResponseType.COMMAND_STATUS_RESPONSE;
    case 4:
    case "KEYS_RESPONSE":
      return ResponseType.KEYS_RESPONSE;
    case 5:
    case "FILE_RESPONSE":
      return ResponseType.FILE_RESPONSE;
    case 6:
    case "FILE_TRANSFER_STATUS":
      return ResponseType.FILE_TRANSFER_STATUS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseType.UNRECOGNIZED;
  }
}

export function responseTypeToJSON(object: ResponseType): string {
  switch (object) {
    case ResponseType.STARTUP_RESPONSE:
      return "STARTUP_RESPONSE";
    case ResponseType.CONFIGURATION_RESPONSE:
      return "CONFIGURATION_RESPONSE";
    case ResponseType.COMMAND_RESPONSE:
      return "COMMAND_RESPONSE";
    case ResponseType.COMMAND_STATUS_RESPONSE:
      return "COMMAND_STATUS_RESPONSE";
    case ResponseType.KEYS_RESPONSE:
      return "KEYS_RESPONSE";
    case ResponseType.FILE_RESPONSE:
      return "FILE_RESPONSE";
    case ResponseType.FILE_TRANSFER_STATUS:
      return "FILE_TRANSFER_STATUS";
    case ResponseType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Request {
  type: RequestType;
  startup?: StartupRequest | undefined;
  configuration?: ConfigurationRequest | undefined;
  command?: CommandRequest | undefined;
  commandStatus?: CommandStatusRequest | undefined;
  keys?: KeysRequest | undefined;
  file?: FileRequest | undefined;
  fileToServer?: FileToServer | undefined;
}

export interface Response {
  type: ResponseType;
  startupResponse?: StartupResponse | undefined;
  configurationResponse?: ConfigurationResponse | undefined;
  commandResponse?: CommandResponse | undefined;
  commandStatusResponse?: CommandStatusResponse | undefined;
  keysResponse?: KeysResponse | undefined;
  fileResponse?: FileResponse | undefined;
  fileTransferStatusResponse?: FileTransferStatusResponse | undefined;
}

export interface StartupRequest {
  filepath: string;
  username: string;
  hostname: string;
  ostype: string;
  arch: string;
  osbuild: string;
  cpus: string;
  memory: string;
  agentip: string;
  capabilities: string[];
}

export interface StartupResponse {
  uuid: string;
}

export interface ConfigurationRequest {
  uuid: string;
  serverip: string;
  serverport: string;
  callbackfrequency: string;
  callbackjitter: string;
  masterkey: string;
  status: string;
  tags: Tag[];
  nextcallbackUnix: number;
  transportprotocol: string;
}

export interface ConfigurationResponse {
  serverip: string;
  serverport: string;
  callbackfrequency: string;
  callbackjitter: string;
  transportprotocol: string;
}

export interface CommandRequest {
  uuid: string;
}

export interface CommandResponse {
  uuid: string;
  commandtype: string;
  commandid: string;
  command: string;
}

export interface CommandStatusRequest {
  uuid: string;
  commandid: string;
  result: string;
  output: string;
}

export interface CommandStatusResponse {
  uuid: string;
}

export interface KeysRequest {
  uuid: string;
  keys: string;
}

export interface KeysResponse {
  uuid: string;
}

export interface FileRequest {
  uuid: string;
}

export interface FileResponse {
  fileid: string;
  uuid: string;
  transfertype: string;
  filepath: string;
  chunk: Uint8Array;
}

export interface FileToServer {
  fileid: string;
  uuid: string;
  transfertype: string;
  path: string;
  status: string;
  chunk: Uint8Array;
}

export interface FileTransferStatusResponse {
  fileid: string;
  uuid: string;
}

export interface Tag {
  key: string;
  value: string;
}

function createBaseRequest(): Request {
  return {
    type: 0,
    startup: undefined,
    configuration: undefined,
    command: undefined,
    commandStatus: undefined,
    keys: undefined,
    file: undefined,
    fileToServer: undefined,
  };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.startup !== undefined) {
      StartupRequest.encode(message.startup, writer.uint32(18).fork()).ldelim();
    }
    if (message.configuration !== undefined) {
      ConfigurationRequest.encode(message.configuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.command !== undefined) {
      CommandRequest.encode(message.command, writer.uint32(34).fork()).ldelim();
    }
    if (message.commandStatus !== undefined) {
      CommandStatusRequest.encode(message.commandStatus, writer.uint32(42).fork()).ldelim();
    }
    if (message.keys !== undefined) {
      KeysRequest.encode(message.keys, writer.uint32(50).fork()).ldelim();
    }
    if (message.file !== undefined) {
      FileRequest.encode(message.file, writer.uint32(58).fork()).ldelim();
    }
    if (message.fileToServer !== undefined) {
      FileToServer.encode(message.fileToServer, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.startup = StartupRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.configuration = ConfigurationRequest.decode(reader, reader.uint32());
          break;
        case 4:
          message.command = CommandRequest.decode(reader, reader.uint32());
          break;
        case 5:
          message.commandStatus = CommandStatusRequest.decode(reader, reader.uint32());
          break;
        case 6:
          message.keys = KeysRequest.decode(reader, reader.uint32());
          break;
        case 7:
          message.file = FileRequest.decode(reader, reader.uint32());
          break;
        case 8:
          message.fileToServer = FileToServer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      type: isSet(object.type) ? requestTypeFromJSON(object.type) : 0,
      startup: isSet(object.startup) ? StartupRequest.fromJSON(object.startup) : undefined,
      configuration: isSet(object.configuration) ? ConfigurationRequest.fromJSON(object.configuration) : undefined,
      command: isSet(object.command) ? CommandRequest.fromJSON(object.command) : undefined,
      commandStatus: isSet(object.commandStatus) ? CommandStatusRequest.fromJSON(object.commandStatus) : undefined,
      keys: isSet(object.keys) ? KeysRequest.fromJSON(object.keys) : undefined,
      file: isSet(object.file) ? FileRequest.fromJSON(object.file) : undefined,
      fileToServer: isSet(object.fileToServer) ? FileToServer.fromJSON(object.fileToServer) : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.startup !== undefined &&
      (obj.startup = message.startup ? StartupRequest.toJSON(message.startup) : undefined);
    message.configuration !== undefined &&
      (obj.configuration = message.configuration ? ConfigurationRequest.toJSON(message.configuration) : undefined);
    message.command !== undefined &&
      (obj.command = message.command ? CommandRequest.toJSON(message.command) : undefined);
    message.commandStatus !== undefined &&
      (obj.commandStatus = message.commandStatus ? CommandStatusRequest.toJSON(message.commandStatus) : undefined);
    message.keys !== undefined && (obj.keys = message.keys ? KeysRequest.toJSON(message.keys) : undefined);
    message.file !== undefined && (obj.file = message.file ? FileRequest.toJSON(message.file) : undefined);
    message.fileToServer !== undefined &&
      (obj.fileToServer = message.fileToServer ? FileToServer.toJSON(message.fileToServer) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request {
    return Request.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.type = object.type ?? 0;
    message.startup = (object.startup !== undefined && object.startup !== null)
      ? StartupRequest.fromPartial(object.startup)
      : undefined;
    message.configuration = (object.configuration !== undefined && object.configuration !== null)
      ? ConfigurationRequest.fromPartial(object.configuration)
      : undefined;
    message.command = (object.command !== undefined && object.command !== null)
      ? CommandRequest.fromPartial(object.command)
      : undefined;
    message.commandStatus = (object.commandStatus !== undefined && object.commandStatus !== null)
      ? CommandStatusRequest.fromPartial(object.commandStatus)
      : undefined;
    message.keys = (object.keys !== undefined && object.keys !== null)
      ? KeysRequest.fromPartial(object.keys)
      : undefined;
    message.file = (object.file !== undefined && object.file !== null)
      ? FileRequest.fromPartial(object.file)
      : undefined;
    message.fileToServer = (object.fileToServer !== undefined && object.fileToServer !== null)
      ? FileToServer.fromPartial(object.fileToServer)
      : undefined;
    return message;
  },
};

function createBaseResponse(): Response {
  return {
    type: 0,
    startupResponse: undefined,
    configurationResponse: undefined,
    commandResponse: undefined,
    commandStatusResponse: undefined,
    keysResponse: undefined,
    fileResponse: undefined,
    fileTransferStatusResponse: undefined,
  };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.startupResponse !== undefined) {
      StartupResponse.encode(message.startupResponse, writer.uint32(18).fork()).ldelim();
    }
    if (message.configurationResponse !== undefined) {
      ConfigurationResponse.encode(message.configurationResponse, writer.uint32(26).fork()).ldelim();
    }
    if (message.commandResponse !== undefined) {
      CommandResponse.encode(message.commandResponse, writer.uint32(34).fork()).ldelim();
    }
    if (message.commandStatusResponse !== undefined) {
      CommandStatusResponse.encode(message.commandStatusResponse, writer.uint32(42).fork()).ldelim();
    }
    if (message.keysResponse !== undefined) {
      KeysResponse.encode(message.keysResponse, writer.uint32(50).fork()).ldelim();
    }
    if (message.fileResponse !== undefined) {
      FileResponse.encode(message.fileResponse, writer.uint32(58).fork()).ldelim();
    }
    if (message.fileTransferStatusResponse !== undefined) {
      FileTransferStatusResponse.encode(message.fileTransferStatusResponse, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.startupResponse = StartupResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.configurationResponse = ConfigurationResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.commandResponse = CommandResponse.decode(reader, reader.uint32());
          break;
        case 5:
          message.commandStatusResponse = CommandStatusResponse.decode(reader, reader.uint32());
          break;
        case 6:
          message.keysResponse = KeysResponse.decode(reader, reader.uint32());
          break;
        case 7:
          message.fileResponse = FileResponse.decode(reader, reader.uint32());
          break;
        case 8:
          message.fileTransferStatusResponse = FileTransferStatusResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      type: isSet(object.type) ? responseTypeFromJSON(object.type) : 0,
      startupResponse: isSet(object.startupResponse) ? StartupResponse.fromJSON(object.startupResponse) : undefined,
      configurationResponse: isSet(object.configurationResponse)
        ? ConfigurationResponse.fromJSON(object.configurationResponse)
        : undefined,
      commandResponse: isSet(object.commandResponse) ? CommandResponse.fromJSON(object.commandResponse) : undefined,
      commandStatusResponse: isSet(object.commandStatusResponse)
        ? CommandStatusResponse.fromJSON(object.commandStatusResponse)
        : undefined,
      keysResponse: isSet(object.keysResponse) ? KeysResponse.fromJSON(object.keysResponse) : undefined,
      fileResponse: isSet(object.fileResponse) ? FileResponse.fromJSON(object.fileResponse) : undefined,
      fileTransferStatusResponse: isSet(object.fileTransferStatusResponse)
        ? FileTransferStatusResponse.fromJSON(object.fileTransferStatusResponse)
        : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = responseTypeToJSON(message.type));
    message.startupResponse !== undefined &&
      (obj.startupResponse = message.startupResponse ? StartupResponse.toJSON(message.startupResponse) : undefined);
    message.configurationResponse !== undefined && (obj.configurationResponse = message.configurationResponse
      ? ConfigurationResponse.toJSON(message.configurationResponse)
      : undefined);
    message.commandResponse !== undefined &&
      (obj.commandResponse = message.commandResponse ? CommandResponse.toJSON(message.commandResponse) : undefined);
    message.commandStatusResponse !== undefined && (obj.commandStatusResponse = message.commandStatusResponse
      ? CommandStatusResponse.toJSON(message.commandStatusResponse)
      : undefined);
    message.keysResponse !== undefined &&
      (obj.keysResponse = message.keysResponse ? KeysResponse.toJSON(message.keysResponse) : undefined);
    message.fileResponse !== undefined &&
      (obj.fileResponse = message.fileResponse ? FileResponse.toJSON(message.fileResponse) : undefined);
    message.fileTransferStatusResponse !== undefined &&
      (obj.fileTransferStatusResponse = message.fileTransferStatusResponse
        ? FileTransferStatusResponse.toJSON(message.fileTransferStatusResponse)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.type = object.type ?? 0;
    message.startupResponse = (object.startupResponse !== undefined && object.startupResponse !== null)
      ? StartupResponse.fromPartial(object.startupResponse)
      : undefined;
    message.configurationResponse =
      (object.configurationResponse !== undefined && object.configurationResponse !== null)
        ? ConfigurationResponse.fromPartial(object.configurationResponse)
        : undefined;
    message.commandResponse = (object.commandResponse !== undefined && object.commandResponse !== null)
      ? CommandResponse.fromPartial(object.commandResponse)
      : undefined;
    message.commandStatusResponse =
      (object.commandStatusResponse !== undefined && object.commandStatusResponse !== null)
        ? CommandStatusResponse.fromPartial(object.commandStatusResponse)
        : undefined;
    message.keysResponse = (object.keysResponse !== undefined && object.keysResponse !== null)
      ? KeysResponse.fromPartial(object.keysResponse)
      : undefined;
    message.fileResponse = (object.fileResponse !== undefined && object.fileResponse !== null)
      ? FileResponse.fromPartial(object.fileResponse)
      : undefined;
    message.fileTransferStatusResponse =
      (object.fileTransferStatusResponse !== undefined && object.fileTransferStatusResponse !== null)
        ? FileTransferStatusResponse.fromPartial(object.fileTransferStatusResponse)
        : undefined;
    return message;
  },
};

function createBaseStartupRequest(): StartupRequest {
  return {
    filepath: "",
    username: "",
    hostname: "",
    ostype: "",
    arch: "",
    osbuild: "",
    cpus: "",
    memory: "",
    agentip: "",
    capabilities: [],
  };
}

export const StartupRequest = {
  encode(message: StartupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filepath !== "") {
      writer.uint32(10).string(message.filepath);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.hostname !== "") {
      writer.uint32(26).string(message.hostname);
    }
    if (message.ostype !== "") {
      writer.uint32(34).string(message.ostype);
    }
    if (message.arch !== "") {
      writer.uint32(42).string(message.arch);
    }
    if (message.osbuild !== "") {
      writer.uint32(50).string(message.osbuild);
    }
    if (message.cpus !== "") {
      writer.uint32(58).string(message.cpus);
    }
    if (message.memory !== "") {
      writer.uint32(66).string(message.memory);
    }
    if (message.agentip !== "") {
      writer.uint32(74).string(message.agentip);
    }
    for (const v of message.capabilities) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filepath = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.hostname = reader.string();
          break;
        case 4:
          message.ostype = reader.string();
          break;
        case 5:
          message.arch = reader.string();
          break;
        case 6:
          message.osbuild = reader.string();
          break;
        case 7:
          message.cpus = reader.string();
          break;
        case 8:
          message.memory = reader.string();
          break;
        case 9:
          message.agentip = reader.string();
          break;
        case 10:
          message.capabilities.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartupRequest {
    return {
      filepath: isSet(object.filepath) ? String(object.filepath) : "",
      username: isSet(object.username) ? String(object.username) : "",
      hostname: isSet(object.hostname) ? String(object.hostname) : "",
      ostype: isSet(object.ostype) ? String(object.ostype) : "",
      arch: isSet(object.arch) ? String(object.arch) : "",
      osbuild: isSet(object.osbuild) ? String(object.osbuild) : "",
      cpus: isSet(object.cpus) ? String(object.cpus) : "",
      memory: isSet(object.memory) ? String(object.memory) : "",
      agentip: isSet(object.agentip) ? String(object.agentip) : "",
      capabilities: Array.isArray(object?.capabilities) ? object.capabilities.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: StartupRequest): unknown {
    const obj: any = {};
    message.filepath !== undefined && (obj.filepath = message.filepath);
    message.username !== undefined && (obj.username = message.username);
    message.hostname !== undefined && (obj.hostname = message.hostname);
    message.ostype !== undefined && (obj.ostype = message.ostype);
    message.arch !== undefined && (obj.arch = message.arch);
    message.osbuild !== undefined && (obj.osbuild = message.osbuild);
    message.cpus !== undefined && (obj.cpus = message.cpus);
    message.memory !== undefined && (obj.memory = message.memory);
    message.agentip !== undefined && (obj.agentip = message.agentip);
    if (message.capabilities) {
      obj.capabilities = message.capabilities.map((e) => e);
    } else {
      obj.capabilities = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StartupRequest>, I>>(base?: I): StartupRequest {
    return StartupRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartupRequest>, I>>(object: I): StartupRequest {
    const message = createBaseStartupRequest();
    message.filepath = object.filepath ?? "";
    message.username = object.username ?? "";
    message.hostname = object.hostname ?? "";
    message.ostype = object.ostype ?? "";
    message.arch = object.arch ?? "";
    message.osbuild = object.osbuild ?? "";
    message.cpus = object.cpus ?? "";
    message.memory = object.memory ?? "";
    message.agentip = object.agentip ?? "";
    message.capabilities = object.capabilities?.map((e) => e) || [];
    return message;
  },
};

function createBaseStartupResponse(): StartupResponse {
  return { uuid: "" };
}

export const StartupResponse = {
  encode(message: StartupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartupResponse {
    return { uuid: isSet(object.uuid) ? String(object.uuid) : "" };
  },

  toJSON(message: StartupResponse): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  create<I extends Exact<DeepPartial<StartupResponse>, I>>(base?: I): StartupResponse {
    return StartupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StartupResponse>, I>>(object: I): StartupResponse {
    const message = createBaseStartupResponse();
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBaseConfigurationRequest(): ConfigurationRequest {
  return {
    uuid: "",
    serverip: "",
    serverport: "",
    callbackfrequency: "",
    callbackjitter: "",
    masterkey: "",
    status: "",
    tags: [],
    nextcallbackUnix: 0,
    transportprotocol: "",
  };
}

export const ConfigurationRequest = {
  encode(message: ConfigurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.serverip !== "") {
      writer.uint32(18).string(message.serverip);
    }
    if (message.serverport !== "") {
      writer.uint32(26).string(message.serverport);
    }
    if (message.callbackfrequency !== "") {
      writer.uint32(34).string(message.callbackfrequency);
    }
    if (message.callbackjitter !== "") {
      writer.uint32(42).string(message.callbackjitter);
    }
    if (message.masterkey !== "") {
      writer.uint32(50).string(message.masterkey);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    for (const v of message.tags) {
      Tag.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.nextcallbackUnix !== 0) {
      writer.uint32(72).int64(message.nextcallbackUnix);
    }
    if (message.transportprotocol !== "") {
      writer.uint32(82).string(message.transportprotocol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.serverip = reader.string();
          break;
        case 3:
          message.serverport = reader.string();
          break;
        case 4:
          message.callbackfrequency = reader.string();
          break;
        case 5:
          message.callbackjitter = reader.string();
          break;
        case 6:
          message.masterkey = reader.string();
          break;
        case 7:
          message.status = reader.string();
          break;
        case 8:
          message.tags.push(Tag.decode(reader, reader.uint32()));
          break;
        case 9:
          message.nextcallbackUnix = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.transportprotocol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigurationRequest {
    return {
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      serverip: isSet(object.serverip) ? String(object.serverip) : "",
      serverport: isSet(object.serverport) ? String(object.serverport) : "",
      callbackfrequency: isSet(object.callbackfrequency) ? String(object.callbackfrequency) : "",
      callbackjitter: isSet(object.callbackjitter) ? String(object.callbackjitter) : "",
      masterkey: isSet(object.masterkey) ? String(object.masterkey) : "",
      status: isSet(object.status) ? String(object.status) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => Tag.fromJSON(e)) : [],
      nextcallbackUnix: isSet(object.nextcallbackUnix) ? Number(object.nextcallbackUnix) : 0,
      transportprotocol: isSet(object.transportprotocol) ? String(object.transportprotocol) : "",
    };
  },

  toJSON(message: ConfigurationRequest): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.serverip !== undefined && (obj.serverip = message.serverip);
    message.serverport !== undefined && (obj.serverport = message.serverport);
    message.callbackfrequency !== undefined && (obj.callbackfrequency = message.callbackfrequency);
    message.callbackjitter !== undefined && (obj.callbackjitter = message.callbackjitter);
    message.masterkey !== undefined && (obj.masterkey = message.masterkey);
    message.status !== undefined && (obj.status = message.status);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e ? Tag.toJSON(e) : undefined);
    } else {
      obj.tags = [];
    }
    message.nextcallbackUnix !== undefined && (obj.nextcallbackUnix = Math.round(message.nextcallbackUnix));
    message.transportprotocol !== undefined && (obj.transportprotocol = message.transportprotocol);
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigurationRequest>, I>>(base?: I): ConfigurationRequest {
    return ConfigurationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConfigurationRequest>, I>>(object: I): ConfigurationRequest {
    const message = createBaseConfigurationRequest();
    message.uuid = object.uuid ?? "";
    message.serverip = object.serverip ?? "";
    message.serverport = object.serverport ?? "";
    message.callbackfrequency = object.callbackfrequency ?? "";
    message.callbackjitter = object.callbackjitter ?? "";
    message.masterkey = object.masterkey ?? "";
    message.status = object.status ?? "";
    message.tags = object.tags?.map((e) => Tag.fromPartial(e)) || [];
    message.nextcallbackUnix = object.nextcallbackUnix ?? 0;
    message.transportprotocol = object.transportprotocol ?? "";
    return message;
  },
};

function createBaseConfigurationResponse(): ConfigurationResponse {
  return { serverip: "", serverport: "", callbackfrequency: "", callbackjitter: "", transportprotocol: "" };
}

export const ConfigurationResponse = {
  encode(message: ConfigurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverip !== "") {
      writer.uint32(18).string(message.serverip);
    }
    if (message.serverport !== "") {
      writer.uint32(26).string(message.serverport);
    }
    if (message.callbackfrequency !== "") {
      writer.uint32(34).string(message.callbackfrequency);
    }
    if (message.callbackjitter !== "") {
      writer.uint32(42).string(message.callbackjitter);
    }
    if (message.transportprotocol !== "") {
      writer.uint32(50).string(message.transportprotocol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.serverip = reader.string();
          break;
        case 3:
          message.serverport = reader.string();
          break;
        case 4:
          message.callbackfrequency = reader.string();
          break;
        case 5:
          message.callbackjitter = reader.string();
          break;
        case 6:
          message.transportprotocol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigurationResponse {
    return {
      serverip: isSet(object.serverip) ? String(object.serverip) : "",
      serverport: isSet(object.serverport) ? String(object.serverport) : "",
      callbackfrequency: isSet(object.callbackfrequency) ? String(object.callbackfrequency) : "",
      callbackjitter: isSet(object.callbackjitter) ? String(object.callbackjitter) : "",
      transportprotocol: isSet(object.transportprotocol) ? String(object.transportprotocol) : "",
    };
  },

  toJSON(message: ConfigurationResponse): unknown {
    const obj: any = {};
    message.serverip !== undefined && (obj.serverip = message.serverip);
    message.serverport !== undefined && (obj.serverport = message.serverport);
    message.callbackfrequency !== undefined && (obj.callbackfrequency = message.callbackfrequency);
    message.callbackjitter !== undefined && (obj.callbackjitter = message.callbackjitter);
    message.transportprotocol !== undefined && (obj.transportprotocol = message.transportprotocol);
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigurationResponse>, I>>(base?: I): ConfigurationResponse {
    return ConfigurationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConfigurationResponse>, I>>(object: I): ConfigurationResponse {
    const message = createBaseConfigurationResponse();
    message.serverip = object.serverip ?? "";
    message.serverport = object.serverport ?? "";
    message.callbackfrequency = object.callbackfrequency ?? "";
    message.callbackjitter = object.callbackjitter ?? "";
    message.transportprotocol = object.transportprotocol ?? "";
    return message;
  },
};

function createBaseCommandRequest(): CommandRequest {
  return { uuid: "" };
}

export const CommandRequest = {
  encode(message: CommandRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandRequest {
    return { uuid: isSet(object.uuid) ? String(object.uuid) : "" };
  },

  toJSON(message: CommandRequest): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CommandRequest>, I>>(base?: I): CommandRequest {
    return CommandRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommandRequest>, I>>(object: I): CommandRequest {
    const message = createBaseCommandRequest();
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBaseCommandResponse(): CommandResponse {
  return { uuid: "", commandtype: "", commandid: "", command: "" };
}

export const CommandResponse = {
  encode(message: CommandResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.commandtype !== "") {
      writer.uint32(18).string(message.commandtype);
    }
    if (message.commandid !== "") {
      writer.uint32(26).string(message.commandid);
    }
    if (message.command !== "") {
      writer.uint32(34).string(message.command);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.commandtype = reader.string();
          break;
        case 3:
          message.commandid = reader.string();
          break;
        case 4:
          message.command = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandResponse {
    return {
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      commandtype: isSet(object.commandtype) ? String(object.commandtype) : "",
      commandid: isSet(object.commandid) ? String(object.commandid) : "",
      command: isSet(object.command) ? String(object.command) : "",
    };
  },

  toJSON(message: CommandResponse): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.commandtype !== undefined && (obj.commandtype = message.commandtype);
    message.commandid !== undefined && (obj.commandid = message.commandid);
    message.command !== undefined && (obj.command = message.command);
    return obj;
  },

  create<I extends Exact<DeepPartial<CommandResponse>, I>>(base?: I): CommandResponse {
    return CommandResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommandResponse>, I>>(object: I): CommandResponse {
    const message = createBaseCommandResponse();
    message.uuid = object.uuid ?? "";
    message.commandtype = object.commandtype ?? "";
    message.commandid = object.commandid ?? "";
    message.command = object.command ?? "";
    return message;
  },
};

function createBaseCommandStatusRequest(): CommandStatusRequest {
  return { uuid: "", commandid: "", result: "", output: "" };
}

export const CommandStatusRequest = {
  encode(message: CommandStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.commandid !== "") {
      writer.uint32(18).string(message.commandid);
    }
    if (message.result !== "") {
      writer.uint32(26).string(message.result);
    }
    if (message.output !== "") {
      writer.uint32(34).string(message.output);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.commandid = reader.string();
          break;
        case 3:
          message.result = reader.string();
          break;
        case 4:
          message.output = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandStatusRequest {
    return {
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      commandid: isSet(object.commandid) ? String(object.commandid) : "",
      result: isSet(object.result) ? String(object.result) : "",
      output: isSet(object.output) ? String(object.output) : "",
    };
  },

  toJSON(message: CommandStatusRequest): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.commandid !== undefined && (obj.commandid = message.commandid);
    message.result !== undefined && (obj.result = message.result);
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },

  create<I extends Exact<DeepPartial<CommandStatusRequest>, I>>(base?: I): CommandStatusRequest {
    return CommandStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommandStatusRequest>, I>>(object: I): CommandStatusRequest {
    const message = createBaseCommandStatusRequest();
    message.uuid = object.uuid ?? "";
    message.commandid = object.commandid ?? "";
    message.result = object.result ?? "";
    message.output = object.output ?? "";
    return message;
  },
};

function createBaseCommandStatusResponse(): CommandStatusResponse {
  return { uuid: "" };
}

export const CommandStatusResponse = {
  encode(message: CommandStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommandStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommandStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommandStatusResponse {
    return { uuid: isSet(object.uuid) ? String(object.uuid) : "" };
  },

  toJSON(message: CommandStatusResponse): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CommandStatusResponse>, I>>(base?: I): CommandStatusResponse {
    return CommandStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommandStatusResponse>, I>>(object: I): CommandStatusResponse {
    const message = createBaseCommandStatusResponse();
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBaseKeysRequest(): KeysRequest {
  return { uuid: "", keys: "" };
}

export const KeysRequest = {
  encode(message: KeysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.keys !== "") {
      writer.uint32(18).string(message.keys);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeysRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeysRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.keys = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeysRequest {
    return { uuid: isSet(object.uuid) ? String(object.uuid) : "", keys: isSet(object.keys) ? String(object.keys) : "" };
  },

  toJSON(message: KeysRequest): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.keys !== undefined && (obj.keys = message.keys);
    return obj;
  },

  create<I extends Exact<DeepPartial<KeysRequest>, I>>(base?: I): KeysRequest {
    return KeysRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<KeysRequest>, I>>(object: I): KeysRequest {
    const message = createBaseKeysRequest();
    message.uuid = object.uuid ?? "";
    message.keys = object.keys ?? "";
    return message;
  },
};

function createBaseKeysResponse(): KeysResponse {
  return { uuid: "" };
}

export const KeysResponse = {
  encode(message: KeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeysResponse {
    return { uuid: isSet(object.uuid) ? String(object.uuid) : "" };
  },

  toJSON(message: KeysResponse): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  create<I extends Exact<DeepPartial<KeysResponse>, I>>(base?: I): KeysResponse {
    return KeysResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<KeysResponse>, I>>(object: I): KeysResponse {
    const message = createBaseKeysResponse();
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBaseFileRequest(): FileRequest {
  return { uuid: "" };
}

export const FileRequest = {
  encode(message: FileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileRequest {
    return { uuid: isSet(object.uuid) ? String(object.uuid) : "" };
  },

  toJSON(message: FileRequest): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  create<I extends Exact<DeepPartial<FileRequest>, I>>(base?: I): FileRequest {
    return FileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FileRequest>, I>>(object: I): FileRequest {
    const message = createBaseFileRequest();
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBaseFileResponse(): FileResponse {
  return { fileid: "", uuid: "", transfertype: "", filepath: "", chunk: new Uint8Array() };
}

export const FileResponse = {
  encode(message: FileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileid !== "") {
      writer.uint32(10).string(message.fileid);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.transfertype !== "") {
      writer.uint32(26).string(message.transfertype);
    }
    if (message.filepath !== "") {
      writer.uint32(34).string(message.filepath);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(42).bytes(message.chunk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileid = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.transfertype = reader.string();
          break;
        case 4:
          message.filepath = reader.string();
          break;
        case 5:
          message.chunk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileResponse {
    return {
      fileid: isSet(object.fileid) ? String(object.fileid) : "",
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      transfertype: isSet(object.transfertype) ? String(object.transfertype) : "",
      filepath: isSet(object.filepath) ? String(object.filepath) : "",
      chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(),
    };
  },

  toJSON(message: FileResponse): unknown {
    const obj: any = {};
    message.fileid !== undefined && (obj.fileid = message.fileid);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.transfertype !== undefined && (obj.transfertype = message.transfertype);
    message.filepath !== undefined && (obj.filepath = message.filepath);
    message.chunk !== undefined &&
      (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<FileResponse>, I>>(base?: I): FileResponse {
    return FileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FileResponse>, I>>(object: I): FileResponse {
    const message = createBaseFileResponse();
    message.fileid = object.fileid ?? "";
    message.uuid = object.uuid ?? "";
    message.transfertype = object.transfertype ?? "";
    message.filepath = object.filepath ?? "";
    message.chunk = object.chunk ?? new Uint8Array();
    return message;
  },
};

function createBaseFileToServer(): FileToServer {
  return { fileid: "", uuid: "", transfertype: "", path: "", status: "", chunk: new Uint8Array() };
}

export const FileToServer = {
  encode(message: FileToServer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileid !== "") {
      writer.uint32(10).string(message.fileid);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.transfertype !== "") {
      writer.uint32(26).string(message.transfertype);
    }
    if (message.path !== "") {
      writer.uint32(34).string(message.path);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(50).bytes(message.chunk);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileToServer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileToServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileid = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.transfertype = reader.string();
          break;
        case 4:
          message.path = reader.string();
          break;
        case 5:
          message.status = reader.string();
          break;
        case 6:
          message.chunk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileToServer {
    return {
      fileid: isSet(object.fileid) ? String(object.fileid) : "",
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      transfertype: isSet(object.transfertype) ? String(object.transfertype) : "",
      path: isSet(object.path) ? String(object.path) : "",
      status: isSet(object.status) ? String(object.status) : "",
      chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(),
    };
  },

  toJSON(message: FileToServer): unknown {
    const obj: any = {};
    message.fileid !== undefined && (obj.fileid = message.fileid);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.transfertype !== undefined && (obj.transfertype = message.transfertype);
    message.path !== undefined && (obj.path = message.path);
    message.status !== undefined && (obj.status = message.status);
    message.chunk !== undefined &&
      (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<FileToServer>, I>>(base?: I): FileToServer {
    return FileToServer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FileToServer>, I>>(object: I): FileToServer {
    const message = createBaseFileToServer();
    message.fileid = object.fileid ?? "";
    message.uuid = object.uuid ?? "";
    message.transfertype = object.transfertype ?? "";
    message.path = object.path ?? "";
    message.status = object.status ?? "";
    message.chunk = object.chunk ?? new Uint8Array();
    return message;
  },
};

function createBaseFileTransferStatusResponse(): FileTransferStatusResponse {
  return { fileid: "", uuid: "" };
}

export const FileTransferStatusResponse = {
  encode(message: FileTransferStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileid !== "") {
      writer.uint32(10).string(message.fileid);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileTransferStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileTransferStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileid = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileTransferStatusResponse {
    return {
      fileid: isSet(object.fileid) ? String(object.fileid) : "",
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
    };
  },

  toJSON(message: FileTransferStatusResponse): unknown {
    const obj: any = {};
    message.fileid !== undefined && (obj.fileid = message.fileid);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  create<I extends Exact<DeepPartial<FileTransferStatusResponse>, I>>(base?: I): FileTransferStatusResponse {
    return FileTransferStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FileTransferStatusResponse>, I>>(object: I): FileTransferStatusResponse {
    const message = createBaseFileTransferStatusResponse();
    message.fileid = object.fileid ?? "";
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBaseTag(): Tag {
  return { key: "", value: "" };
}

export const Tag = {
  encode(message: Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tag {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Tag): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Tag>, I>>(base?: I): Tag {
    return Tag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Tag>, I>>(object: I): Tag {
    const message = createBaseTag();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
