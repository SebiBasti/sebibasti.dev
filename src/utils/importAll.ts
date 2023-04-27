export const importAll = (
  requireContext: __WebpackModuleApi.RequireContext
) => {
  return requireContext
    .keys()
    .filter((key) => key.match(/\.\//))
    .map((element) => {
      const el = element.replace(/\.|\/|md/g, '').split('_')
      return {
        date: `${el[0]}.${el[1]}.${el[2]} -\u00A0${el[3]}:${el[4]}`,
        title: el.slice(5).join(' '),
        content: requireContext(element)
      }
    })
}

// https://github.com/SebiBasti/wandgestaltung-reinl.de/blob/main/src/utils/importAll.ts
