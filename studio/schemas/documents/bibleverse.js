export default {
    name: 'bibleverse',
    type: 'document',
    title: 'Bibleverse',
    fields: [
        {
          name: 'title',
          type: 'string'
        },
        {
          name: 'thumbnail',
          type: 'string'
        }
    ],
    preview: {
      select: {
        title: 'title',
        thumbnail: 'thumbnail'
      }
    }
  }
  