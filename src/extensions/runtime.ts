/**
 * AUTO-GENERATED custom-function runtime — do not edit (rewritten every build).
 * Resolves a custom function by name from the user registry in ./index and invokes it.
 * Register your functions in ./index.ts (preserved across regenerations).
 */
import * as registry from './index';

export type CustomFunctionContext = {
  value?: any;
  dataMapping?: Record<string, any>;
};

export async function callCustomFunction(
  name: string,
  context: CustomFunctionContext = {},
): Promise<any> {
  const reg: Record<string, any> = (registry as any) || {};
  const fn =
    reg[name] ??
    reg.default?.[name] ??
    reg.customFunctions?.[name] ??
    reg.registry?.[name];
  if (typeof fn !== 'function') {
    console.warn(
      `[extensions] custom function "${name}" is not registered in src/extensions/index.ts`,
    );
    return undefined;
  }
  try {
    return await fn(context);
  } catch (error) {
    console.warn(`[extensions] custom function "${name}" threw:`, error);
    return undefined;
  }
}
