export interface ReactStatements {
    id: number;
    type: string;
    [key: string]: any;
  }
  export interface ReactTestCaseTypes {
    modalOpen: boolean;
    describeId: number;
    itId: number;
    statementId: number;
    propId: number;
    describeBlocks: DescribeBlocks;
    itStatements: ItStatements;
    statements: Statements
  }
  export interface DescribeBlocks {
    byId: DescribeById;
    allIds: Array<string>;
  }
  export interface ItStatements {
    byId: Object;
    allIds: allIdsType;
  }
  type allIdsType = {
    [key: string]: string,
  }
  
  export interface Action {
    type: string;
    id?: number;
    serverFileName?: string;
    serverFilePath?: string;
    draggableStatements?: Array<ReactStatements>;
    index?: number;
    text?: string;
    assertion?: Assertion;
    db?: string | boolean;
    dbFilePath?: string;
    dbFileName?: string;
    testState?: object;
  }
  
  export interface Assertion {
    id: number;
    expectedResponse: string;
    value: string;
    matcher: string;
    not: boolean;
  }
  
  export interface Statements {
    byId: Object;
    allIds: Array<string>;
    componentPath: string;
    componentName: string;
  }

  export interface ReactTestComponentAssertion {
    describeId: string,
      itId: string,
      statementId: string,
      statement: {
        id: string,
        itId: string,
        describeId: string,
        type: string,
        eventType: string,
        eventValue: string,
        queryVariant: string,
        querySelector: string,
        queryValue: string,
        isNot: boolean,
        matcherType: string,
        matcherValue: string,
        suggestions: [],
      },
  }

  export interface UpdateActionProps {
    id: string,
    eventType?: string,
    eventValue?: string,
    queryVariant?: string,
    querySelector?: string,
    queryValue?: string,
    suggestions?: string[]
  }

  export interface UpdateAssertionProps {
    id: string,
    queryVariant?: string,
    querySelector?: string,
    queryValue?: string,
    isNot?: boolean,
    matcherType?: string,
    matcherValue?: string,
    suggestions?: string[],
  }

  export interface DescribeById {
    [key: string]: {
      id: string,
      text: string
    }
  }