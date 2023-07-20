export interface IEthereum {
  enable(): Promise<void>;
  request<T>(args: IRequestArguments): Promise<T>;
  accounts?: string[];
}

export interface IRequestArguments {
  method: string;
  params?: string[];
}

export interface IWindowWithEthereum extends Window {
  ethereum?: IEthereum | undefined;
}

declare global {
  interface Window {
    ethereum?: IEthereum | undefined;
  }
}
