// Code generated by wunderctl. DO NOT EDIT.

import type { HelloResponse, HelloResponseData } from "./models";
import { createContext } from "react";
import {
	QueryArgsWithInput,
	SubscriptionArgs,
	SubscriptionArgsWithInput,
	hooks,
	WunderGraphContextProperties,
	Client,
} from "@wundergraph/nextjs";

export type Role = "admin" | "user";

export enum AuthProvider {
	"github" = "github",
}

export const AuthProviders = {
	github: AuthProvider.github,
};

const defaultWunderGraphContextProperties: WunderGraphContextProperties<Role> = {
	ssrCache: {},
	client: null,
	clientConfig: {
		applicationHash: "c4ac7344",
		applicationPath: "app/main",
		baseURL: "http://localhost:9991",
		sdkVersion: "0.96.1",
		authenticationEnabled: true,
	},
	user: null,
	setUser: (value) => {},
	isWindowFocused: "pristine",
	setIsWindowFocused: (value) => {},
	refetchMountedOperations: 0,
	setRefetchMountedOperations: (value) => {},
};

export const WunderGraphContext = createContext<WunderGraphContextProperties<Role>>(
	defaultWunderGraphContextProperties
);

export const withWunderGraph = hooks.withWunderGraphContextWrapper(
	WunderGraphContext,
	defaultWunderGraphContextProperties
);

export const useWunderGraph = hooks.useWunderGraph<Role, AuthProvider>(WunderGraphContext);

export const useQuery = {
	Hello: hooks.useQueryWithoutInput<HelloResponseData, Role>(WunderGraphContext, {
		operationName: "Hello",
		requiresAuthentication: false,
	}),
};

export const useMutation = {};

export const useSubscription = {};

export const useLiveQuery = {
	Hello: (args?: SubscriptionArgs) =>
		hooks.useSubscriptionWithoutInput<HelloResponseData, Role>(WunderGraphContext, {
			operationName: "Hello",
			isLiveQuery: true,
			requiresAuthentication: false,
		})(args),
};
