export const importAll = <T>(
  requireContext: __WebpackModuleApi.RequireContext
) => {
  return requireContext
    .keys()
    .filter((key) => key.match(/\.\//))
    .map(requireContext) as { default: T }[]
}

// https://github.com/SebiBasti/wandgestaltung-reinl.de/blob/main/src/utils/importAll.ts
