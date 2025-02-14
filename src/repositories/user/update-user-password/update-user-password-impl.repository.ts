export interface IUpdateUserPasswordRepository {
  updateUserPassword(id: string, newPassword: string): Promise<void>;
}
