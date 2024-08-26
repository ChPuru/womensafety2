import { RiskZonePrediction as TRiskZonePrediction } from "../api/riskZonePrediction/RiskZonePrediction";

export const RISKZONEPREDICTION_TITLE_FIELD = "riskLevel";

export const RiskZonePredictionTitle = (
  record: TRiskZonePrediction
): string => {
  return record.riskLevel?.toString() || String(record.id);
};
