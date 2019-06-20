import abilityToBenefitTemplates from "./falsecert_ability_to_benefit";
import creditTemplates from "./credit_report_dispute_letter";
// import disqualifyingTemplates from "./falsecert_disqualifying";
// import generalDisputeTemplates from "./general_debt_dispute_letter";
import humanizeString from "humanize-string";
// import privateStudentLoanTemplates from "./private_student_loan_dispute_letter";
// import taxOffsetReviewTemplates from "./tax_offset_review";
// import unauthorizedSignatureTemplates from "./unauthorized_signature_form";
// import wageGarnishmentTemplates from "./wage_garnishment";

const templates = {
  "Credit Report Dispute Letter": creditTemplates,
  "False Certification Ability to Benefit": abilityToBenefitTemplates,
  // ...
};

export const getAllTemplates = disputeType => {
  const type = humanizeString(disputeType);

  return templates[type];
};
