import {
  Finding,
  TransactionEvent,
  FindingSeverity,
  FindingType,
  HandleTransaction,
} from "forta-agent";
import { provideFunctionCallsDetectorHandler } from "forta-agent-tools";

export const RELY_FUNCTION_SIG = "rely(address)";

export const createFinding = (
  metadata: { [key: string]: any } | undefined
): Finding => {
  const reliedAddress: string = metadata?.arguments[0];

    return Finding.fromObject({
    name: "Maker OSM Contract RELY Function",
    description: "RELY Function is called",
    alertId: "MakerDAO-OSM-3",
    severity: FindingSeverity.Medium,
    type: FindingType.Info,
    everestId: "0xbabb5eed78212ab2db6705e6dfd53e7e5eaca437",
    metadata: {
      contract: metadata ? metadata.to : null,
      reliedAddress: reliedAddress,
    },
  });
};

const createAgentHandler = (_contract: string): HandleTransaction => {
  return provideFunctionCallsDetectorHandler(createFinding, RELY_FUNCTION_SIG, {
    to: _contract,
  });
};

export default function provideRelyFunctionHandler(
  contracts: string[]
): HandleTransaction {
  const handlers: HandleTransaction[] = contracts.map((contract: string) =>
    createAgentHandler(contract.toLowerCase())
  );

  return async (txEvent: TransactionEvent): Promise<Finding[]> => {
    let findings: Finding[] = [];

    for (let handler of handlers) {
      const finding = await handler(txEvent);
      findings.push(...finding);
    }
    return findings;
  };
}
