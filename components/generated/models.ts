// Code generated by wunderctl. DO NOT EDIT.



export interface HelloResponse {
	data?: HelloResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface HelloResponseData {
	gql_hello?: string;
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}
