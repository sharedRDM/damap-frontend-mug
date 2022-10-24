import { Project } from './project';
import { Contributor } from './contributor';
import { DataKind } from './enum/data-kind.enum';
import { Dataset } from './dataset';
import { Cost } from './cost';
import { Storage } from './storage';
import { DataQualityType } from './enum/data-quality-type.enum';
import { Repository } from './repository';
import { ExternalStorage } from './external-storage';

export interface Dmp {
  readonly created?: Date;
  readonly modified?: Date;
  readonly id: number;
  title?: string;
  description?: string;
  project: Project;
  contributors: Contributor[];
  dataKind: DataKind;
  reusedDataKind: DataKind;
  noDataExplanation: string;
  datasets: Dataset[];
  metadata: string;
  dataGeneration: string;
  documentation: string;
  dataQuality: DataQualityType[];
  otherDataQuality: string;
  structure: string;
  targetAudience: string;
  tools: string;
  restrictedDataAccess: string;
  personalData: boolean;
  personalDataCris: boolean;
  personalDataCompliance: string[];
  otherPersonalDataCompliance: string;
  sensitiveData: boolean;
  sensitiveDataCris: boolean;
  sensitiveDataSecurity: string[];
  otherDataSecurityMeasures: string;
  sensitiveDataAccess: string;
  legalRestrictions: boolean;
  legalRestrictionsCris: boolean;
  legalRestrictionsDocuments: string[];
  otherLegalRestrictionsDocument: string;
  legalRestrictionsComment: string;
  dataRightsAndAccessControl: string;
  humanParticipants: boolean;
  humanParticipantsCris: boolean;
  ethicalIssuesExist: boolean;
  ethicalIssuesExistCris: boolean;
  committeeReviewed: boolean;
  committeeReviewedCris: boolean;
  storage: Storage[];
  externalStorage: ExternalStorage[];
  externalStorageInfo: string;
  repositories: Repository[];
  restrictedAccessInfo: string;
  closedAccessInfo: string;
  costsExist: boolean;
  costsExistCris: boolean;
  costs: Cost[];
}