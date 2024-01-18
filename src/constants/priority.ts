export const priorityConstant: Record<string, Record<string, string>> = {
  award: {
    award: 'award',
    middle: 'award',
    under: 'middle',
  },
  middle: {
    award: 'award',
    middle: 'middle',
    under: 'under',
  },
  under: {
    award: 'middle',
    middle: 'under',
    under: 'under',
  },
};
