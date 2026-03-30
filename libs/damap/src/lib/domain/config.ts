import { ServiceConfig } from './config-services';

export interface Config {
  readonly issuer: string;
  readonly clientID: string;
  readonly scope: string;
  readonly userIdClaim: string;
  readonly env: string;
  readonly appTitle: string;
  readonly personSearchServiceConfigs: ServiceConfig[];
  readonly fitsServiceAvailable: boolean;
  readonly livePreviewAvailable: boolean;
  readonly ethicalReportEnabled: boolean;
}
