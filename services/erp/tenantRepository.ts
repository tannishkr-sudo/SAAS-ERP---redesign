/** All persistence queries must accept organizationId from the authenticated session.
 * This prevents a request from selecting records based solely on a public ERP id. */
export type TenantScope={organizationId:string; userId:string};
export function assertTenantScope(scope:TenantScope){if(!scope.organizationId||!scope.userId)throw new Error("Authenticated tenant scope required");return scope}
