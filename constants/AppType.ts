export interface AuthContextType {
    isLoggedIn: boolean;
    login: (token: string) => Promise<void>;
    logout: () => Promise<void>;
}