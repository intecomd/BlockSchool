// Type definitions for react-google-login v2.5.4
// Project: https://github.com/anthonyjgrove/react-google-login
// Definitions by: Ruslan Ibragimov <https://github.com/IRus>
import {Component, ReactNode, CSSProperties} from 'react';

declare namespace ReactGoogleLogin {

  interface AuthResponse {
    readonly access_token: string;
    readonly id_token: string;
    readonly login_hint: string;
    readonly scope: string;
    readonly expires_in: number;
    readonly first_issued_at: number;
    readonly expires_at: number;
  }

  interface BasicProfile {
    getId(): string;
    getEmail(): string;
    getName(): string;
    getGivenName(): string;
    getFamilyName(): string;
    getImageUrl(): string;
  }

  // Based on https://developers.google.com/identity/sign-in/web/reference
  export interface GoogleLoginResponse {
    getBasicProfile(): BasicProfile;
    getAuthResponse(): AuthResponse;
    getGrantedScopes(): string;
    getHostedDomain(): string;
    getId(): string;
    isSignedIn(): boolean;
    hasGrantedScopes(scopes: string): boolean;
    disconnect(): void;
    grantOfflineAccess(options: GrantOfflineAccessOptions): Promise<GoogleLoginResponseOffline>;
    signIn(options: SignInOptions): Promise<any>;
    grant(options: SignInOptions): Promise<any>;
  }

  interface GrantOfflineAccessOptions {
    readonly scope?: string;
    readonly redirect_uri?: string;
  }

  interface SignInOptions {
    readonly scope?: string;
    readonly app_package_name?: string;
    readonly fetch_basic_profile?: boolean;
    readonly prompt?: string;
  }

  export interface GoogleLoginResponseOffline {
    readonly code: string;
  }

  export interface GoogleLoginProps {
    readonly onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void,
    readonly onFailure: (error: any) => void,
    readonly clientId: string,
    readonly onRequest?: () => void,
    readonly buttonText?: string,
    readonly offline?: boolean,
    readonly scope?: string,
    readonly className?: string,
    readonly redirectUri?: string,
    readonly cookiePolicy?: string,
    readonly loginHint?: string,
    readonly hostedDomain?: string,
    readonly children?: ReactNode,
    readonly style?: CSSProperties,
    readonly tag?: string;
  }

  export default class GoogleLogin extends Component<GoogleLoginProps, {}> {
  }
}

export = ReactGoogleLogin;
