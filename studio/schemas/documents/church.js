export default {
    name: 'church',
    type: 'document',
    title: 'Church',
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
  