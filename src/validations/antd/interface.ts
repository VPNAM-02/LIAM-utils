export interface ValidateRule {
  email: { handle: (value: string) => boolean; message: string };
  phoneNumber: { handle: (value: string) => boolean; message: string };
}
