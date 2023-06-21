type Func = (...args: any[]) => any;
type SpyObjMethodNames<T = undefined> = T extends undefined
  ? ReadonlyArray<string> | { [methodName: string]: any }
  :
      | ReadonlyArray<keyof T>
      | { [P in keyof T]?: T[P] extends Func ? ReturnType<T[P]> : any };

export type PluginSpyObj<T> = jasmine.SpyObj<T> & {
  resetCalls: () => void;
};

export const createPluginSpyObj = <T>(
  object: T,
  methodNames: SpyObjMethodNames<T>
): PluginSpyObj<T> => {
  const spyObj = {
    resetCalls: () => {
      resetPluginSpyObj<T>(spyObj);
    },
  } as any;

  for (const methodName of methodNames as any[]) {
    spyObj[methodName] = spyOn(object, methodName);
  }

  return spyObj;
};

const resetPluginSpyObj = <T>(spyObj: jasmine.SpyObj<T>): void => {
  Object.keys(spyObj).forEach((methodName) => {
    if (methodName === 'resetCalls') {
      return;
    }

    spyObj[methodName].calls.reset();
  });
};
