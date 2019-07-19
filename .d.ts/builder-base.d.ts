export declare abstract class BuilderBase<E> {
    private requirements;
    constructor();
    protected addRequirements(...requirementNames: string[]): void;
    protected addOptionals(...optionalNames: string[]): void;
    protected fulfillRequirement(requirementName: string, value: any): void;
    protected getValueOfRequirement(requirementName: string): any;
    protected getNamesOfUnfulfilledRequirements(): string[];
    protected getNamesOfUnfulfilledOptionalRequirements(): string[];
    protected getNamesOfUnfulfilledRequirementsAndOptionalRequirements(): string[];
    protected getErrorMessageForIncompleteBuilder(): string;
    protected checkFulfillment(requirementName?: string): boolean;
    abstract build(): E;
}
